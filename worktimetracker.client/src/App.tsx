import { ConfigProvider, App as AppTheme } from "antd";
import { FC, PropsWithChildren, Suspense } from "react";
import { authBootstrap } from "./common/bootstrap/auth.bootstrap";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
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
        notification={{ placement: "topRight" }}
      >
        {children}
      </AppTheme>
    </ConfigProvider>
  );
};

const App: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppProvider>{children}</AppProvider>
    </Suspense>
  );
};

export default App;
