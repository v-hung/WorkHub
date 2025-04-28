import { wrapLoaderWithPermission } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { hasPermission } from "@/utils/hasPermission";
import { Permission } from "@/generate-api";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import TimesheetSyncDataButton from "@/features/timesheet/components/TimesheetSyncDataButton/TimesheetSyncDataButton";
import TimesheetEmployeeTable from "@/features/timesheet/components/TimesheetEmployeeTable/TimesheetEmployeeTable";
import { TimesheetEmployeeProvider } from "@/features/timesheet/context/TimesheetEmployeeContext";

export const loader = wrapLoaderWithPermission();

export function Component() {
  return (
    <DefaultPage pageClassName="h-screen">
      <TimesheetEmployeeProvider>
        <DefaultHeader title="Timesheets Employees">
          {hasPermission(Permission.PermissionsBioStarSyncTimesheets) ? (
            <TimesheetSyncDataButton />
          ) : null}
        </DefaultHeader>

        <DefaultBreadcrumb
          items={[
            { title: "Home", path: "/" },
            { title: "Timesheets Employees" },
          ]}
        />

        <DefaultContent>
          <TimesheetEmployeeTable />
        </DefaultContent>
      </TimesheetEmployeeProvider>
    </DefaultPage>
  );
}
