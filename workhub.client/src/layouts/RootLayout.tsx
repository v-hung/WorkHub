import { FeedbackProvider } from "@/contexts/feedback/FeedbackProvider";
import { useAppLocale } from "@/hooks/locale/useAppLocale";
import { ConfigProvider, App as AppTheme } from "antd";
import { Outlet } from "react-router";

export const RootLayout = () => {
  const { antdLocale } = useAppLocale();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0284c7",
          colorTextBase: "#222",
          colorBgLayout: "var(--color-bg)",
        },
      }}
      locale={antdLocale}
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
          <Outlet />
        </FeedbackProvider>
      </AppTheme>
    </ConfigProvider>
  );
};
