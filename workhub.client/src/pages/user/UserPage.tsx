import { Button } from "antd";
import { useNavigate } from "react-router";
import UserTable from "@/features/user/components/UserTable/UserTable";
import { wrapLoaderWithPermission } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="User Manager">
        <Button
          type="primary"
          onClick={() => navigate("/users/create")}
          icon={<IIonPersonAddOutline width={16} height={16} />}
        >
          Add user
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Users Manager" }]}
      />

      <DefaultContent>
        <UserTable />
      </DefaultContent>
    </DefaultPage>
  );
}
