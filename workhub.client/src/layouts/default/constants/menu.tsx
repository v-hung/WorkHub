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
    {
      type: "group",
      label: t("menus.menu"),
    },
    {
      key: "/",
      type: "item",
      icon: <IIonHomeOutline />,
      label: t("menus.home"),
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
      key: "/timesheet",
      icon: <IIonClock />,
      label: t("menus.timesheet"),
    },
    {
      key: "/calendar",
      icon: <IIonCalendarOutline />,
      label: t("menus.calendar"),
    },
    {
      type: "group",
      label: t("menus.manager"),
    },
    {
      key: "/timesheets",
      icon: <IIonTimerOutline />,
      label: t("menus.timesheet"),
      permission: Permission.PermissionsTimesheetsView,
    },
    {
      key: "/projects",
      icon: <IIonDocumentsOutline />,
      label: t("menus.project"),
      permission: Permission.PermissionsProjectsView,
    },
    {
      key: "/teams",
      icon: <IIonPeopleOutline />,
      label: t("menus.team"),
      permission: Permission.PermissionsTeamsView,
    },
    {
      key: "/person",
      icon: <IIonPersonOutline />,
      label: t("menus.person"),
      children: [
        {
          key: "/users",
          label: t("menus.employee"),
          permission: Permission.PermissionsUsersView,
        },
        {
          key: "/work-times",
          label: t("menus.work-time"),
          permission: Permission.PermissionsWorkTimesView,
        },
      ],
    },
    {
      key: "/roles",
      icon: <IIonLockClosedOutline />,
      label: t("menus.permission"),
      permission: Permission.PermissionsRolesView,
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
      ],
    },
    {
      type: "group",
      label: t("menus.system"),
    },
    {
      key: "/send-mail",
      icon: <IIonSendOutline />,
      label: t("menus.send-mail"),
      permission: Permission.PermissionsSystemSendEmail,
    },
    {
      key: "/report",
      icon: <IIonPieChartOutline />,
      label: t("menus.report"),
      permission: Permission.PermissionsSystemReport,
    },
    {
      key: "/help",
      icon: <IIonHelp />,
      label: t("menus.help"),
    },
  ];
};
