import { Form, Input, Modal } from "antd";
import { memo, useEffect, useState, type ComponentProps, type FC } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { useRequestContext } from "../../contexts/RequestContext";
import {
  CreateTimesheetAdjustmentRequestDtoCustomType,
  useTimesheetAdjustmentRequestAction,
} from "../../hooks/useTimesheetAdjustmentRequestAction";
import {
  CreateTimesheetAdjustmentRequestDto,
  RequestType,
} from "@/generate-api";
import DatePicker from "@/ui/form/DatePicker";
import TextArea from "antd/es/input/TextArea";
import RangeTimePicker from "@/ui/form/RangeTimePicker";
import {
  requestDisabledTime,
  requestValidateTime,
} from "../../utils/request.util";
import { useTimesheetContext } from "@/features/work/timesheet/context/TimesheetContext";

type State = ComponentProps<typeof Modal>;

const TimesheetAdjustmentRequestModel: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const { isOpen, closeRequest, date } = useRequestContext();
  const { getCurrentTimesheets, isCurrentMonth } = useTimesheetContext();
  const { loading, create, formDefault } =
    useTimesheetAdjustmentRequestAction();

  const workSchedule = useAuthStore((state) => state.user?.workSchedule);

  const [form] = Form.useForm();
  const [formState] = useState<CreateTimesheetAdjustmentRequestDtoCustomType>(
    formDefault()
  );

  const handleOk = () => {
    form.validateFields().then(async () => {
      const formValues =
        form.getFieldsValue() as CreateTimesheetAdjustmentRequestDtoCustomType;

      const body: CreateTimesheetAdjustmentRequestDto = {
        ...formValues,
        checkIn: formValues.workingTime[0]!,
        checkOut: formValues.workingTime[1]!,
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
    if (form && isOpen(RequestType.TimesheetAdjustmentRequest)) {
      form.resetFields();
      form.setFieldsValue(formDefault(date));
    }
  }, [date, form, isOpen(RequestType.TimesheetAdjustmentRequest)]);

  return (
    <Modal
      open={isOpen(RequestType.TimesheetAdjustmentRequest)}
      {...rest}
      className={`${className}`}
      title="Timesheet AdjustmentRequest Request"
      onOk={handleOk}
      confirmLoading={loading}
      onCancel={handleCancel}
      maskClosable={false}
    >
      <Form
        form={form}
        initialValues={formState}
        validateTrigger="onSubmit"
        name="timesheetAdjustmentRequest"
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
          label="Working Time"
          name="workingTime"
          required
          rules={[{ validator: requestValidateTime(workSchedule, true) }]}
        >
          <RangeTimePicker
            disabledTime={() => requestDisabledTime(workSchedule)}
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

export default TimesheetAdjustmentRequestModel;

export const TimesheetAdjustmentRequestModelMemo = memo(
  TimesheetAdjustmentRequestModel
);
