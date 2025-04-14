import { Avatar, Dropdown, Layout, Menu, MenuProps } from "antd";
import { ComponentProps, FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "@/stores/auth.store";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import ViIcon from "@/assets/ViIcon.svg";
import UsIcon from "@/assets/UsIcon.svg";
import { i18n, TFunction } from "i18next";
import { useNavigate, useLocation } from "react-router";
import { MenuInfo } from "rc-menu/lib/interface";
import { getOpenKeys, getSelectedKeys } from "@/common/utils/menu.utils";
import { authBootstrapLogout } from "@/common/bootstrap/auth.bootstrap";
import { useLayout } from "../../contexts/LayoutContext";
import { useMenu } from "../../hooks/useMenu";
import "./DefaultMenu.css";

const { Sider } = Layout;

type State = ComponentProps<typeof Sider>;

const DefaultMenu: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const { collapsed } = useLayout();
  const { t, i18n } = useTranslation();

  const { menuItems } = useMenu();

  const user = useAuthStore((state) => state.user);

  const handleMenuItemClick = (info: MenuInfo) => {
    navigate(info.key);
  };

  const selectedKeys = useMemo(
    () => getSelectedKeys(location.pathname),
    [location.pathname]
  );
  const openKeys = useMemo(
    () => getOpenKeys(location.pathname, menuItems),
    [location.pathname, menuItems]
  );

  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      {...rest}
      width={256}
      className={`${className} default-menu`}
    >
      <SimpleBar style={{ height: "100%" }}>
        <Dropdown
          trigger={["click"]}
          arrow={{ pointAtCenter: false }}
          placement="bottomLeft"
          menu={{ items: getMenuLogoItems(t, i18n) }}
        >
          <div className="menu__logo">
            <Avatar shape="square" size={40} icon={<IIonPerson />}></Avatar>
            <div className="menu__logo-title">
              <h5 className="truncate">{user?.fullName}</h5>
              <p className="truncate">{user?.email}</p>
            </div>
          </div>
        </Dropdown>
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          defaultOpenKeys={openKeys}
          items={menuItems}
          onClick={handleMenuItemClick}
        />
      </SimpleBar>
    </Sider>
  );
};

export default DefaultMenu;

const getMenuLogoItems = (t: TFunction, i18n: i18n): MenuProps["items"] => {
  const navigate = useNavigate();

  const handelLogout = async () => {
    await authBootstrapLogout(() => {
      navigate("/auth/login");
    });
  };

  return [
    {
      key: "/profile",
      label: "Profile",
    },
    {
      key: "Language",
      label: "Language",
      children: [
        {
          icon: <img src={UsIcon} />,
          key: "en",
          label: t("locale.en"),
          extra: i18n.language == "en" && (
            <IIonCheckmark
              color="var(--color-primary)"
              width={16}
              height={16}
            />
          ),
          onClick: () => i18n.changeLanguage("en"),
        },
        {
          icon: <img src={ViIcon} />,
          key: "vi",
          label: t("locale.vi"),
          extra: i18n.language == "vi" && (
            <IIonCheckmark
              color="var(--color-primary)"
              width={16}
              height={16}
            />
          ),
          onClick: () => i18n.changeLanguage("vi"),
        },
      ],
    },
    {
      key: "logout",
      label: "Logout",
      danger: true,
      onClick: handelLogout,
    },
  ];
};
