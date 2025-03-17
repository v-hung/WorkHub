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
import { CreateEditWorkTimeCommand } from "@/generate-api";
import { useWorkTimeAction } from "../../hooks/useWorkTimeAction";
import MyTimePicker from "@/ui/form/MyTimePicker";
import { workTimeDisabledTime } from "../../utils/workTime.util";

type State = HTMLAttributes<HTMLDivElement> & {
  recordId?: string;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type WorkTimeFormCreateRefState = {
  handelUpsert: () => void;
};

const WorkTimeFormCreate = forwardRef<WorkTimeFormCreateRefState, State>(
  (props, ref) => {
    const { className, recordId, setLoading, ...rest } = props;

    const { loading, create, update } = useWorkTimeAction();

    useEffect(() => {
      if (setLoading) {
        setLoading(loading);
      }
    }, [loading, setLoading]);

    const [form] = Form.useForm();
    const [formState] = useState<CreateEditWorkTimeCommand>(
      new CreateEditWorkTimeCommand()
    );

    useImperativeHandle(ref, () => ({
      handelUpsert() {
        form.validateFields().then(async () => {
          const formValues = form.getFieldsValue();

          console.log({ formValues });
          if (!recordId) {
            create(formValues);
          } else {
            update(recordId, formState);
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
          validateTrigger="onBlur"
          style={{
            paddingRight: "0.75rem",
            paddingTop: "1rem",
            paddingLeft: "0.75rem",
          }}
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
              >
                <MyTimePicker
                  style={{ width: "100%" }}
                  disabledTime={workTimeDisabledTime}
                  format={"HH:mm:ss"}
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
              >
                <MyTimePicker
                  style={{ width: "100%" }}
                  disabledTime={workTimeDisabledTime}
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
              >
                <MyTimePicker
                  style={{ width: "100%" }}
                  disabledTime={workTimeDisabledTime}
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
              >
                <MyTimePicker
                  style={{ width: "100%" }}
                  disabledTime={workTimeDisabledTime}
                  format={"HH:mm:ss"}
                  hideDisabledOptions
                  showSecond={false}
                  showNow={false}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item
                label="Allowed late minutes"
                name="allowedLateMinutes"
                rules={[{ required: true }]}
              >
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
  }
);

export default WorkTimeFormCreate;
