import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapProtectedLoader } from "@/utils/loader";
import WorkScheduleTable from "@/features/organization/workSchedule/components/WorkScheduleTable/WorkScheduleTable";
import { WorkScheduleProvider } from "@/features/organization/workSchedule/contexts/WorkScheduleContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { hasPermission } from "@/utils/hasPermission";
import { Permission } from "@/generate-api";

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsWorkSchedulesView
);

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Work times Manager">
        {hasPermission(Permission.PermissionsWorkSchedulesCreate) ? (
          <Button
            type="primary"
            onClick={() => navigate("/work-times/create")}
            icon={<IIonPlus width={16} height={16} />}
          >
            Add work time
          </Button>
        ) : null}
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Work time Manager" }]}
      />

      <DefaultContent>
        <WorkScheduleProvider>
          <WorkScheduleTable />
        </WorkScheduleProvider>
      </DefaultContent>
    </DefaultPage>
  );
}
