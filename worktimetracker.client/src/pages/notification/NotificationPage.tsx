import { wrapLoaderWithPermission } from "@/common/utils/loader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import { Layout } from "antd";

export const loader = wrapLoaderWithPermission();

export function Component() {
  return (
    <Layout className="main-layout h-screen">
      <MainHeader title="Notifications"></MainHeader>

      {/* <MainBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Project Manager" }]}
      /> */}

      <MainContent>
        <NotificationTable />
      </MainContent>
    </Layout>
  );
}
