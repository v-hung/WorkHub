import { wrapLoaderWithPermission } from "@/utils/loader";
import NotificationTable from "@/features/notification/components/NotificationTable/NotificationTable";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import { wrapPromise } from "@/utils/promise";
import { requestApi } from "@/services/apiClient";

export const loader = wrapLoaderWithPermission(
  async ({ params }, { permissions }) => {
    const { id } = params;

    // const data = await wrapPromise(() =>
    // 	requestApi.({ id: +id })
    // );

    // return data;
  }
);

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
