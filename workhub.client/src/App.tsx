import { ConfigProvider, App as AppTheme } from "antd";
import { Suspense } from "react";
import { authBootstrap } from "./services/auth.bootstrap";
import { FeedbackProvider } from "./contexts/feedback/FeedbackProvider";
import { RouterProvider } from "react-router";
import router from "./router";
import viVN from "antd/locale/vi_VN";
import Loading from "./ui/navigation/Loading/Loading";

export const AppProvider = () => {
  authBootstrap.read();
  // if (!false) {
  //   throw new Promise(() => {});
  // }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0284c7",
          colorTextBase: "#222",
          colorBgLayout: "var(--color-bg)",
        },
      }}
      // locale={viVN}
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
    <Suspense fallback={<Loading />}>
      <AppProvider />
    </Suspense>
  );
};

export default App;
