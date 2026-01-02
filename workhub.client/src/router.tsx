import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import InitialAppLoader from "./layouts/InitialAppLoader/InitialAppLoader";
import ErrorBoundary from "./pages/error/ErrorBoundary";

const router = createBrowserRouter(
  [
    {
      errorElement: <ErrorBoundary />,
      Component: RootLayout,
      hydrateFallbackElement: <InitialAppLoader />,
      children: [
        {
          lazy: () => import("./layouts/default/DefaultLayout"),
          children: [
            {
              path: "/",
              lazy: () => import("./pages/home/HomePage"),
            },
            {
              path: "/dashboard",
              lazy: () => import("./pages/dashboard/DashboardPage"),
            },
            {
              path: "/analytics",
              lazy: () => import("./pages/analytics/AnalyticsPage"),
            },
            {
              path: "/messages",
              lazy: () => import("./pages/messages/MessagesPage"),
            },
            {
              path: "/calendar",
              lazy: () => import("./pages/calendar/CalendarPage"),
            },
            {
              path: "/meeting",
              lazy: () => import("./pages/meeting/MeetingPage"),
            },
            {
              path: "/notifications",
              lazy: () => import("./pages/notification/NotificationPage"),
            },
            {
              path: "/requests/:id",
              lazy: () => import("./pages/request/RequestDetailPage"),
            },
            {
              path: "/timesheet",
              lazy: () => import("./pages/timesheet/TimesheetPage"),
            },
            {
              path: "/timesheets",
              lazy: () =>
                import("./pages/timesheetEmployee/TimesheetEmployeePage"),
            },
            {
              path: "/profile",
              lazy: () => import("./pages/profile/ProfilePage"),
            },
            {
              path: "/users",
              lazy: () => import("./pages/user/UserLayout"),
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
              path: "/employee-profiles",
              lazy: () => import("./pages/employee/EmployeeProfilesPage"),
            },
            {
              path: "/organizational-chart",
              lazy: () => import("./pages/employee/OrganizationalChartPage"),
            },
            {
              path: "/employee-onboarding",
              lazy: () => import("./pages/employee/EmployeeOnboardingPage"),
            },
            {
              path: "/employee-offboarding",
              lazy: () => import("./pages/employee/EmployeeOffboardingPage"),
            },
            {
              path: "/job-postings",
              lazy: () => import("./pages/recruitment/JobPostingsPage"),
            },
            {
              path: "/candidates",
              lazy: () => import("./pages/recruitment/CandidatesPage"),
            },
            {
              path: "/interviews",
              lazy: () => import("./pages/recruitment/InterviewsPage"),
            },
            {
              path: "/offers",
              lazy: () => import("./pages/recruitment/OffersPage"),
            },
            {
              path: "/roles",
              children: [
                {
                  path: "",
                  lazy: () => import("./pages/role/RolePage"),
                },
                {
                  path: "create",
                  lazy: () => import("./pages/role/RoleCreateUpdatePage"),
                },
                {
                  path: ":id/edit",
                  lazy: () => import("./pages/role/RoleCreateUpdatePage"),
                },
              ],
            },
            {
              path: "/work-times",
              children: [
                {
                  path: "",
                  lazy: () => import("./pages/workSchedule/WorkSchedulePage"),
                },
                {
                  path: "create",
                  lazy: () =>
                    import("./pages/workSchedule/WorkScheduleCreateUpdatePage"),
                },
                {
                  path: ":id/edit",
                  lazy: () =>
                    import("./pages/workSchedule/WorkScheduleCreateUpdatePage"),
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
              path: "/salary-structure",
              lazy: () => import("./pages/payroll/SalaryStructurePage"),
            },
            {
              path: "/payroll-processing",
              lazy: () => import("./pages/payroll/PayrollProcessingPage"),
            },
            {
              path: "/benefits",
              lazy: () => import("./pages/payroll/BenefitsPage"),
            },
            {
              path: "/taxes",
              lazy: () => import("./pages/payroll/TaxesPage"),
            },
            {
              path: "/performance-reviews",
              lazy: () => import("./pages/performance/PerformanceReviewsPage"),
            },
            {
              path: "/goals",
              lazy: () => import("./pages/performance/GoalsPage"),
            },
            {
              path: "/feedback",
              lazy: () => import("./pages/performance/FeedbackPage"),
            },
            {
              path: "/training",
              lazy: () => import("./pages/performance/TrainingPage"),
            },
            {
              path: "/work-schedules",
              lazy: () => import("./pages/attendance/WorkSchedulesPage"),
            },
            {
              path: "/time-tracking",
              lazy: () => import("./pages/attendance/TimeTrackingPage"),
            },
            {
              path: "/leave-management",
              lazy: () => import("./pages/attendance/LeaveManagementPage"),
            },
            {
              path: "/overtime",
              lazy: () => import("./pages/attendance/OvertimePage"),
            },
            {
              path: "/device-categories",
              children: [
                {
                  path: "",
                  lazy: () =>
                    import("./pages/deviceCategory/DeviceCategoryPage"),
                },
                {
                  path: "create",
                  lazy: () =>
                    import(
                      "./pages/deviceCategory/DeviceCategoryCreateUpdatePage"
                    ),
                },
                {
                  path: ":id/edit",
                  lazy: () =>
                    import(
                      "./pages/deviceCategory/DeviceCategoryCreateUpdatePage"
                    ),
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
        {
          path: "*",
          lazy: () => import("./pages/error/NotFoundPage"),
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
