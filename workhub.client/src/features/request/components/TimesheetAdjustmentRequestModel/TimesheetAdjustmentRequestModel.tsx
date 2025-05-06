import { Form, Input, Modal } from "antd";
import { memo, useEffect, useState, type ComponentProps, type FC } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { useRequestContext } from "../../contexts/RequestContext";
import {
  CreateTimesheetAdjustmentRequestDtoCustomType,
  useCreateTimesheetAdjustmentRequest,
} from "../../hooks/useCreateTimesheetAdjustmentRequest";
import {
  CreateTimesheetAdjustmentRequestDto,
  RequestType,
} from "@/generate-api";
import MyDatePicker from "@/ui/form/MyDatePicker";
import TextArea from "antd/es/input/TextArea";
import MyRangeTimePicker from "@/ui/form/MyRangeTimePicker";
import {
  requestDisabledTime,
  requestValidateTime,
} from "../../utils/request.util";
import { useTimesheetContext } from "@/features/timesheet/context/TimesheetContext";

type State = ComponentProps<typeof Modal>;

const TimesheetAdjustmentRequestModel: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const { isOpen, closeRequest, date } = useRequestContext();
  const { getCurrentTimesheets: getTimesheets, isCurrentMonth } =
    useTimesheetContext();
  const { loading, create, formDefault } =
    useCreateTimesheetAdjustmentRequest();

  const workTime = useAuthStore((state) => state.user!.workTime);

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
        breakStartDate: formValues.breakTime[0]!,
        breakEndDate: formValues.breakTime[1]!,
        checkIn: formValues.workingTime[0]!,
        checkOut: formValues.workingTime[1]!,
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
          label="Working Time"
          name="workingTime"
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
          label="Break Time"
          name="breakTime"
          rules={[{ validator: requestValidateTime(workTime) }]}
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

export default TimesheetAdjustmentRequestModel;

export const TimesheetAdjustmentRequestModelMemo = memo(
  TimesheetAdjustmentRequestModel
);
