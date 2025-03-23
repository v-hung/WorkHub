import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import DeviceCategoryTable from "@/features/deviceCategory/components/DeviceCategoryTable/DeviceCategoryTable";
import { DeviceCategoryProvider } from "@/features/deviceCategory/contexts/DeviceCategoryContext";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <Layout className="main-layout h-screen">
      <MainHeader title="Device Categories Manager">
        <Button
          type="primary"
          onClick={() => navigate("/device-categories/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add work time
        </Button>
      </MainHeader>

      <MainBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Device Category Manager" },
        ]}
      />

      <MainContent>
        <DeviceCategoryProvider>
          <DeviceCategoryTable />
        </DeviceCategoryProvider>
      </MainContent>
    </Layout>
  );
}
