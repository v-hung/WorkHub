import { Col, Form, Input, Row, Spin } from "antd";
import {
  Dispatch,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { CreateDeviceCategoryCommand, DeviceCategoryDto } from "@/generate-api";
import { useNavigate } from "react-router";
import { useDeviceCategoryAction } from "@/features/deviceCategory/hooks/useDeviceCategoryAction";
import { DeviceSelectMemo } from "@/features/device/components/DeviceSelect/DeviceSelect";

type State = HTMLAttributes<HTMLDivElement> & {
  record?: DeviceCategoryDto;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type DeviceCategoryFormCreateRefState = {
  handelUpsert: () => void;
};

const DeviceCategoryFormCreate = forwardRef<
  DeviceCategoryFormCreateRefState,
  State
>((props, ref) => {
  const { className, record, setLoading, ...rest } = props;

  const navigate = useNavigate();
  const { loading, create, update, formDefault } = useDeviceCategoryAction();

  useEffect(() => {
    if (setLoading) {
      setLoading(loading);
    }
  }, [loading, setLoading]);

  const [form] = Form.useForm();
  const [formState] = useState<CreateDeviceCategoryCommand>(
    formDefault(record)
  );

  useImperativeHandle(ref, () => ({
    handelUpsert() {
      form.validateFields().then(async () => {
        const formValues = form.getFieldsValue();

        if (!record) {
          await create(formValues);
        } else {
          await update(record.id, formValues);
        }

        navigate("/device-categories");
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
              label="DeviceCategory name"
              name="name"
              rules={[{ required: true }]}
            >
              <Input placeholder="name" />
            </Form.Item>
          </Col>

          <Col span={24} />

          <Col xs={24} lg={12}>
            <Form.Item label="Description" name="description">
              <Input placeholder="description" />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item label="Devices" name="deviceIds">
              <DeviceSelectMemo mode="multiple" />
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
});

export default DeviceCategoryFormCreate;
