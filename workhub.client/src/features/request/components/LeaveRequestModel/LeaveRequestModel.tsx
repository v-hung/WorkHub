import { Form, Input, Modal } from "antd";
import { memo, useEffect, useState, type ComponentProps, type FC } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { useRequestContext } from "../../contexts/RequestContext";
import {
  CreateLeaveRequestDtoCustomType,
  useLeaveRequestAction,
} from "../../hooks/useLeaveRequestAction";
import { CreateLeaveRequestDto, RequestType } from "@/generate-api";
import DatePicker from "@/ui/form/DatePicker";
import TextArea from "antd/es/input/TextArea";
import RangeTimePicker from "@/ui/form/RangeTimePicker";
import {
  requestDisabledTime,
  requestValidateTime,
} from "../../utils/request.util";
import { useTimesheetContext } from "@/features/timesheet/context/TimesheetContext";

type State = ComponentProps<typeof Modal>;

const LeaveRequestModel: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const { isOpen, closeRequest, date } = useRequestContext();
  const { getCurrentTimesheets, isCurrentMonth } = useTimesheetContext();
  const { loading, create, formDefault } = useLeaveRequestAction();

  const workTime = useAuthStore((state) => state.user?.workTime);

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
        await getCurrentTimesheets(new Date());
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
          name="approverId"
          rules={[{ required: true, message: "Please input your Approver!" }]}
          hidden
        >
          <Input disabled />
        </Form.Item>

        <Form.Item shouldUpdate noStyle>
          {({ getFieldError }) => (
            <Form.Item
              label="Approver User"
              name="approverName"
              validateStatus={
                getFieldError("approverId")?.length ? "error" : ""
              }
              help={getFieldError("approverId")?.[0]}
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
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Break Time"
          name="breakTime"
          required
          rules={[{ validator: requestValidateTime(workTime, true) }]}
        >
          <RangeTimePicker
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

export default LeaveRequestModel;

export const LeaveRequestModelMemo = memo(LeaveRequestModel);
