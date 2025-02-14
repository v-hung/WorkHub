import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useNavigate, useParams } from "react-router";
import UserTable from "@/features/user/components/UserTable/UserTable";
import { wrapLoaderWithPermission } from "@/common/utils/loader";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  console.log({ id: params.id });
});

export function Component() {
  const navigate = useNavigate();
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

      <MainContent>{/* <UserTable /> */}</MainContent>
    </Layout>
  );
}
