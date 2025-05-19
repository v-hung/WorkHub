import { wrapProtectedLoader } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

export const loader = wrapProtectedLoader();

export function Component() {
  return (
    <DefaultPage>
      <DefaultHeader title="Home"></DefaultHeader>

      <DefaultContent></DefaultContent>
    </DefaultPage>
  );
}
