import { Col, Form, Input, Row, Select, Spin } from "antd";
import {
  Dispatch,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { CreateDeviceCommand, DeviceDto, DeviceStatus } from "@/generate-api";
import { useDeviceAction } from "../../hooks/useDeviceAction";
import { useNavigate } from "react-router";
import { UserSelectMemo } from "@/features/user/components/UserSelect/UserSelect";
import { DeviceCategorySelectMemo } from "@/features/deviceCategory/components/DeviceCategorySelect/DeviceCategorySelect";

type State = HTMLAttributes<HTMLDivElement> & {
  record?: DeviceDto;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type DeviceFormCreateRefState = {
  handelUpsert: () => void;
};

const DeviceFormCreate = forwardRef<DeviceFormCreateRefState, State>(
  (props, ref) => {
    const { className, record, setLoading, ...rest } = props;

    const navigate = useNavigate();
    const { loading, create, update, formDefault } = useDeviceAction();

    useEffect(() => {
      if (setLoading) {
        setLoading(loading);
      }
    }, [loading, setLoading]);

    const [form] = Form.useForm();
    const [formState] = useState<CreateDeviceCommand>(formDefault(record));

    useImperativeHandle(ref, () => ({
      handelUpsert() {
        form.validateFields().then(async () => {
          const formValues = form.getFieldsValue();

          if (!record) {
            await create(formValues);
          } else {
            await update(record.id, formValues);
          }

          navigate("/devices");
        });
      },
    }));

    return (
      <div {...rest} className={`form-container ${className}`}>
        <Form
          layout="vertical"
          form={form}
          initialValues={formState}
          validateTrigger="onSubmit"
          style={{
            paddingRight: "0.75rem",
            paddingTop: "1rem",
            paddingLeft: "0.75rem",
          }}
        >
          <Row wrap gutter={{ sm: 8, md: 16 }}>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Device name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input placeholder="name" />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <Form.Item label="Description" name="description">
                <Input placeholder="description" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Location" name="location">
                <Input placeholder="location" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Status" name="status">
                <Select
                  options={Object.entries(DeviceStatus).map(([key, value]) => ({
                    value,
                    label: key,
                  }))}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Assigned User" name="assignedUserId">
                <UserSelectMemo />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Device Categories" name="deviceCategoryIds">
                <DeviceCategorySelectMemo mode="multiple" />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        {loading && (
          <div className="loading-container">
            <Spin />
          </div>
        )}
      </div>
    );
  }
);

export default DeviceFormCreate;
