import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapProtectedLoader } from "@/utils/loader";
import DeviceCategoryTable from "@/features/equipment/components/DeviceCategoryTable/DeviceCategoryTable";
import { DeviceCategoryProvider } from "@/features/equipment/contexts/DeviceCategoryContext";
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
      <DefaultHeader title="Device Categories Manager">
        {hasPermission(Permission.PermissionsDevicesCreate) ? (
          <Button
            type="primary"
            onClick={() => navigate("/device-categories/create")}
            icon={<IIonPlus width={16} height={16} />}
          >
            Add device category
          </Button>
        ) : null}
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Device Category Manager" },
        ]}
      />

      <DefaultContent>
        <DeviceCategoryProvider>
          <DeviceCategoryTable />
        </DeviceCategoryProvider>
      </DefaultContent>
    </DefaultPage>
  );
}
