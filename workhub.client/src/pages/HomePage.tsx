import { wrapLoaderWithPermission } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import Test from "@/features/request/components/Test";

export const loader = wrapLoaderWithPermission();

export function Component() {
  return (
    <DefaultPage>
      <DefaultHeader title="Home"></DefaultHeader>

      <DefaultContent>
        <Test />
      </DefaultContent>
    </DefaultPage>
  );
}
