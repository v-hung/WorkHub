import "./MainLayout.css";
import { Layout } from "antd";
import MainMenu from "./components/MainMenu";
import { Outlet } from "react-router";
import { LayoutProvider } from "./contexts/LayoutContext";
import ProgressIndicator from "@/ui/navigation/ProgressIndicator/ProgressIndicator";

export const Component = () => {
  return (
    <LayoutProvider>
      <Layout id="app">
        <MainMenu />
        <Outlet />
      </Layout>
      <ProgressIndicator />
    </LayoutProvider>
  );
};
