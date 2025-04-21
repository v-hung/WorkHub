import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/utils/loader";
import WorkTimeTable from "@/features/workTime/components/WorkTimeTable/WorkTimeTable";
import { WorkTimeProvider } from "@/features/workTime/contexts/WorkTimeContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Work times Manager">
        <Button
          type="primary"
          onClick={() => navigate("/work-times/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add work time
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Work time Manager" }]}
      />

      <DefaultContent>
        <WorkTimeProvider>
          <WorkTimeTable />
        </WorkTimeProvider>
      </DefaultContent>
    </DefaultPage>
  );
}
