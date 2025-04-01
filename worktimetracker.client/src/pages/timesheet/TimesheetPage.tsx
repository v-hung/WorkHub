import { Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import TimesheetHeader from "@/features/timesheet/components/TimesheetHeader/TimesheetHeader";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import TimesheetTable from "@/features/timesheet/components/TimesheetTable/TimesheetTable";
import { TimesheetProvider } from "@/features/timesheet/context/TimesheetContext";
import { lazy, Suspense } from "react";
import { RequestProvider } from "@/features/request/contexts/RequestContext";

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
        <Layout className="main-layout h-screen">
          <TimesheetHeader />
          <MainBreadcrumb
            items={[
              { title: "Home", path: "/" },
              { title: "Timesheets Manager" },
            ]}
          />
          <MainContent>
            <TimesheetTable />
          </MainContent>

          <Suspense fallback={null}>
            <LeaveRequestLazy />
            <TimesheetAdjustmentRequestLazy />
          </Suspense>
        </Layout>
      </RequestProvider>
    </TimesheetProvider>
  );
}
