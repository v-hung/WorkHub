import { UserProvider } from "@/features/organization/user/contexts/UserContext";
import { Outlet } from "react-router";

export function Component() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
}
