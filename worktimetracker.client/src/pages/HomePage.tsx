import { Layout } from "antd";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainContent from "@/layouts/main/components/MainContent";
import { wrapLoaderWithPermission } from "@/common/utils/loader";

export const loader = wrapLoaderWithPermission(async () => {
  // requiredPermission();
});

export function Component() {
  return (
    <Layout>
      <MainHeader title="Home"></MainHeader>

      <MainContent>Home</MainContent>
    </Layout>
  );
}
