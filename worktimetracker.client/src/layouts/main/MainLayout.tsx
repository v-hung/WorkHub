import "./MainLayout.css";
import { Layout } from "antd";
import MainMenu from "./components/MainMenu";
import { Outlet } from "react-router";
import { LayoutProvider } from "./contexts/LayoutContext";

export const Component = () => {
  return (
    <LayoutProvider>
      <Layout id="app">
        <MainMenu />
        <Outlet />
      </Layout>
    </LayoutProvider>
  );
};
