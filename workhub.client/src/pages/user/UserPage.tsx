import { Button, Popconfirm } from "antd";
import { useNavigate } from "react-router";
import UserTable from "@/features/user/components/UserTable/UserTable";
import { wrapLoaderWithPermission } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { Permission } from "@/generate-api";
import { hasPermission } from "@/utils/hasPermission";
import { UserProvider } from "@/features/user/contexts/UserContext";

export const loader = wrapLoaderWithPermission(
  undefined,
  Permission.PermissionsUsersView
);

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <UserProvider>
        <DefaultHeader title="User Manager">
          <Popconfirm
            title="Delete the team"
            description="Are you sure to delete this team?"
            onConfirm={confirm}
            placement="bottomRight"
          >
            <Button
              color="cyan"
              variant="outlined"
              icon={<IIonPersonAddOutline width={16} height={16} />}
            >
              Load user form timekeeping machine
            </Button>
          </Popconfirm>
          {hasPermission(Permission.PermissionsUsersCreate) ? (
            <Button
              type="primary"
              onClick={() => navigate("/users/create")}
              icon={<IIonPersonAddOutline width={16} height={16} />}
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
      </UserProvider>
    </DefaultPage>
  );
}
