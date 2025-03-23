import {
  Checkbox,
  Col,
  Form,
  Grid,
  Input,
  Radio,
  Row,
  Select,
  Spin,
} from "antd";
import {
  Dispatch,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useUserAction } from "../../hooks/useUserAction";
import {
  Nationality,
  UserCreateUpdateRequest,
  UserPosition,
  UserStatus,
} from "@/generate-api";
import MyDatePicker from "@/ui/form/MyDatePicker";
import styles from "./UserFormCreate.module.css";
import { TeamSelectMemo } from "@/features/team/components/TeamSelect/TeamSelect";
import { UserSelectMemo } from "../UserSelect/UserSelect";
import { useAuthStore } from "@/stores/auth.store";
import { RoleSelectMemo } from "@/features/role/components/RoleSelect/RoleSelect";
import { WorkTimeSelectMemo } from "@/features/workTime/components/WorkTimeSelect/WorkTimeSelect";

const { useBreakpoint } = Grid;

type State = HTMLAttributes<HTMLDivElement> & {
  userId?: string;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type UserFormCreateRefState = {
  handelUpsert: () => void;
};

const UserFormCreate = forwardRef<UserFormCreateRefState, State>(
  (props, ref) => {
    const { className, userId, setLoading, ...rest } = props;

    const screens = useBreakpoint();
    const currentUser = useAuthStore((state) => state.user);

    const { loading, createUser, updateUser } = useUserAction();

    useEffect(() => {
      if (setLoading) {
        setLoading(loading);
      }
    }, [loading, setLoading]);

    const [form] = Form.useForm();
    const [formState] = useState<UserCreateUpdateRequest>(
      new UserCreateUpdateRequest()
    );
    const [isChangePass, setIsChangePass] = useState(false);

    useImperativeHandle(ref, () => ({
      handelUpsert() {
        form.validateFields().then(async () => {
          const formValues = form.getFieldsValue();
          if (!userId) {
            createUser(formValues);
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
                name="code"
                rules={[{ max: 36, required: true }]}
              >
                <Input
                  placeholder="E.g. WBC10 "
                  onInput={(e) =>
                    ((e.target as HTMLInputElement).value = (
                      e.target as HTMLInputElement
                    ).value.toUpperCase())
                  }
                />
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
              <Form.Item label="BirthDate" name={["userDetail", "birthDate"]}>
                <MyDatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Phone Number" name="phoneNumber">
                <Input placeholder="email" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Nationality"
                name={["userDetail", "nationality"]}
                rules={[{ required: true }]}
              >
                <Select
                  options={Object.entries(Nationality).map(([key, value]) => ({
                    value,
                    label: key,
                  }))}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Gender" name={["userDetail", "gender"]}>
                <Radio.Group>
                  <Radio value="1"> Male </Radio>
                  <Radio value="0"> Female </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="User Status" name="userStatus">
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
                name={["userDetail", "permanentAddress"]}
                className={styles.colCustomResponsive}
              >
                <Input placeholder="Permanent Address" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Contact Address"
                name={["userDetail", "contactAddress"]}
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
              <Form.Item label="Team" name="teamId">
                <TeamSelectMemo />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Supervisor" name="supervisorId">
                <UserSelectMemo withoutIds={[currentUser!.id]} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Roles"
                name="roleNames"
                rules={[{ required: true }]}
                className={styles.colCustomResponsive}
              >
                <RoleSelectMemo />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="WorkTime" name="workTimeId">
                <WorkTimeSelectMemo />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Leave Hours" name="leaveHours">
                <Input />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Years Of Work"
                name={["userDetail", "yearsOfWork"]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Change password" layout="horizontal">
                <Checkbox
                  checked={isChangePass}
                  onChange={(e) => setIsChangePass(e.target.checked)}
                />
              </Form.Item>
            </Col>
            <Col span={24} />

            {isChangePass && (
              <>
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
              </>
            )}
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

export default UserFormCreate;
