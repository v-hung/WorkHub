import { Layout } from "antd";
import { useRef, type FC, type HTMLAttributes } from "react";
import "./DefaultPage.css";

type State = HTMLAttributes<HTMLDivElement> & {
  pageClassName?: string;
};

const DefaultPage: FC<State> = (props) => {
  const { className = "", pageClassName = "", children, ...rest } = props;

  const pageContainerEl = useRef<HTMLElement | null>(null);

  return (
    <Layout {...rest} className={`default-page ${className}`}>
      <Layout
        ref={pageContainerEl}
        className={`default-page__container ${pageClassName}`}
      >
        {children}
      </Layout>
    </Layout>
  );
};

export default DefaultPage;
