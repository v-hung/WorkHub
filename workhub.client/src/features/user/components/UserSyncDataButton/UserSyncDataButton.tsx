import { Button, Popconfirm, Spin } from "antd";
import { useState, type FC, type HTMLAttributes } from "react";
import styles from "./UserSyncDataButton.module.css";
import { createPortal } from "react-dom";
import { useUserAction } from "../../hooks/useUserAction";

type State = HTMLAttributes<HTMLDivElement>;

const UserSyncDataButton: FC<State> = () => {
  // const { loading, syncUsers } = useUserAction();

  const [loading, setLoading] = useState(false);
  const [dataSync, setDataSync] = useState();

  const syncUsers = async () => {
    setDataSync(undefined);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <>
      <Popconfirm
        title="Bạn có chắc chắn muốn tải người dùng từ máy chấm công không?"
        description="Tải tất cả người dùng từ máy chấm công về hệ thống, việc này sẽ mất một khoảng thời gian."
        onConfirm={syncUsers}
        placement="bottomRight"
      >
        <Button
          color="cyan"
          variant="solid"
          icon={<IIonPersonAddOutline width={16} height={16} />}
        >
          Load user form timekeeping machine
        </Button>
      </Popconfirm>

      {loading
        ? createPortal(
            <div className={styles.loading}>
              <Spin />
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default UserSyncDataButton;
