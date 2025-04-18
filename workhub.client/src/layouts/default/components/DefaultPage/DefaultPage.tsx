import { Layout } from "antd";
import {
  useEffect,
  useRef,
  useState,
  type FC,
  type HTMLAttributes,
} from "react";
import "./DefaultPage.css";
import { debounce } from "@/common/utils/common.utils";

type State = HTMLAttributes<HTMLDivElement> & {
  pageClassName?: string;
  showScrollIndicator?: boolean;
};

const DefaultPage: FC<State> = (props) => {
  const {
    className = "",
    pageClassName = "",
    showScrollIndicator = true,
    children,
    ...rest
  } = props;

  const layoutRef = useRef<HTMLDivElement | null>(null);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const el = layoutRef.current;
    if (!el) return;

    const onScroll = debounce(() => {
      const isScrolled = el.scrollTop > 24;
      setShowIndicator(isScrolled);
    }, 100);

    el.addEventListener("scroll", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      onScroll.cancel();
    };
  }, []);

  return (
    <Layout
      {...rest}
      className={`default-page ${showIndicator ? "scrolled" : ""} ${className}`}
      ref={layoutRef}
    >
      <div className={`default-page__container ${pageClassName}`}>
        {children}
      </div>
    </Layout>
  );
};

export default DefaultPage;
