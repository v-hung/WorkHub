import { Layout } from "antd";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainContent from "@/layouts/main/components/MainContent";
import { wrapLoaderWithPermission } from "@/common/utils/loader";

export const loader = wrapLoaderWithPermission(async () => {
  // requiredPermission();
});

export function Component() {
  console.log("home.tsx component");
  return (
    <Layout>
      <MainHeader title="Home"></MainHeader>

      <MainContent>sf</MainContent>
    </Layout>
  );
}
