import { Modal } from "antd";
import { memo, useState, type ComponentProps, type FC } from "react";
import { useTimesheetRequestContext } from "../../context/TimesheetRequestContext";

type State = ComponentProps<typeof Modal>;

const TimesheetRequest: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const { open, setOpen } = useTimesheetRequestContext();
  const [confirmLoading, setConfirmLoading] = useState(false);

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
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      asdas
    </Modal>
  );
};

export default TimesheetRequest;

export const TimesheetRequestMemo = memo(TimesheetRequest);
