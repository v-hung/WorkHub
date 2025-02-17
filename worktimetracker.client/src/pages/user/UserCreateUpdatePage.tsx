import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useParams } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import UserFormCreate from "@/features/user/components/UserFormCreate/UserFormCreate";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  console.log({ id: params.id });
});

export function Component() {
  const { id } = useParams();

  return (
    <Layout className="main-layout">
      <MainHeader title={id ? "Update user" : "Create user"}>
        <Button
          type="primary"
          icon={<IIonSaveOutline width={16} height={16} />}
        >
          Save
        </Button>
      </MainHeader>

      <MainBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Users Manager", path: "/users" },
          { title: id ? "Update user" : "Create user" },
        ]}
      />

      <MainContent>
        <UserFormCreate />
      </MainContent>
    </Layout>
  );
}
