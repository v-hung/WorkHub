import { Button } from "antd";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/utils/loader";
import { useRef, useState } from "react";
import ProjectFormCreate, {
  ProjectFormCreateRefState,
} from "@/features/project/components/ProjectFormCreate/ProjectFormCreate";
import { projectApi } from "@/services/apiClient";
import { wrapPromise } from "@/utils/promise";
import { Permission, ProjectDto } from "@/generate-api";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { ensurePermission } from "@/utils/hasPermission";

export const loader = wrapLoaderWithPermission(
  async ({ params }, { permissions }) => {
    const { id } = params;

    if (!id) {
      ensurePermission(permissions, Permission.PermissionsProjectsCreate);
      return null;
    }

    ensurePermission(permissions, Permission.PermissionsProjectsEdit);

    const data = await wrapPromise(() =>
      projectApi.projectGetById({ id: +id })
    );

    if (!data) {
      throw redirect("/projects");
    }

    return data;
  }
);

export function Component() {
  const data = useLoaderData() as ProjectDto;

  const [loading, setLoading] = useState(false);
  const formRef = useRef<ProjectFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <DefaultPage>
      <DefaultHeader title={data ? "Update project" : "Create project"}>
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
          { title: "Projects Manager", path: "/projects" },
          { title: data ? "Update project" : "Create project" },
        ]}
      />

      <DefaultContent>
        <ProjectFormCreate
          ref={formRef}
          setLoading={setLoading}
          record={data}
        />
      </DefaultContent>
    </DefaultPage>
  );
}
