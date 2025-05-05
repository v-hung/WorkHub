import TimesheetHeader from "@/features/timesheet/components/TimesheetHeader/TimesheetHeader";
import { wrapLoaderWithPermission } from "@/utils/loader";
import TimesheetTable from "@/features/timesheet/components/TimesheetTable/TimesheetTable";
import { TimesheetProvider } from "@/features/timesheet/context/TimesheetContext";
import { lazy, Suspense } from "react";
import { RequestProvider } from "@/features/request/contexts/RequestContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

const TimesheetAdjustmentRequestLazy = lazy(
  () =>
    import(
      "@/features/request/components/TimesheetAdjustmentRequest/TimesheetAdjustmentRequest"
    )
);
const LeaveRequestLazy = lazy(
  () => import("@/features/request/components/LeaveRequest/LeaveRequest")
);

export const loader = wrapLoaderWithPermission();

export function Component() {
  return (
    <TimesheetProvider>
      <RequestProvider>
        <DefaultPage pageClassName="h-screen">
          <TimesheetHeader />

          <DefaultBreadcrumb
            items={[
              { title: "Home", path: "/" },
              { title: "Timesheets Manager" },
            ]}
            style={{ paddingBottom: "1rem" }}
          />

          <DefaultContent>
            <TimesheetTable />
          </DefaultContent>

          <Suspense fallback={null}>
            <LeaveRequestLazy />
            <TimesheetAdjustmentRequestLazy />
          </Suspense>
        </DefaultPage>
      </RequestProvider>
    </TimesheetProvider>
  );
}
