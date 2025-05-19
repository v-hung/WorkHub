import TimesheetHeader from "@/features/timesheet/components/TimesheetHeader/TimesheetHeader";
import { wrapProtectedLoader } from "@/utils/loader";
import TimesheetTable from "@/features/timesheet/components/TimesheetTable/TimesheetTable";
import { TimesheetProvider } from "@/features/timesheet/context/TimesheetContext";
import { lazy, Suspense } from "react";
import { RequestProvider } from "@/features/request/contexts/RequestContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

const TimesheetAdjustmentRequestModelLazy = lazy(
  () =>
    import(
      "@/features/request/components/TimesheetAdjustmentRequestModel/TimesheetAdjustmentRequestModel"
    )
);
const LeaveRequestModelLazy = lazy(
  () =>
    import("@/features/request/components/LeaveRequestModel/LeaveRequestModel")
);

export const loader = wrapProtectedLoader();

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
            <LeaveRequestModelLazy />
            <TimesheetAdjustmentRequestModelLazy />
          </Suspense>
        </DefaultPage>
      </RequestProvider>
    </TimesheetProvider>
  );
}
