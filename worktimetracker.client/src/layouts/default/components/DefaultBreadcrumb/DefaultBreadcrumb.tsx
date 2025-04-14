import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { ComponentProps, FC } from "react";
import { Link } from "react-router";
import "./DefaultBreadcrumb.css";

type State = ComponentProps<typeof Breadcrumb>;

const DefaultBreadcrumb: FC<State> = (props) => {
  const { className, ...rest } = props;

  return (
    <Breadcrumb
      itemRender={itemRender}
      {...rest}
      className={`default-breadcrumb ${className}`}
    />
  );
};

export default DefaultBreadcrumb;

function itemRender(route: ItemType) {
  return !route.path ? (
    <span>{route.title}</span>
  ) : (
    <Link to={route.path}>{route.title}</Link>
  );
}
