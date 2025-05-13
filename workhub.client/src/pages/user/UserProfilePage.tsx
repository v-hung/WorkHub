import { wrapLoaderWithPermission } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { UserProvider } from "@/features/user/contexts/UserContext";
import { Button } from "antd";
import { useAuthStore } from "@/stores/auth.store";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const data = useAuthStore((state) => state.user);

  return (
    <DefaultPage pageClassName="h-screen">
      <UserProvider>
        <DefaultHeader title="Profile">
          <Button type="primary" icon={<IIonCog width={20} height={20} />}>
            Function
          </Button>
        </DefaultHeader>

        <DefaultContent></DefaultContent>
      </UserProvider>
    </DefaultPage>
  );
}
