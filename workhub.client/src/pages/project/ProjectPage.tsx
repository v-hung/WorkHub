import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapProtectedLoader } from "@/utils/loader";
import ProjectTable from "@/features/work/project/components/ProjectTable/ProjectTable";
import { ProjectProvider } from "@/features/work/project/contexts/ProjectContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { Permission } from "@/generate-api";
import { hasPermission } from "@/utils/hasPermission";

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsProjectsView
);

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Projects Manager">
        {hasPermission(Permission.PermissionsProjectsCreate) ? (
          <Button
            type="primary"
            onClick={() => navigate("/projects/create")}
            icon={<IIonPlus width={16} height={16} />}
          >
            Add project
          </Button>
        ) : null}
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
