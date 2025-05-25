import { Button } from "antd";
import { useNavigate } from "react-router";
import UserTable from "@/features/user/components/UserTable/UserTable";
import { wrapProtectedLoader } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { Permission } from "@/generate-api";
import { hasPermission } from "@/utils/hasPermission";
import UserSyncDataButton from "@/features/user/components/UserSyncDataButton/UserSyncDataButton";

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsUsersView
);

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="User Manager">
        {hasPermission(Permission.PermissionsBioStarSyncUsers) ? (
          <UserSyncDataButton />
        ) : null}

        {hasPermission(Permission.PermissionsUsersCreate) ? (
          <Button
            type="primary"
            onClick={() => navigate("/users/create")}
            icon={<IIonPersonAddOutline width={16} height={16} />}
            style={{ marginLeft: 8 }}
          >
            Add user
          </Button>
        ) : null}
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
