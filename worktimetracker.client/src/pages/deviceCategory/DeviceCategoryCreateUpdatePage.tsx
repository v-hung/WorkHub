import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import { useRef, useState } from "react";
import DeviceCategoryFormCreate, {
  DeviceCategoryFormCreateRefState,
} from "@/features/deviceCategory/components/DeviceCategoryFormCreate/DeviceCategoryFormCreate";
import { deviceCategoryApi } from "@/services/apiClient";
import { wrapPromise } from "@/common/utils/promise";
import { DeviceCategoryDto } from "@/generate-api";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  if (params.id) {
    // await new Promise((res) => setTimeout(res, 1000));
    const data = await wrapPromise(() =>
      deviceCategoryApi.deviceCategoryGetById(+params.id!)
    );

    if (!data) {
      throw redirect(`/device-categories`);
    }

    return data;
  }
});

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
    <Layout className="main-layout">
      <MainHeader
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
      </MainHeader>

      <MainBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Device Categories Manager", path: "/device-categories" },
          { title: data ? "Update device category" : "Create device category" },
        ]}
      />

      <MainContent>
        <DeviceCategoryFormCreate
          ref={formRef}
          setLoading={setLoading}
          record={data}
        />
      </MainContent>
    </Layout>
  );
}
