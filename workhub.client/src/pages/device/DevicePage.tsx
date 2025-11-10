import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapProtectedLoader } from "@/utils/loader";
import DeviceTable from "@/features/equipment/components/DeviceTable/DeviceTable";
import { DeviceProvider } from "@/features/equipment/contexts/DeviceContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { Permission } from "@/generate-api";
import { hasPermission } from "@/utils/hasPermission";

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsDevicesView
);

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Devices Manager">
        {hasPermission(Permission.PermissionsDevicesCreate) ? (
          <Button
            type="primary"
            onClick={() => navigate("/devices/create")}
            icon={<IIonPlus width={16} height={16} />}
          >
            Add device
          </Button>
        ) : null}
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
