import { Button, Layout } from "antd";
import { ComponentProps, FC } from "react";
import { useLayout } from "../contexts/LayoutContext";

const { Header } = Layout;

type State = ComponentProps<typeof Header>;

const MainHeader: FC<State> = (props) => {
  const { className, children, ...rest } = props;

  const { collapsed, setCollapsed } = useLayout();

  return (
    <Header {...rest} className={`main-header ${className}`}>
      <Button
        color="default"
        variant="filled"
        icon={collapsed ? <IMdiMenu /> : <IMdiMenuOpen />}
        onClick={() => setCollapsed(!collapsed)}
      />
      {props?.title && <h1 className="header-title">{props.title}</h1>}
      {children}
    </Header>
  );
};

export default MainHeader;
