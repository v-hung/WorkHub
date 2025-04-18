import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import RoleTable from "@/features/role/components/RoleTable/RoleTable";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { RoleProvider } from "@/features/role/contexts/RoleContext";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Roles Manager">
        <Button
          type="primary"
          onClick={() => navigate("/roles/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add role
        </Button>
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
