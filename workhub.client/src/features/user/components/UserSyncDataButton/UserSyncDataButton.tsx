import PageLoading from "@/ui/elements/PageLoading/PageLoading";
import { Button, Popconfirm, Spin } from "antd";
import { useState, type FC, type HTMLAttributes } from "react";
import { createPortal } from "react-dom";

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
          icon={<IIonSync width={16} height={16} />}
        >
          Load user form timekeeping machine
        </Button>
      </Popconfirm>

      {loading ? createPortal(<PageLoading />, document.body) : null}
    </>
  );
};

export default UserSyncDataButton;
