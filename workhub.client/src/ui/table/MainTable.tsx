import { Table } from "antd";
import { ComponentProps } from "react";
import "./MainTable.css";

type State<T> = ComponentProps<typeof Table<T>>;

const MainTable = <T,>(props: State<T>) => {
  const {
    className,
    scroll = {
      x: 1280,
      y: "auto",
    },
    ...rest
  } = props;

  return (
    <Table
      scroll={scroll}
      rowKey="id"
      {...rest}
      className={`main-table ${className}`}
    ></Table>
  );
};

export default MainTable;
