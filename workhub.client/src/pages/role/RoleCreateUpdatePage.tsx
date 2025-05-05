import { Button } from "antd";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/utils/loader";
import { useRef, useState } from "react";
import RoleFormCreate, {
  RoleFormCreateRefState,
} from "@/features/role/components/RoleFormCreate/RoleFormCreate";
import { roleApi } from "@/services/apiClient";
import { wrapPromise } from "@/utils/promise";
import { Permission, RoleDto } from "@/generate-api";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { ensurePermission } from "@/utils/hasPermission";

export const loader = wrapLoaderWithPermission(
  async ({ params }, { permissions }) => {
    const { id } = params;

    if (!id) {
      ensurePermission(permissions, Permission.PermissionsRolesCreate);
      return null;
    }

    ensurePermission(permissions, Permission.PermissionsRolesView);

    const data = await wrapPromise(() => roleApi.roleGetById({ id }));

    if (!data) {
      throw redirect("/roles");
    }

    return data;
  }
);

export function Component() {
  const data = useLoaderData() as RoleDto;

  const [loading, setLoading] = useState(false);
  const formRef = useRef<RoleFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <DefaultPage>
      <DefaultHeader title={data ? "Update role" : "Create role"}>
        <Button
          type="primary"
          icon={<IIonSaveOutline width={16} height={16} />}
          onClick={handleSave}
          loading={loading}
        >
          Save
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Roles Manager", path: "/roles" },
          { title: data ? "Update role" : "Create role" },
        ]}
      />

      <DefaultContent>
        <RoleFormCreate ref={formRef} setLoading={setLoading} record={data} />
      </DefaultContent>
    </DefaultPage>
  );
}
