import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/utils/loader";
import DeviceTable from "@/features/device/components/DeviceTable/DeviceTable";
import { DeviceProvider } from "@/features/device/contexts/DeviceContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Devices Manager">
        <Button
          type="primary"
          onClick={() => navigate("/devices/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add device
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Device Manager" }]}
      />

      <DefaultContent>
        <DeviceProvider>
          <DeviceTable />
        </DeviceProvider>
      </DefaultContent>
    </DefaultPage>
  );
}
