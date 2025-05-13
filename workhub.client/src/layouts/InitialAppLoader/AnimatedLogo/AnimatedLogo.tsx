import { useEffect, useState, type FC, type HTMLAttributes } from "react";
import "./AnimatedLogo.css";

type State = HTMLAttributes<HTMLDivElement>;

const AnimatedLogo: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const [isInfinite, setIsInfinite] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInfinite(true);
    }, 1600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div {...rest} className={`animated-logo ${className}`}>
      <img
        src="/logo.png"
        alt="Logo"
        className={`logo-animate ${isInfinite ? "infinite" : ""}`}
      />
    </div>
  );
};

export default AnimatedLogo;
