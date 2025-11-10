import { Col, Form, Input, Row, Spin } from "antd";
import {
  Dispatch,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { CreateWorkScheduleCommand, WorkScheduleDto } from "@/generate-api";
import { useWorkScheduleAction } from "../../hooks/useWorkScheduleAction";
import TimePicker from "@/ui/form/TimePicker";
import { workScheduleDisabledTime } from "../../utils/workSchedule.util";
import { format, localTimeToDate } from "@/utils/date.utils";
import { useNavigate } from "react-router";

type State = HTMLAttributes<HTMLDivElement> & {
  record?: WorkScheduleDto;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type WorkScheduleFormCreateRefState = {
  handelUpsert: () => void;
};

const WorkScheduleFormCreate = forwardRef<
  WorkScheduleFormCreateRefState,
  State
>((props, ref) => {
  const { className, record, setLoading, ...rest } = props;

  const navigate = useNavigate();
  const { loading, create, update, formDefault } = useWorkScheduleAction();

  useEffect(() => {
    if (setLoading) {
      setLoading(loading);
    }
  }, [loading, setLoading]);

  const [form] = Form.useForm();
  const [formState] = useState<CreateWorkScheduleCommand>(formDefault(record));

  useImperativeHandle(ref, () => ({
    handelUpsert() {
      form.validateFields().then(async () => {
        const formValues = form.getFieldsValue();

        if (!record) {
          await create(formValues, () => navigate("/work-times"));
        } else {
          await update(record.id, formValues, () => navigate("/work-times"));
        }
      });
    },
  }));

  return (
    <div {...rest} className={`form-container ${className}`}>
      <Form
        layout="vertical"
        form={form}
        initialValues={formState}
        validateTrigger="onSubmit"
      >
        <Row wrap gutter={{ sm: 8, md: 16 }}>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Work time title"
              name="title"
              rules={[{ required: true }]}
            >
              <Input placeholder="title" />
            </Form.Item>
          </Col>

          <Col span={24} />

          <Col xs={24} lg={12}>
            <Form.Item
              label="Start time morning"
              name="startTimeMorning"
              rules={[{ required: true }]}
              getValueFromEvent={(v) => v && format(v)}
              getValueProps={(v) => ({
                value: v ? localTimeToDate(v) : null,
              })}
            >
              <TimePicker
                style={{ width: "100%" }}
                disabledTime={workScheduleDisabledTime}
                hideDisabledOptions
                showSecond={false}
                showNow={false}
              />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item
              label="End time morning"
              name="endTimeMorning"
              rules={[{ required: true }]}
              getValueFromEvent={(v) => v && format(v)}
              getValueProps={(v) => ({
                value: v ? localTimeToDate(v) : null,
              })}
            >
              <TimePicker
                style={{ width: "100%" }}
                disabledTime={workScheduleDisabledTime}
                format={"HH:mm:ss"}
                hideDisabledOptions
                showSecond={false}
                showNow={false}
              />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item
              label="Start time afternoon"
              name="startTimeAfternoon"
              rules={[{ required: true }]}
              getValueFromEvent={(v) => v && format(v)}
              getValueProps={(v) => ({
                value: v ? localTimeToDate(v) : null,
              })}
            >
              <TimePicker
                style={{ width: "100%" }}
                disabledTime={workScheduleDisabledTime}
                format={"HH:mm:ss"}
                hideDisabledOptions
                showSecond={false}
                showNow={false}
              />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item
              label="End time afternoon"
              name="endTimeAfternoon"
              rules={[{ required: true }]}
              getValueFromEvent={(v) => v && format(v)}
              getValueProps={(v) => ({
                value: v ? localTimeToDate(v) : null,
              })}
            >
              <TimePicker
                style={{ width: "100%" }}
                disabledTime={workScheduleDisabledTime}
                format={"HH:mm:ss"}
                hideDisabledOptions
                showSecond={false}
                showNow={false}
              />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item label="Allowed late minutes" name="allowedLateMinutes">
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      {loading && (
        <div className="loading-container">
          <Spin />
        </div>
      )}
    </div>
  );
});

export default WorkScheduleFormCreate;
