import { Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import TImesheetHeader from "@/features/timesheet/TImesheetHeader";

export function Component() {
  return (
    <Layout>
      <TImesheetHeader />
      <MainContent>Content</MainContent>
    </Layout>
  );
}
