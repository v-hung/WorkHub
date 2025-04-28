import type { FC, HTMLAttributes } from "react";
import styles from "./PageLoading.module.css";
import { Spin } from "antd";

type State = HTMLAttributes<HTMLDivElement>;

const PageLoading: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <div {...rest} className={`${styles.loading} ${className}`}>
      <Spin />
    </div>
  );
};

export default PageLoading;
