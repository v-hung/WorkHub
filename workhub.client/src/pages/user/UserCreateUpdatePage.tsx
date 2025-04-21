import { Button } from "antd";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/utils/loader";
import UserFormCreate, {
  UserFormCreateRefState,
} from "@/features/user/components/UserFormCreate/UserFormCreate";
import { useRef, useState } from "react";
import { wrapPromise } from "@/utils/promise";
import { userApi } from "@/services/apiClient";
import { UserFullDto } from "@/generate-api";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

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
    <DefaultPage>
      <DefaultHeader title={data ? "Update user" : "Create user"}>
        <Button
          type="primary"
          icon={<IIonSaveOutline width={16} height={16} />}
          onClick={handleSave}
          loading={loading}
        >
          Save
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Users Manager", path: "/users" },
          { title: data ? "Update user" : "Create user" },
        ]}
      />

      <DefaultContent>
        <UserFormCreate ref={formRef} setLoading={setLoading} record={data} />
      </DefaultContent>
    </DefaultPage>
  );
}
