import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    lazy: () => import("./layouts/main/MainLayout"),
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
]);

export default router;
