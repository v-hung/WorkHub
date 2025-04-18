import { Button } from "antd";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import { useRef, useState } from "react";
import RoleFormCreate, {
  RoleFormCreateRefState,
} from "@/features/role/components/RoleFormCreate/RoleFormCreate";
import { roleApi } from "@/services/apiClient";
import { wrapPromise } from "@/common/utils/promise";
import { RoleDto } from "@/generate-api";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  if (params.id) {
    // await new Promise((res) => setTimeout(res, 1000));
    const data = await wrapPromise(() => roleApi.roleGetById(params.id!));

    if (!data) {
      throw redirect(`/roles`);
    }

    return data;
  }
});

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
