import { Form, Input, Modal } from "antd";
import { memo, useState, type ComponentProps, type FC } from "react";
import { useTimesheetRequestContext } from "../../context/TimesheetRequestContext";
import { useAuthStore } from "@/stores/auth.store";
import MyDatePicker from "@/ui/form/MyDatePicker";

type State = ComponentProps<typeof Modal>;

const TimesheetRequest: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const { open, setOpen } = useTimesheetRequestContext();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const supervisor = useAuthStore((state) => state.user!.supervisor);

  const [form] = Form.useForm();
  const [formState] = useState<any>();

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      {...rest}
      className={`${className}`}
      title="Timesheet Request"
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form autoComplete="off" layout="vertical" style={{ marginTop: "2rem" }}>
        <Form.Item
          label="Reviewer"
          name="reviewerId"
          rules={[{ required: true, message: "Please input your Reviewer!" }]}
        >
          <Input value={supervisor?.fullName} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="Date">
          <MyDatePicker format="yyyy-mm-dd" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TimesheetRequest;

export const TimesheetRequestMemo = memo(TimesheetRequest);
