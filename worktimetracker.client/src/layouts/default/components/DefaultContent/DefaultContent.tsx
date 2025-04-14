import { Layout } from "antd";
import { ComponentProps, FC } from "react";
import "./DefaultContent.css";

const { Content } = Layout;

type State = ComponentProps<typeof Content>;

const DefaultContent: FC<State> = (props) => {
  const { className, ...rest } = props;
  return <Content {...rest} className={`default-content ${className}`} />;
};

export default DefaultContent;
