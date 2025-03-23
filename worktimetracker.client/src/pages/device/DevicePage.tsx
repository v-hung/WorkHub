import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import DeviceTable from "@/features/device/components/DeviceTable/DeviceTable";
import { DeviceProvider } from "@/features/device/contexts/DeviceContext";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <Layout className="main-layout h-screen">
      <MainHeader title="Devices Manager">
        <Button
          type="primary"
          onClick={() => navigate("/devices/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add work time
        </Button>
      </MainHeader>

      <MainBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Device Manager" }]}
      />

      <MainContent>
        <DeviceProvider>
          <DeviceTable />
        </DeviceProvider>
      </MainContent>
    </Layout>
  );
}
