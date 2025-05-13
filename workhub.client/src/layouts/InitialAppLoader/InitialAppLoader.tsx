import type { FC, HTMLAttributes } from "react";
import AnimatedLogo from "./AnimatedLogo/AnimatedLogo";

type State = HTMLAttributes<HTMLDivElement>;

const InitialAppLoader: FC<State> = () => {
  return <AnimatedLogo />;
};

export default InitialAppLoader;
