import { Layout } from "antd";
import { ComponentProps, FC } from "react";

const { Content } = Layout;

type State = ComponentProps<typeof Content>;

const MainContent: FC<State> = (props) => {
  const { className, ...rest } = props;
  return <Content {...rest} className={`main-content ${className}`} />;
};

export default MainContent;
