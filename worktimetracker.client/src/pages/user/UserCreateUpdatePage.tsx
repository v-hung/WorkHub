import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import UserFormCreate, {
  UserFormCreateRefState,
} from "@/features/user/components/UserFormCreate/UserFormCreate";
import { useRef, useState } from "react";
import { wrapPromise } from "@/common/utils/promise";
import { userApi } from "@/services/apiClient";
import { UserFullDto } from "@/generate-api";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  if (params.id) {
    // await new Promise((res) => setTimeout(res, 1000));
    const data = await wrapPromise(() => userApi.userGetById(params.id!));

    if (!data) {
      throw redirect(`/users`);
    }

    return data;
  }
});

export function Component() {
  const data = useLoaderData() as UserFullDto;

  const [loading, setLoading] = useState(false);
  const formRef = useRef<UserFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <Layout className="main-layout-wrapper">
      <Layout className="main-layout">
        <MainHeader title={data ? "Update user" : "Create user"}>
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
            { title: data ? "Update user" : "Create user" },
          ]}
        />
        <MainContent>
          <UserFormCreate ref={formRef} setLoading={setLoading} record={data} />
        </MainContent>
      </Layout>
    </Layout>
  );
}
