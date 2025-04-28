import { Layout } from "antd";
import { Outlet } from "react-router";
import ProgressIndicator from "@/ui/navigation/ProgressIndicator/ProgressIndicator";
import { LayoutProvider } from "./contexts/LayoutContext";
import DefaultMenu from "./components/DefaultMenu/DefaultMenu";
import "./DefaultLayout.css";
import { NotificationHubProvider } from "@/contexts/signalR/notification/NotificationHubContext";

export const Component = () => {
  return (
    <LayoutProvider>
      <NotificationHubProvider>
        <Layout className="layout layout--default">
          <DefaultMenu />
          <Outlet />
        </Layout>
        <ProgressIndicator />
      </NotificationHubProvider>
    </LayoutProvider>
  );
};
