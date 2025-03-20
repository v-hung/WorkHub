import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import TeamTable from "@/features/team/components/TeamTable/TeamTable";
import { TeamProvider } from "@/features/team/contexts/TeamContext";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <Layout className="main-layout h-screen">
      <MainHeader title="Teams Manager">
        <Button
          type="primary"
          onClick={() => navigate("/teams/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add work time
        </Button>
      </MainHeader>

      <MainBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Team Manager" }]}
      />

      <MainContent>
        <TeamProvider>
          <TeamTable />
        </TeamProvider>
      </MainContent>
    </Layout>
  );
}
