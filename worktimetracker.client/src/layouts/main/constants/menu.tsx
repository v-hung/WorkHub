import { MenuProps } from "antd";
import { TFunction } from "i18next";
import IonHomeOutline from "~icons/ion/home-outline";
import IonMailNotificationOutline from "~icons/ion/mail-notification-outline";
import IonClock from "~icons/ion/clock";
import IonPeopleCircleOutline from "~icons/ion/people-circle-outline";
import IonDocumentsOutline from "~icons/ion/documents-outline";
import IonPeopleOutline from "~icons/ion/people-outline";
import IonPersonOutline from "~icons/ion/person-outline";
import IonLockClosedOutline from "~icons/ion/lock-closed-outline";
import IonCogOutline from "~icons/ion/cog-outline";
import IonSendOutline from "~icons/ion/send-outline";
import IonPieChartOutline from "~icons/ion/pie-chart-outline";
import IonCubeOutline from "~icons/ion/cube-outline";

export const getMenuItems = (
  t: TFunction,
  unReadCount: number
): MenuProps["items"] => {
  return [
    {
      type: "group",
      label: t("menus.menu"),
    },
    {
      key: "/",
      type: "item",
      icon: <IonHomeOutline />,
      label: t("menus.home"),
    },
    {
      key: "/inbox",
      icon: <IonMailNotificationOutline />,
      label: (
        <span className="menu-item-inbox">
          <span>{t("menus.inbox")}</span>
          <span className="menu-badge">{unReadCount}</span>
        </span>
      ),
    },
    {
      key: "/timesheet",
      icon: <IonClock />,
      label: t("menus.timesheet"),
    },
    {
      key: "/metting",
      icon: <IonPeopleCircleOutline />,
      label: t("menus.metting"),
    },
    {
      type: "group",
      label: t("menus.manager"),
    },
    {
      key: "/project",
      icon: <IonDocumentsOutline />,
      label: t("menus.project"),
    },
    {
      key: "/team",
      icon: <IonPeopleOutline />,
      label: t("menus.team"),
    },
    {
      key: "/personal",
      icon: <IonPersonOutline />,
      label: t("menus.personal"),
      children: [
        {
          key: "/users",
          label: t("menus.employee"),
        },
        {
          key: "/work-times",
          label: t("menus.work-times"),
        },
      ],
    },
    {
      key: "/permisstion",
      icon: <IonLockClosedOutline />,
      label: t("menus.permisstion"),
      children: [
        {
          key: "/permisstion/role",
          label: t("menus.members"),
        },
        {
          key: "/permisstion/permisstion",
          label: t("menus.members"),
        },
      ],
    },
    {
      key: "/inventory",
      icon: <IonCubeOutline />,
      label: t("menus.inventory"),
    },
    {
      type: "group",
      label: t("menus.system"),
    },
    {
      key: "/setting",
      icon: <IonCogOutline />,
      label: t("menus.setting"),
    },
    {
      key: "/send-mail",
      icon: <IonSendOutline />,
      label: t("menus.send-mail"),
    },
    {
      key: "/report",
      icon: <IonPieChartOutline />,
      label: t("menus.report"),
    },
  ];
};
