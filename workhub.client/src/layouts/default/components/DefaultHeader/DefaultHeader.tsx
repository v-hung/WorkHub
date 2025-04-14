import { Button, Layout } from "antd";
import { ComponentProps, FC } from "react";
import { useLayout } from "../../contexts/LayoutContext";
import "./DefaultHeader.css";

const { Header } = Layout;

type State = ComponentProps<typeof Header>;

const DefaultHeader: FC<State> = (props) => {
  const { className, children, ...rest } = props;

  const { collapsed, setCollapsed } = useLayout();

  return (
    <Header {...rest} className={`default-header ${className}`}>
      <Button
        color="default"
        variant="filled"
        icon={collapsed ? <IMdiMenu /> : <IMdiMenuOpen />}
        onClick={() => setCollapsed(!collapsed)}
      />
      {props?.title && <h1 className="header__title">{props.title}</h1>}
      <div className="header__wrap">{children}</div>
    </Header>
  );
};

export default DefaultHeader;
