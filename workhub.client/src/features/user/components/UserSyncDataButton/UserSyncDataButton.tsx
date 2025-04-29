import PageLoading from "@/ui/elements/PageLoading/PageLoading";
import { Button, Popconfirm } from "antd";
import { type FC, type HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { useUserAction } from "../../hooks/useUserAction";
import { getModal } from "@/contexts/feedback/FeedbackProvider";
import { BioStarSyncAllUsersResponse } from "@/generate-api";
import { useUserContext } from "../../contexts/UserContext";

type State = HTMLAttributes<HTMLDivElement>;

const UserSyncDataButton: FC<State> = () => {
  const { loading, syncUsers } = useUserAction();
  const { setRequest } = useUserContext();

  const handelSubmit = async () => {
    await syncUsers((data) => {
      getModal().info({
        title: "Thông báo",
        content: <ContentInfoSuccess data={data} />,
        onClose: () => {
          setRequest((state) => ({
            ...state,
            pageNumber: 1,
          }));
        },
      });
    });
  };

  return (
    <>
      <Popconfirm
        title="Bạn có chắc chắn muốn tải người dùng từ máy chấm công không?"
        description="Tải tất cả người dùng từ máy chấm công về hệ thống, việc này sẽ mất một khoảng thời gian."
        onConfirm={handelSubmit}
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

const ContentInfoSuccess = ({
  data,
}: {
  data: BioStarSyncAllUsersResponse;
}) => {
  return (
    <>
      <b>Tải người dùng thành công</b>
      <div style={{ marginTop: 12 }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                Số user tìm thấy
              </td>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                {data.loadCount}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                Số user thêm mới
              </td>
              <td style={{ padding: "4px 8px", border: "1px solid #ccc" }}>
                {data.newCount}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
