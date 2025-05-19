import { wrapProtectedLoader } from "@/utils/loader";
import NotificationTable from "@/features/notification/components/NotificationTable/NotificationTable";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";

export const loader = wrapProtectedLoader();

export function Component() {
  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Notifications"></DefaultHeader>

      <DefaultContent>
        <NotificationTable />
      </DefaultContent>
    </DefaultPage>
  );
}
