import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import { useRef, useState } from "react";
import DeviceFormCreate, {
  DeviceFormCreateRefState,
} from "@/features/device/components/DeviceFormCreate/DeviceFormCreate";
import { deviceApi } from "@/services/apiClient";
import { wrapPromise } from "@/common/utils/promise";
import { DeviceFullDto } from "@/generate-api";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  if (params.id) {
    // await new Promise((res) => setTimeout(res, 1000));
    const data = await wrapPromise(() => deviceApi.deviceGetById(+params.id!));

    if (!data) {
      throw redirect(`/devices`);
    }

    return data;
  }
});

export function Component() {
  const data = useLoaderData() as DeviceFullDto;

  const [loading, setLoading] = useState(false);
  const formRef = useRef<DeviceFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <Layout className="main-layout">
      <MainHeader title={data ? "Update device" : "Create device"}>
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
          { title: "Devices Manager", path: "/devices" },
          { title: data ? "Update device" : "Create device" },
        ]}
      />

      <MainContent>
        <DeviceFormCreate ref={formRef} setLoading={setLoading} record={data} />
      </MainContent>
    </Layout>
  );
}
