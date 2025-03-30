import { Form, Input, Modal } from "antd";
import { memo, useState, type ComponentProps, type FC } from "react";
import { useAuthStore } from "@/stores/auth.store";
import MyDatePicker from "@/ui/form/MyDatePicker";
import { useRequestContext } from "../../contexts/RequestContext";
import { CreateTimesheetRequestDto, RequestType } from "@/generate-api";
import { useTimesheetRequestAction } from "../../hooks/useTimesheetRequestAction";

type State = ComponentProps<typeof Modal>;

const TimesheetRequest: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const { open, requestType, closeRequest } = useRequestContext();
  const { loading, create } = useTimesheetRequestAction();

  const supervisor = useAuthStore((state) => state.user!.supervisor);

  const [form] = Form.useForm();
  const [formState] = useState<CreateTimesheetRequestDto>();

  const handleOk = () => {
    form.validateFields().then(async () => {
      const formValues = form.getFieldsValue();

      await create(formValues).then(() => {
        closeRequest();
      });
    });
  };

  const handleCancel = () => {
    closeRequest();
  };

  return (
    <Modal
      open={open && requestType == RequestType.TimesheetAdjustment}
      {...rest}
      className={`${className}`}
      title="Timesheet Request"
      onOk={handleOk}
      confirmLoading={loading}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        initialValues={formState}
        validateTrigger="onBlur"
        name="timesheetRequest"
        autoComplete="off"
        layout="vertical"
        style={{ marginTop: "2rem" }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
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
