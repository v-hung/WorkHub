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
import { Permission } from "@/generate-api";
import { ItemType } from "antd/es/menu/interface";

export const getMenuItems = (
  t: TFunction,
  unReadCount: number
): (ItemType & { permission?: Permission })[] => {
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
      key: "/notifications",
      icon: <IonMailNotificationOutline />,
      label: (
        <span className="menu__item-notification">
          <span>{t("menus.notification")}</span>
          <span className="menu__badge">{unReadCount}</span>
        </span>
      ),
    },
    {
      key: "/timesheet",
      icon: <IonClock />,
      label: t("menus.timesheet"),
    },
    {
      key: "/meeting",
      icon: <IonPeopleCircleOutline />,
      label: t("menus.meeting"),
    },
    {
      type: "group",
      label: t("menus.manager"),
    },
    {
      key: "/projects",
      icon: <IonDocumentsOutline />,
      label: t("menus.project"),
    },
    {
      key: "/teams",
      icon: <IonPeopleOutline />,
      label: t("menus.team"),
    },
    {
      key: "/person",
      icon: <IonPersonOutline />,
      label: t("menus.person"),
      children: [
        {
          key: "/users",
          label: t("menus.employee"),
        },
        {
          key: "/work-times",
          label: t("menus.work-time"),
        },
      ],
    },
    {
      key: "/permissions/roles",
      icon: <IonLockClosedOutline />,
      label: t("menus.permission"),
    },
    {
      key: "/equipment",
      icon: <IonCubeOutline />,
      label: t("menus.equipment"),
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
