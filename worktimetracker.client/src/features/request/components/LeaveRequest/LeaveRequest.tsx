import { Form, Input, Modal, Select } from "antd";
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
import { requestDisabledTime } from "../../utils/request.util";

type State = ComponentProps<typeof Modal>;

const LeaveRequest: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const { open, closeRequest, date, requestType } = useRequestContext();
  const { loading, create, formDefault } = useLeaveRequestAction();

  const workTime = useAuthStore((state) => state.user!.workTime);

  const [form] = Form.useForm();
  const [formState] = useState<CreateLeaveRequestDtoCustomType>(formDefault());

  const handleOk = () => {
    form.validateFields().then(async () => {
      const formValues =
        form.getFieldsValue() as CreateLeaveRequestDtoCustomType;

      const body: CreateLeaveRequestDto = {
        ...formValues,
        breakStartDate: formValues.breakTime[0]!,
        breakEndDate: formValues.breakTime[1]!,
      };

      await create(body).then(() => {
        closeRequest();
      });
    });
  };

  const handleCancel = () => {
    closeRequest();
  };

  useEffect(() => {
    if (form && open && requestType == RequestType.LeaveRequest) {
      console.log({ form });
      form.setFieldsValue({ date: date });
    }
  }, [date, form]);

  return (
    <Modal
      open={open && requestType == RequestType.LeaveRequest}
      {...rest}
      className={`${className}`}
      title="Leave Request"
      onOk={handleOk}
      confirmLoading={loading}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        initialValues={formState}
        validateTrigger="onBlur"
        name="leaveRequest"
        autoComplete="off"
        layout="horizontal"
        style={{ marginTop: "2rem" }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          label="Approved User"
          name="approvedById"
          rules={[{ required: true, message: "Please input your Approved!" }]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please input your date!" }]}
        >
          <MyDatePicker />
        </Form.Item>

        <Form.Item
          label="Request Type"
          name="requestType"
          rules={[
            { required: true, message: "Please input your request type!" },
          ]}
        >
          <Select
            options={Object.entries(RequestType).map(([key, value]) => ({
              value,
              label: key,
            }))}
          />
        </Form.Item>

        <Form.Item
          label="Break Time"
          name="breakTime"
          rules={[{ required: true, message: "Please input your break time!" }]}
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
