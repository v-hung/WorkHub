import { Button } from "antd";
import { redirect, useLoaderData } from "react-router";
import { wrapProtectedLoader } from "@/utils/loader";
import { useRef, useState } from "react";
import DeviceCategoryFormCreate, {
  DeviceCategoryFormCreateRefState,
} from "@/features/equipment/components/DeviceCategoryFormCreate/DeviceCategoryFormCreate";
import { deviceCategoryApi } from "@/services/apiClient";
import { wrapPromise } from "@/utils/promise";
import { DeviceCategoryDto, Permission } from "@/generate-api";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { ensurePermission } from "@/utils/hasPermission";

export const loader = wrapProtectedLoader(
  async ({ params }, { permissions }) => {
    const { id } = params;

    if (!id) {
      ensurePermission(permissions, Permission.PermissionsDevicesCreate);
      return null;
    }

    ensurePermission(permissions, Permission.PermissionsDevicesEdit);

    const data = await wrapPromise(() =>
      deviceCategoryApi.deviceCategoryGetById({ id: +id })
    );

    if (!data) {
      throw redirect("/device-categories");
    }

    return data;
  }
);

export function Component() {
  const data = useLoaderData() as DeviceCategoryDto;

  const [loading, setLoading] = useState(false);
  const formRef = useRef<DeviceCategoryFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <DefaultPage>
      <DefaultHeader
        title={data ? "Update device category" : "Create device category"}
      >
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
          { title: "Device Categories Manager", path: "/device-categories" },
          { title: data ? "Update device category" : "Create device category" },
        ]}
      />

      <DefaultContent>
        <DeviceCategoryFormCreate
          ref={formRef}
          setLoading={setLoading}
          record={data}
        />
      </DefaultContent>
    </DefaultPage>
  );
}
