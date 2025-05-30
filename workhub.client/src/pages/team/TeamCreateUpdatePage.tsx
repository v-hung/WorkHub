import { Button } from "antd";
import { redirect, useLoaderData } from "react-router";
import { wrapProtectedLoader } from "@/utils/loader";
import { useRef, useState } from "react";
import TeamFormCreate, {
  TeamFormCreateRefState,
} from "@/features/team/components/TeamFormCreate/TeamFormCreate";
import { teamApi } from "@/services/apiClient";
import { wrapPromise } from "@/utils/promise";
import { Permission, TeamFullDto } from "@/generate-api";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { ensurePermission } from "@/utils/hasPermission";

export const loader = wrapProtectedLoader(
  async ({ params }, { permissions }) => {
    const { id } = params;

    if (!id) {
      ensurePermission(permissions, Permission.PermissionsTeamsCreate);
      return null;
    }

    ensurePermission(permissions, Permission.PermissionsTeamsEdit);

    const data = await wrapPromise(() => teamApi.teamGetById({ id: +id }));

    if (!data) {
      throw redirect("/teams");
    }

    return data;
  }
);

export function Component() {
  const data = useLoaderData() as TeamFullDto;

  const [loading, setLoading] = useState(false);
  const formRef = useRef<TeamFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <DefaultPage>
      <DefaultHeader title={data ? "Update team" : "Create team"}>
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
          { title: "Teams Manager", path: "/teams" },
          { title: data ? "Update team" : "Create team" },
        ]}
      />

      <DefaultContent>
        <TeamFormCreate ref={formRef} setLoading={setLoading} record={data} />
      </DefaultContent>
    </DefaultPage>
  );
}
