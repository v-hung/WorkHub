import { UserProvider } from "@/features/user/contexts/UserContext";
import { Outlet } from "react-router";

export function Component() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
}
