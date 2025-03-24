import { Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import TimesheetHeader from "@/features/timesheet/components/TimesheetHeader/TimesheetHeader";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import TimesheetTable from "@/features/timesheet/components/TimesheetTable/TimesheetTable";
import { TimesheetProvider } from "@/features/timesheet/context/TimesheetContext";
import { lazy } from "react";
import { TimesheetRequestProvider } from "@/features/timesheet/context/TimesheetRequestContext";

const TimesheetRequestLazy = lazy(
  () =>
    import("@/features/timesheet/components/TimesheetRequest/TimesheetRequest")
);

export const loader = wrapLoaderWithPermission();

export function Component() {
  return (
    <TimesheetProvider>
      <TimesheetRequestProvider>
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
          <TimesheetRequestLazy />
        </Layout>
      </TimesheetRequestProvider>
    </TimesheetProvider>
  );
}
