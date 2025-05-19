import { wrapProtectedLoader } from "@/utils/loader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import { Layout } from "antd";
import { useParams } from "react-router";
import { Permission } from "@/generate-api";

export const loader = wrapProtectedLoader(async ({ params }) => {
  console.log({ id: params.id });
}, Permission.PermissionsUsersView);

export function Component() {
  const { id } = useParams();

  return (
    <DefaultPage>
      <Layout className="main-layout">
        <DefaultHeader title={id ? "Update user" : "Create user"} />
        <DefaultBreadcrumb
          items={[
            { title: "Home", path: "/" },
            { title: "Users Manager", path: "/users" },
            { title: "User detail" },
          ]}
        />
        <DefaultContent>asd</DefaultContent>
      </Layout>
    </DefaultPage>
  );
}
