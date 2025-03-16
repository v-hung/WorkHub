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
        {
          path: "/work-times",
          children: [
            {
              path: "",
              lazy: () => import("./pages/workTime/WorkTimePage"),
            },
            {
              path: "create",
              lazy: () => import("./pages/workTime/WorkTimeCreateUpdatePage"),
            },
            {
              path: ":id/edit",
              lazy: () => import("./pages/workTime/WorkTimeCreateUpdatePage"),
            },
          ],
        },
        {
          path: "/teams",
          lazy: () => import("./pages/team/TeamPage"),
        },
        {
          path: "/projects",
          lazy: () => import("./pages/project/ProjectPage"),
        },
        {
          path: "/inventories",
          lazy: () => import("./pages/inventory/InventoryPage"),
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
