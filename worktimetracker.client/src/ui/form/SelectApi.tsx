import { Select, SelectProps } from "antd";
import { ComponentProps, FC, useEffect, useState } from "react";

type State = ComponentProps<typeof Select> & {
  promise: Promise<SelectProps["options"]>;
};

const SelectApi: FC<State> = (props) => {
  const { className, ...rest } = props;

  const [data, setData] = useState<SelectProps["options"]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    props.promise.then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <Select
      {...rest}
      className={`${className}`}
      options={data}
      loading={loading}
    />
  );
};

export default SelectApi;
