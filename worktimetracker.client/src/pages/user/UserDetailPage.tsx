import { wrapLoaderWithPermission } from "@/common/utils/loader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import { Layout } from "antd";
import { useParams } from "react-router";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  console.log({ id: params.id });
});

export function Component() {
  const { id } = useParams();

  return (
    <Layout className="main-layout">
      <MainHeader title={id ? "Update user" : "Create user"} />

      <MainBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Users Manager", path: "/users" },
          { title: "User detail" },
        ]}
      />

      <MainContent></MainContent>
    </Layout>
  );
}
