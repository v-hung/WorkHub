import { createBrowserRouter } from "react-router";
import MainLoading from "./layouts/main/components/MainLoading";

const router = createBrowserRouter(
  [
    {
      lazy: () => import("./layouts/main/MainLayout"),
      hydrateFallbackElement: <MainLoading />,
      children: [
        {
          path: "/",
          lazy: () => import("./pages/HomePage"),
        },
        {
          path: "/timesheet",
          lazy: () => import("./pages/timesheet/TimesheetPage"),
        },
        {
          path: "/users",
          children: [
            {
              path: "",
              lazy: () => import("./pages/user/UserPage"),
            },
            {
              path: "create",
              lazy: () => import("./pages/user/UserCreateUpdatePage"),
            },
            {
              path: ":id/edit",
              lazy: () => import("./pages/user/UserCreateUpdatePage"),
            },
            {
              path: ":id",
              lazy: () => import("./pages/user/UserDetailPage"),
            },
          ],
        },
      ],
    },
    {
      lazy: () => import("./layouts/auth/AuthLayout"),
      children: [
        {
          path: "/auth/login",
          lazy: () => import("./pages/auth/login/LoginPage"),
        },
      ],
    },
  ],
  {
    future: {
      // v7_partialHydration: true,
    },
  }
);

export default router;
