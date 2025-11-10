import { wrapProtectedLoader } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { UserProvider } from "@/features/organization/user/contexts/UserContext";
import { Button } from "antd";
import { useAuthStore } from "@/stores/auth.store";
import ProfileHeader from "@/features/system/profile/components/ProfileHeader/ProfileHeader";
import ProfileTabs from "@/features/system/profile/components/ProfileTabs/ProfileTabs";

export const loader = wrapProtectedLoader();

export function Component() {
  const data = useAuthStore((state) => state.user);

  return (
    <DefaultPage pageClassName="h-screen" showScrollIndicator={false}>
      <UserProvider>
        <DefaultHeader title="Profile">
          <Button type="primary" icon={<IIonCog width={20} height={20} />}>
            Function
          </Button>
        </DefaultHeader>

        <DefaultContent>
          <ProfileHeader />
          <ProfileTabs />
        </DefaultContent>
      </UserProvider>
    </DefaultPage>
  );
}
