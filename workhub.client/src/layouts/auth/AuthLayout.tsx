import { Layout } from "antd";
import { Outlet } from "react-router";
import "./AuthLayout.css";

export const Component = () => {
  return (
    <Layout id="auth-layout">
      <Outlet />
    </Layout>
  );
};
