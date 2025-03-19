import { ConfigProvider, App as AppTheme } from "antd";
import { Suspense } from "react";
import { authBootstrap } from "./common/bootstrap/auth.bootstrap";
import { FeedbackProvider } from "./common/contexts/FeedbackProvider";
import { RouterProvider } from "react-router";
import router from "./router";

export const AppProvider = () => {
  authBootstrap.read();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0284c7",
          colorTextBase: "#222",
          colorBgLayout: "var(--color-bg)",
        },
      }}
    >
      <AppTheme
        message={{ maxCount: 1 }}
        notification={{
          placement: "topRight",
          pauseOnHover: true,
          // showProgress: true,
          duration: 2,
        }}
      >
        <FeedbackProvider>
          <RouterProvider router={router} />
        </FeedbackProvider>
      </AppTheme>
    </ConfigProvider>
  );
};

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppProvider />
    </Suspense>
  );
};

export default App;
