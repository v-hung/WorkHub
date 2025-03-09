import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useParams } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import UserFormCreate, {
  UserFormCreateRefState,
} from "@/features/user/components/UserFormCreate/UserFormCreate";
import { useRef, useState } from "react";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  console.log({ id: params.id });
});

export function Component() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const formRef = useRef<UserFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <Layout className="main-layout">
      <MainHeader title={id ? "Update user" : "Create user"}>
        <Button
          type="primary"
          icon={<IIonSaveOutline width={16} height={16} />}
          onClick={handleSave}
          loading={loading}
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
        <UserFormCreate ref={formRef} setLoading={setLoading} />
      </MainContent>
    </Layout>
  );
}
