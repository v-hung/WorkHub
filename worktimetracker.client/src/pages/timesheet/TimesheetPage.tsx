import { Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import TimesheetHeader from "@/features/timesheet/components/TimesheetHeader/TimesheetHeader";

export function Component() {
  return (
    <Layout>
      <TimesheetHeader />
      <MainContent>Content</MainContent>
    </Layout>
  );
}
