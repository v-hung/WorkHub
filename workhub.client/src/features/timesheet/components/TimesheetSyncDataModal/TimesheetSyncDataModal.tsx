import DatePicker from "@/ui/form/DatePicker";
import { Form, Modal } from "antd";
import {
  forwardRef,
  useImperativeHandle,
  useState,
  type ComponentProps,
  type FC,
} from "react";
import { useTimesheetEmployeeContext } from "../../context/TimesheetEmployeeContext";
import { getModal } from "@/contexts/feedback/FeedbackProvider";
import { BioStarSyncHistoricalEventsResponse } from "@/generate-api";
import { endOfMonth, startOfMonth } from "date-fns";
import { createPortal } from "react-dom";
import PageLoading from "@/ui/elements/PageLoading/PageLoading";

type State = ComponentProps<typeof Modal>;

export type TimesheetSyncDataModalHandle = {
  open: () => void;
  close: () => void;
  isOpen: () => boolean;
};

const TimesheetSyncDataModal = forwardRef<TimesheetSyncDataModalHandle, State>(
  (props, ref) => {
    const { className = "", ...rest } = props;

    const [open, setOpen] = useState(false);
    const { loading, syncTimesheet, updateRequest } =
      useTimesheetEmployeeContext();

    const [form] = Form.useForm<{ month: Date }>();
    const [formState] = useState<{ month: Date }>({ month: new Date() });

    const handleOk = () => {
      form.validateFields().then(async () => {
        const formValues = form.getFieldsValue();

        await syncTimesheet(
          {
            from: startOfMonth(formValues.month),
            to: endOfMonth(formValues.month),
          },
          (data) => {
            setOpen(false);

            getModal().info({
              title: "Thông báo",
              content: <ContentInfoSuccess data={data} />,
              onOk: () => {
                updateRequest((state) => ({
                  ...state,
                }));
              },
            });
          }
        );
      });
    };

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
      isOpen: () => open,
    }));

    return (
      <>
        <Modal
          className={`${className}`}
          title="Sync timesheet from timekeeping machine"
          onOk={handleOk}
          open={open}
          onCancel={() => setOpen(false)}
          confirmLoading={loading}
          // maskClosable={false}
          {...rest}
        >
          <Form
            form={form}
            initialValues={formState}
            validateTrigger="onSubmit"
            style={{ marginTop: "2rem" }}
          >
            <Form.Item name="month" label="Month" rules={[{ required: true }]}>
              <DatePicker picker="month" />
            </Form.Item>
          </Form>
        </Modal>
        {loading ? createPortal(<PageLoading />, document.body) : null}
      </>
    );
  }
);

export default TimesheetSyncDataModal;

const ContentInfoSuccess = ({
  data,
}: {
  data: BioStarSyncHistoricalEventsResponse;
}) => {
  return (
    <>
      <b>Tải người dùng thành công</b>
      <div style={{ marginTop: 12 }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                Số timesheet tìm thấy
              </td>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                {data.loadCount}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                Số timesheet thêm mới
              </td>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                {data.newCount}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                Số timesheet cập nhập
              </td>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                {data.updateCount}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
