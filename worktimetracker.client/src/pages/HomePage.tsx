import { wrapLoaderWithPermission } from "@/common/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

export const loader = wrapLoaderWithPermission(async () => {});

export function Component() {
  return (
    <DefaultPage>
      <DefaultHeader title="Home"></DefaultHeader>

      <DefaultContent>Home</DefaultContent>
    </DefaultPage>
  );
}
