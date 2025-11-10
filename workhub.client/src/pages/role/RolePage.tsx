import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapProtectedLoader } from "@/utils/loader";
import RoleTable from "@/features/organization/role/components/RoleTable/RoleTable";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { RoleProvider } from "@/features/organization/role/contexts/RoleContext";
import { Permission } from "@/generate-api";
import { hasPermission } from "@/utils/hasPermission";

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsRolesView
);

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Roles Manager">
        {hasPermission(Permission.PermissionsRolesCreate) ? (
          <Button
            type="primary"
            onClick={() => navigate("/roles/create")}
            icon={<IIonPlus width={16} height={16} />}
          >
            Add role
          </Button>
        ) : null}
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Role Manager" }]}
      />

      <DefaultContent>
        <RoleProvider>
          <RoleTable />
        </RoleProvider>
      </DefaultContent>
    </DefaultPage>
  );
}
