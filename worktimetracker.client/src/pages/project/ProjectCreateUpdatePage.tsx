import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import { useRef, useState } from "react";
import ProjectFormCreate, {
  ProjectFormCreateRefState,
} from "@/features/project/components/ProjectFormCreate/ProjectFormCreate";
import { projectApi } from "@/services/apiClient";
import { wrapPromise } from "@/common/utils/promise";
import { ProjectDto } from "@/generate-api";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  if (params.id) {
    // await new Promise((res) => setTimeout(res, 1000));
    const data = await wrapPromise(() =>
      projectApi.projectGetById(+params.id!)
    );

    if (!data) {
      throw redirect(`/projects`);
    }

    return data;
  }
});

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
    <Layout className="main-layout">
      <MainHeader title={data ? "Update project" : "Create project"}>
        <Button
          type="primary"
          icon={<IIonSaveOutline width={16} height={16} />}
          onClick={handleSave}
          loading={loading}
        >
          Save
        </Button>
      </MainHeader>

      <MainBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Projects Manager", path: "/projects" },
          { title: data ? "Update project" : "Create project" },
        ]}
      />

      <MainContent>
        <ProjectFormCreate
          ref={formRef}
          setLoading={setLoading}
          record={data}
        />
      </MainContent>
    </Layout>
  );
}
