import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import ProjectTable from "@/features/project/components/ProjectTable/ProjectTable";
import { ProjectProvider } from "@/features/project/contexts/ProjectContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Projects Manager">
        <Button
          type="primary"
          onClick={() => navigate("/projects/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add work time
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Project Manager" }]}
      />

      <DefaultContent>
        <ProjectProvider>
          <ProjectTable />
        </ProjectProvider>
      </DefaultContent>
    </DefaultPage>
  );
}
