import { wrapLoaderWithPermission } from "@/common/utils/loader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";

export const loader = wrapLoaderWithPermission();

export function Component() {
  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Notifications"></DefaultHeader>

      {/* <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Project Manager" }]}
      /> */}

      <DefaultContent>
        <NotificationTable />
      </DefaultContent>
    </DefaultPage>
  );
}
