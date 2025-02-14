import { Table } from "antd";
import { ComponentProps } from "react";
import "./MainTable.css";

type State<T> = ComponentProps<typeof Table<T>>;

const MainTable = <T,>(props: State<T>) => {
  const {
    className,
    scroll = {
      x: 768,
      y: "auto",
    },
    ...rest
  } = props;

  return (
    <Table
      scroll={scroll}
      {...rest}
      className={`main-table ${className}`}
    ></Table>
  );
};

export default MainTable;
