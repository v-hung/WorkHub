import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import ProjectTable from "@/features/project/components/ProjectTable/ProjectTable";
import { ProjectProvider } from "@/features/project/contexts/ProjectContext";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <Layout className="main-layout h-screen">
      <MainHeader title="Projects Manager">
        <Button
          type="primary"
          onClick={() => navigate("/projects/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add work time
        </Button>
      </MainHeader>

      <MainBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Project Manager" }]}
      />

      <MainContent>
        <ProjectProvider>
          <ProjectTable />
        </ProjectProvider>
      </MainContent>
    </Layout>
  );
}
