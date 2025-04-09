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
          path: "/notifications",
          lazy: () => import("./pages/notification/NotificationPage"),
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
          children: [
            {
              path: "",
              lazy: () => import("./pages/team/TeamPage"),
            },
            {
              path: "create",
              lazy: () => import("./pages/team/TeamCreateUpdatePage"),
            },
            {
              path: ":id/edit",
              lazy: () => import("./pages/team/TeamCreateUpdatePage"),
            },
          ],
        },
        {
          path: "/projects",
          children: [
            {
              path: "",
              lazy: () => import("./pages/project/ProjectPage"),
            },
            {
              path: "create",
              lazy: () => import("./pages/project/ProjectCreateUpdatePage"),
            },
            {
              path: ":id/edit",
              lazy: () => import("./pages/project/ProjectCreateUpdatePage"),
            },
          ],
        },
        {
          path: "/devices",
          children: [
            {
              path: "",
              lazy: () => import("./pages/device/DevicePage"),
            },
            {
              path: "create",
              lazy: () => import("./pages/device/DeviceCreateUpdatePage"),
            },
            {
              path: ":id/edit",
              lazy: () => import("./pages/device/DeviceCreateUpdatePage"),
            },
          ],
        },
        {
          path: "/device-categories",
          children: [
            {
              path: "",
              lazy: () => import("./pages/deviceCategory/DeviceCategoryPage"),
            },
            {
              path: "create",
              lazy: () =>
                import("./pages/deviceCategory/DeviceCategoryCreateUpdatePage"),
            },
            {
              path: ":id/edit",
              lazy: () =>
                import("./pages/deviceCategory/DeviceCategoryCreateUpdatePage"),
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
