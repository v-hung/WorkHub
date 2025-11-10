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
import { RoleCreateUpdateRequest, RoleDto } from "@/generate-api";
import { useRoleAction } from "../../hooks/useRoleAction";
import { useNavigate } from "react-router";
import { PermissionMatrixForm } from "./PermissionMatrixForm";

type State = HTMLAttributes<HTMLDivElement> & {
  record?: RoleDto;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type RoleFormCreateRefState = {
  handelUpsert: () => void;
};

const RoleFormCreate = forwardRef<RoleFormCreateRefState, State>(
  (props, ref) => {
    const { className, record, setLoading, ...rest } = props;

    const navigate = useNavigate();
    const { loading, create, update, formDefault } = useRoleAction();

    useEffect(() => {
      if (setLoading) {
        setLoading(loading);
      }
    }, [loading, setLoading]);

    const [form] = Form.useForm<RoleCreateUpdateRequest>();
    const [formState] = useState<RoleCreateUpdateRequest>(formDefault(record));

    useImperativeHandle(ref, () => ({
      handelUpsert() {
        form.validateFields().then(async () => {
          const formValues = form.getFieldsValue();

          const body: RoleCreateUpdateRequest = {
            ...formValues,
          };

          if (!record) {
            await create(body, () => navigate("/roles"));
          } else {
            await update(record.id, body, () => navigate("/roles"));
          }
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
        >
          <Row wrap gutter={{ sm: 8, md: 16 }}>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Role name"
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

            <Col xs={24}>
              <PermissionMatrixForm form={form} />
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

export default RoleFormCreate;
