import { Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import TimesheetHeader from "@/features/timesheet/components/TimesheetHeader/TimesheetHeader";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import TimesheetTable from "@/features/timesheet/components/TimesheetTable/TimesheetTable";

export const loader = wrapLoaderWithPermission();

export function Component() {
  return (
    <Layout>
      <TimesheetHeader />
      <MainBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Timesheets Manager" }]}
      />

      <MainContent>
        <TimesheetTable />
      </MainContent>
    </Layout>
  );
}
