import { Button, Popconfirm, Spin } from "antd";
import { type FC, type HTMLAttributes } from "react";
import styles from "./UserSyncDataButton.module.css";
import { createPortal } from "react-dom";
import { useUserAction } from "../../hooks/useUserAction";

type State = HTMLAttributes<HTMLDivElement>;

const UserSyncDataButton: FC<State> = () => {
  const { loading, syncUsers } = useUserAction();

  return (
    <>
      <Popconfirm
        title="Delete the team"
        description="Are you sure to delete this team?"
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
