import { Col, Form, Input, Row, Select } from "antd";
import {
  forwardRef,
  HTMLAttributes,
  useImperativeHandle,
  useState,
} from "react";
import { useUserAction } from "../../hooks/useUserAction";
import { UserCreateUpdateRequest, UserPosition } from "@/generate-api";

type State = HTMLAttributes<HTMLDivElement> & {
  userId?: string;
};

export type UserFormCreateRefState = {
  handelUpsert: () => void;
};

const UserFormCreate = forwardRef<UserFormCreateRefState, State>(
  (props, ref) => {
    const { className, userId, ...rest } = props;

    const [form] = Form.useForm();
    const [formState] = useState<UserCreateUpdateRequest>(
      new UserCreateUpdateRequest()
    );

    const { createUser, updateUser } = useUserAction();

    useImperativeHandle(ref, () => ({
      handelUpsert() {
        form.validateFields().then(async () => {
          if (!userId) {
            createUser(formState);
          } else {
            updateUser(userId, formState);
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
          validateTrigger="onBlur"
        >
          <Row wrap>
            <Col span={24}>
              <Form.Item
                label="FullName"
                name="fullName"
                rules={[{ max: 36, required: true }]}
              >
                <Input placeholder="FullName" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="User Position"
                name="userPosition"
                rules={[{ required: true }]}
              >
                <Select>
                  {Object.entries(UserPosition).map(([key, value]) => (
                    <Select.Option value={value}>{key}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
);

export default UserFormCreate;
