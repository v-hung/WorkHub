import { TFunction } from "i18next";
import { Permission } from "@/generate-api";
import type { MenuProps } from "antd";

type AntdMenuItem = Required<MenuProps>["items"][number];

export type MenuItemTypeCustom = AntdMenuItem & {
  permission?: Permission;
  children?: MenuItemTypeCustom[];
};

export const getMenuItems = (
  t: TFunction,
  unReadCount: number
): MenuItemTypeCustom[] => {
  return [
    // DASHBOARD & OVERVIEW
    {
      type: "group",
      label: t("menus.dashboard"),
    },
    {
      key: "/",
      type: "item",
      icon: <IIonHomeOutline />,
      label: t("menus.home"),
    },
    {
      key: "/dashboard",
      icon: <IIonPieChartOutline />,
      label: t("menus.dashboard_overview"),
    },
    {
      key: "/analytics",
      icon: <IIonBarChartOutline />,
      label: t("menus.analytics"),
    },

    // COMMUNICATION & COLLABORATION
    {
      type: "group",
      label: t("menus.communication"),
    },
    {
      key: "/notifications",
      icon: <IIonMailNotificationOutline />,
      label:
        unReadCount > 0 ? (
          <span className="menu__item-notification">
            <span>{t("menus.notification")}</span>
            <span className="menu__badge">{unReadCount}</span>
          </span>
        ) : (
          t("menus.notification")
        ),
    },
    {
      key: "/messages",
      icon: <IIonChatbubbleOutline />,
      label: t("menus.messages"),
    },
    {
      key: "/calendar",
      icon: <IIonCalendarOutline />,
      label: t("menus.calendar"),
    },
    {
      key: "/meeting",
      icon: <IIonPeopleCircleOutline />,
      label: t("menus.meeting"),
    },

    // HUMAN RESOURCES MANAGEMENT
    {
      type: "group",
      label: t("menus.human_resources"),
    },
    {
      key: "/hr",
      icon: <IIonPeopleOutline />,
      label: t("menus.hr_management"),
      children: [
        {
          key: "/users",
          label: t("menus.user_list"),
          permission: Permission.PermissionsUsersView,
        },
        {
          key: "/employee-profiles",
          label: t("menus.employee_profiles"),
        },
        {
          key: "/organizational-chart",
          label: t("menus.org_chart"),
        },
        {
          key: "/job-postings",
          label: t("menus.job_postings"),
        },
        {
          key: "/candidates",
          label: t("menus.candidates"),
        },
        {
          key: "/interviews",
          label: t("menus.interviews"),
        },
        {
          key: "/offers",
          label: t("menus.offers"),
        },
        {
          key: "/salary-structure",
          label: t("menus.salary_structure"),
        },
        {
          key: "/payroll-processing",
          label: t("menus.payroll_processing"),
        },
        {
          key: "/benefits",
          label: t("menus.benefits"),
        },
        {
          key: "/taxes",
          label: t("menus.taxes"),
        },
        {
          key: "/performance-reviews",
          label: t("menus.performance_reviews"),
        },
        {
          key: "/goals",
          label: t("menus.goals_objectives"),
        },
        {
          key: "/feedback",
          label: t("menus.feedback"),
        },
        {
          key: "/training",
          label: t("menus.training_development"),
        },
        {
          key: "/work-schedules",
          label: t("menus.work_schedules"),
          permission: Permission.PermissionsWorkSchedulesView,
        },
        {
          key: "/time-tracking",
          label: t("menus.time_tracking"),
        },
        {
          key: "/leave-management",
          label: t("menus.leave_management"),
        },
        {
          key: "/overtime",
          label: t("menus.overtime"),
        },
      ],
    },

    // PROJECT MANAGEMENT
    {
      type: "group",
      label: t("menus.project_management"),
    },
    {
      key: "/projects",
      icon: <IIonDocumentsOutline />,
      label: t("menus.project_manager"),
      permission: Permission.PermissionsProjectsView,
      children: [
        {
          key: "/project-dashboard",
          label: t("menus.project_dashboard"),
        },
        {
          key: "/project-list",
          label: t("menus.all_projects"),
        },
        {
          key: "/project-templates",
          label: t("menus.project_templates"),
        },
        {
          key: "/project-portfolio",
          label: t("menus.portfolio_management"),
        },
      ],
    },
    {
      key: "/project-work",
      icon: <IIonGitBranchOutline />,
      label: t("menus.project_work"),
      children: [
        {
          key: "/backlog",
          label: t("menus.backlog"),
        },
        {
          key: "/active-sprints",
          label: t("menus.active_sprints"),
        },
        {
          key: "/kanban-board",
          label: t("menus.kanban_board"),
        },
        {
          key: "/issues",
          label: t("menus.issues_tasks"),
        },
        {
          key: "/epics",
          label: t("menus.epics"),
        },
        {
          key: "/user-stories",
          label: t("menus.user_stories"),
        },
      ],
    },
    {
      key: "/project-planning",
      icon: <IIonMapOutline />,
      label: t("menus.project_planning"),
      children: [
        {
          key: "/roadmap",
          label: t("menus.roadmap"),
        },
        {
          key: "/gantt-chart",
          label: t("menus.gantt_chart"),
        },
        {
          key: "/project-timeline",
          label: t("menus.timeline"),
        },
        {
          key: "/milestones",
          label: t("menus.milestones"),
        },
        {
          key: "/dependencies",
          label: t("menus.dependencies"),
        },
      ],
    },
    {
      key: "/project-reports",
      icon: <IIonAnalyticsOutline />,
      label: t("menus.project_reports"),
      children: [
        {
          key: "/burndown-chart",
          label: t("menus.burndown_chart"),
        },
        {
          key: "/velocity-chart",
          label: t("menus.velocity_chart"),
        },
        {
          key: "/project-metrics",
          label: t("menus.project_metrics"),
        },
        {
          key: "/time-tracking-reports",
          label: t("menus.time_tracking_reports"),
        },
      ],
    },
    {
      key: "/teams",
      icon: <IIonPeopleOutline />,
      label: t("menus.team_manager"),
      permission: Permission.PermissionsTeamsView,
      children: [
        {
          key: "/team-list",
          label: t("menus.team_list"),
        },
        {
          key: "/team-structure",
          label: t("menus.team_structure"),
        },
        {
          key: "/team-performance",
          label: t("menus.team_performance"),
        },
        {
          key: "/team-collaboration",
          label: t("menus.team_collaboration"),
        },
      ],
    },

    // TIME & ATTENDANCE MANAGEMENT
    {
      type: "group",
      label: t("menus.time_attendance"),
    },
    {
      key: "/timesheet",
      icon: <IIonClock />,
      label: t("menus.timesheet"),
      children: [
        {
          key: "/my-timesheet",
          label: t("menus.my_timesheet"),
        },
        {
          key: "/timesheet-approval",
          label: t("menus.timesheet_approval"),
        },
        {
          key: "/timesheet-reports",
          label: t("menus.timesheet_reports"),
        },
      ],
    },
    {
      key: "/timesheet-manager",
      icon: <IIonTimerOutline />,
      label: t("menus.timesheet_manager"),
      permission: Permission.PermissionsTimesheetsView,
      children: [
        {
          key: "/timesheets",
          label: t("menus.timesheet_employee"),
          permission: Permission.PermissionsTimesheetsView,
        },
        {
          key: "/holidays",
          label: t("menus.holidays"),
        },
        {
          key: "/makeup-times",
          label: t("menus.makeup_time"),
        },
        {
          key: "/attendance-monitoring",
          label: t("menus.attendance_monitoring"),
        },
        {
          key: "/shift-management",
          label: t("menus.shift_management"),
        },
      ],
    },

    // ASSET & EQUIPMENT MANAGEMENT
    {
      type: "group",
      label: t("menus.asset_management"),
    },
    {
      key: "/equipment",
      icon: <IIonCubeOutline />,
      label: t("menus.equipment"),
      permission: Permission.PermissionsDevicesView,
      children: [
        {
          key: "/devices",
          label: t("menus.device"),
        },
        {
          key: "/device-categories",
          label: t("menus.deviceCategory"),
        },
        {
          key: "/device-maintenance",
          label: t("menus.device_maintenance"),
        },
        {
          key: "/device-lifecycle",
          label: t("menus.device_lifecycle"),
        },
        {
          key: "/device-reservations",
          label: t("menus.device_reservations"),
        },
      ],
    },
    {
      key: "/facilities",
      icon: <IIonBusinessOutline />,
      label: t("menus.facilities_management"),
      children: [
        {
          key: "/workspace-booking",
          label: t("menus.workspace_booking"),
        },
        {
          key: "/facility-maintenance",
          label: t("menus.facility_maintenance"),
        },
        {
          key: "/parking-management",
          label: t("menus.parking_management"),
        },
        {
          key: "/visitor-management",
          label: t("menus.visitor_management"),
        },
      ],
    },

    // FINANCE & ACCOUNTING
    {
      type: "group",
      label: t("menus.finance"),
    },
    {
      key: "/finance",
      icon: <IIonCashOutline />,
      label: t("menus.finance_management"),
    },

    // INVENTORY & PROCUREMENT
    {
      type: "group",
      label: t("menus.inventory_procurement"),
    },
    {
      key: "/inventory",
      icon: <IIonStorefrontOutline />,
      label: t("menus.inventory_management"),
    },

    // SETTINGS & SYSTEM ADMINISTRATION
    {
      type: "group",
      label: t("menus.system"),
    },
    {
      key: "/user-management",
      icon: <IIonPersonOutline />,
      label: t("menus.user_management"),
      permission: Permission.PermissionsUsersView,
      children: [
        {
          key: "/roles",
          label: t("menus.permission"),
          permission: Permission.PermissionsRolesView,
        },
        {
          key: "/user-profiles",
          label: t("menus.user_profiles"),
        },
        {
          key: "/user-preferences",
          label: t("menus.user_preferences"),
        },
      ],
    },
    {
      key: "/system-configuration",
      icon: <IIonSettingsOutline />,
      label: t("menus.system_configuration"),
      children: [
        {
          key: "/work-times",
          label: t("menus.work-time"),
          permission: Permission.PermissionsWorkSchedulesView,
        },
        {
          key: "/system-settings",
          label: t("menus.system_settings"),
        },
        {
          key: "/integration-settings",
          label: t("menus.integration_settings"),
        },
      ],
    },
    {
      key: "/communication-tools",
      icon: <IIonChatbubbleEllipsesOutline />,
      label: t("menus.communication_tools"),
      children: [
        {
          key: "/send-mail",
          label: t("menus.send-mail"),
          permission: Permission.PermissionsSystemSendEmail,
        },
        {
          key: "/bulk-notifications",
          label: t("menus.bulk_notifications"),
        },
        {
          key: "/message-templates",
          label: t("menus.message_templates"),
        },
      ],
    },
    {
      key: "/support-help",
      icon: <IIonHelp />,
      label: t("menus.support_help"),
      children: [
        {
          key: "/help",
          label: t("menus.help"),
        },
        {
          key: "/support",
          label: t("menus.support"),
        },
        {
          key: "/documentation",
          label: t("menus.documentation"),
        },
      ],
    },
  ];
};
