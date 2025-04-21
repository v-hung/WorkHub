import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/utils/loader";
import DeviceCategoryTable from "@/features/deviceCategory/components/DeviceCategoryTable/DeviceCategoryTable";
import { DeviceCategoryProvider } from "@/features/deviceCategory/contexts/DeviceCategoryContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Device Categories Manager">
        <Button
          type="primary"
          onClick={() => navigate("/device-categories/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add device category
        </Button>
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
