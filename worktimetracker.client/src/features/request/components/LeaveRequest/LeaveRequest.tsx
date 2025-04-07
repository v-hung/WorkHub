import { Form, Input, Modal } from "antd";
import { memo, useEffect, useState, type ComponentProps, type FC } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { useRequestContext } from "../../contexts/RequestContext";
import {
  CreateLeaveRequestDtoCustomType,
  useLeaveRequestAction,
} from "../../hooks/useLeaveRequestAction";
import { CreateLeaveRequestDto, RequestType } from "@/generate-api";
import MyDatePicker from "@/ui/form/MyDatePicker";
import TextArea from "antd/es/input/TextArea";
import MyRangeTimePicker from "@/ui/form/MyRangeTimePicker";
import {
  requestDisabledTime,
  requestValidateTime,
} from "../../utils/request.util";
import { useTimesheetContext } from "@/features/timesheet/context/TimesheetContext";

type State = ComponentProps<typeof Modal>;

const LeaveRequest: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const { isOpen, closeRequest, date } = useRequestContext();
  const { getTimesheets, isCurrentMonth } = useTimesheetContext();
  const { loading, create, formDefault } = useLeaveRequestAction();

  const workTime = useAuthStore((state) => state.user!.workTime);

  const [form] = Form.useForm<CreateLeaveRequestDtoCustomType>();
  const [formState] = useState<CreateLeaveRequestDtoCustomType>(formDefault());

  const handleOk = () => {
    form.validateFields().then(async () => {
      const formValues = form.getFieldsValue();

      const body: CreateLeaveRequestDto = {
        ...formValues,
        breakStartDate: formValues.breakTime[0]!,
        breakEndDate: formValues.breakTime[1]!,
      };

      await create(body).then(() => {
        closeRequest();
      });

      if (isCurrentMonth) {
        await getTimesheets();
      }
    });
  };

  const handleCancel = () => {
    closeRequest();
  };

  useEffect(() => {
    if (form && isOpen(RequestType.LeaveRequest)) {
      form.resetFields();
      form.setFieldsValue(formDefault(date));
    }
  }, [date, form, isOpen(RequestType.LeaveRequest)]);

  return (
    <Modal
      open={isOpen(RequestType.LeaveRequest)}
      {...rest}
      className={`${className}`}
      title="Leave Request"
      onOk={handleOk}
      confirmLoading={loading}
      onCancel={handleCancel}
      maskClosable={false}
    >
      <Form
        form={form}
        initialValues={formState}
        validateTrigger="onSubmit"
        name="leaveRequest"
        autoComplete="off"
        layout="horizontal"
        style={{ marginTop: "2rem" }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item name="requestType" hidden>
          <Input disabled />
        </Form.Item>

        <Form.Item
          name="approvedId"
          rules={[{ required: true, message: "Please input your Approved!" }]}
          hidden
        >
          <Input disabled />
        </Form.Item>

        <Form.Item shouldUpdate noStyle>
          {({ getFieldError }) => (
            <Form.Item
              label="Approved User"
              name="approvedName"
              validateStatus={
                getFieldError("approvedId")?.length ? "error" : ""
              }
              help={getFieldError("approvedId")?.[0]}
            >
              <Input disabled />
            </Form.Item>
          )}
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please input your date!" }]}
        >
          <MyDatePicker />
        </Form.Item>

        <Form.Item
          label="Break Time"
          name="breakTime"
          required
          rules={[{ validator: requestValidateTime(workTime, true) }]}
        >
          <MyRangeTimePicker
            disabledTime={() => requestDisabledTime(workTime)}
            hideDisabledOptions
            showSecond={false}
          />
        </Form.Item>

        <Form.Item
          label="Reason"
          name="reason"
          rules={[{ required: true, message: "Please input your reason!" }]}
        >
          <TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LeaveRequest;

export const LeaveRequestMemo = memo(LeaveRequest);
