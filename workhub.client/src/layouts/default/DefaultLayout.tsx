import { Layout } from "antd";
import { Outlet } from "react-router";
import ProgressIndicator from "@/ui/navigation/ProgressIndicator/ProgressIndicator";
import { LayoutProvider } from "./contexts/LayoutContext";
import DefaultMenu from "./components/DefaultMenu/DefaultMenu";
import "./DefaultLayout.css";

export const Component = () => {
  return (
    <LayoutProvider>
      <Layout className="layout layout--default">
        <DefaultMenu />
        <Outlet />
      </Layout>
      <ProgressIndicator />
    </LayoutProvider>
  );
};
