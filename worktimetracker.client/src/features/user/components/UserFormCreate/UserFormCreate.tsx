import { Checkbox, Col, Form, Grid, Input, Radio, Row, Select } from "antd";
import {
  forwardRef,
  HTMLAttributes,
  useImperativeHandle,
  useState,
} from "react";
import { useUserAction } from "../../hooks/useUserAction";
import {
  UserCreateUpdateRequest,
  UserPosition,
  UserStatus,
} from "@/generate-api";
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
          labelCol={{ lg: { span: 9 }, xl: { span: 10 }, xxl: { span: 8 } }}
          style={{ paddingTop: "1.5rem" }}
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
                  <Select.Option key={"vi"}>Vietnamese</Select.Option>
                  <Select.Option key={"jp"}>Japanese</Select.Option>
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
                label="User Status"
                name="userStatus"
                rules={[{ required: true }]}
              >
                <Select
                  options={Object.entries(UserStatus).map(([key, value]) => ({
                    value,
                    label: key,
                  }))}
                />
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

            <Col span={24}>
              <Form.Item
                label="Contact Address"
                name="userDetail.contactAddress"
                rules={[{ required: true }]}
                className={styles.colCustomResponsive}
              >
                <Input placeholder="Contact Address" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="User Position"
                name="userPosition"
                rules={[{ required: true }]}
              >
                <Select
                  options={Object.entries(UserPosition).map(([key, value]) => ({
                    value,
                    label: key,
                  }))}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Team" name="teamID">
                {/* <Select
                  options={Object.entries(UserPosition).map(([key, value]) => ({
                    value,
                    label: key,
                  }))}
                /> */}
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Supervisor"
                name="supervisorId"
                rules={[{ required: true }]}
              >
                <Select
                  options={Object.entries(UserPosition).map(([key, value]) => ({
                    value,
                    label: key,
                  }))}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Roles"
                name="roleNames"
                rules={[{ required: true }]}
                className={styles.colCustomResponsive}
              >
                <Select
                  options={Object.entries(UserPosition).map(([key, value]) => ({
                    value,
                    label: key,
                  }))}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="WorkTime"
                name="workTimeId"
                rules={[{ required: true }]}
              >
                <Select
                  options={Object.entries(UserPosition).map(([key, value]) => ({
                    value,
                    label: key,
                  }))}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Leave Hours"
                name="leaveHours"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Years Of Work"
                name="userDetail.yearsOfWork"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Change password" layout="horizontal">
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={24} />

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} />

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Re Password"
                name="rePassword"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
);

export default UserFormCreate;
