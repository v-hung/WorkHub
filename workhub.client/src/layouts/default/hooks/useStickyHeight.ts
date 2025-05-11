import { useEffect } from "react";

export const useStickyHeight = (propertyName: string, height: number) => {
  useEffect(() => {
    const layout: HTMLElement | null =
      document.querySelector(".layout--default");

    if (layout) {
      layout.style.setProperty(propertyName, height + "px");
    }

    return () => {
      if (layout) {
        layout.style.setProperty(propertyName, "0px");
      }
    };
  }, []);
};
