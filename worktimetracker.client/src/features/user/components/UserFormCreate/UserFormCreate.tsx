import { Col, Form, Grid, Input, Radio, Row, Select } from "antd";
import {
  forwardRef,
  HTMLAttributes,
  useImperativeHandle,
  useState,
} from "react";
import { useUserAction } from "../../hooks/useUserAction";
import { UserCreateUpdateRequest, UserPosition } from "@/generate-api";
import MyDatePicker from "@/ui/form/MyDatePicker";
import styles from "./UserFormCreate.module.css";

const { useBreakpoint } = Grid;

type State = HTMLAttributes<HTMLDivElement> & {
  userId?: string;
};

export type UserFormCreateRefState = {
  handelUpsert: () => void;
};

const UserFormCreate = forwardRef<UserFormCreateRefState, State>(
  (props, ref) => {
    const { className, userId, ...rest } = props;

    const screens = useBreakpoint();

    const { createUser, updateUser } = useUserAction();

    const [form] = Form.useForm();
    const [formState] = useState<UserCreateUpdateRequest>(
      new UserCreateUpdateRequest()
    );

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
          layout={screens.lg ? "horizontal" : "vertical"}
          form={form}
          initialValues={formState}
          validateTrigger="onBlur"
          labelCol={{ lg: { span: 7 }, xl: { span: 9 }, xxl: { span: 8 } }}
        >
          <Row wrap gutter={{ sm: 8, md: 16 }}>
            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Employee code"
                name="employeeCode"
                rules={[{ max: 36, required: true }]}
              >
                <Input placeholder="Employee code" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="FullName"
                name="fullName"
                rules={[{ max: 36, required: true }]}
              >
                <Input placeholder="FullName" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ max: 36, required: true }]}
              >
                <Input placeholder="email" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="BirthDate"
                name="userDetail.birthDate"
                rules={[{ required: true }]}
              >
                <MyDatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="email" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Nationality"
                name="nationality"
                rules={[{ required: true }]}
              >
                <Select>
                  <Select.Option>Vietnamese</Select.Option>
                  <Select.Option>Japanese</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Gender"
                name="userDetail.gender"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Radio value="1"> Male </Radio>
                  <Radio value="0"> Female </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="User Position"
                name="userPosition"
                rules={[{ required: true }]}
              >
                <Select>
                  {Object.entries(UserPosition).map(([key, value]) => (
                    <Select.Option value={value} key={key}>
                      {key}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Permanent Address"
                name="userDetail.permanentAddress"
                rules={[{ required: true }]}
                className={styles.colCustomResponsive}
              >
                <Input placeholder="Permanent Address" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
);

export default UserFormCreate;
