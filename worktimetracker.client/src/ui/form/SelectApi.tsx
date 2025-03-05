import { Select, Spin } from "antd";
import { ComponentProps, FC } from "react";

type State = Omit<ComponentProps<typeof Select>, "onPopupScroll"> & {
  scrollInfiniteCb?: () => void;
};

const SelectApi: FC<State> = ({
  className,
  options,
  loading = false,
  scrollInfiniteCb,
  ...rest
}) => {
  const handlePopupScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!scrollInfiniteCb) return;

    const target = e.target as HTMLDivElement;
    if (
      target.scrollTop + target.offsetHeight === target.scrollHeight &&
      !loading
    ) {
      scrollInfiniteCb();
    }
  };

  return (
    <Select
      {...rest}
      className={className}
      options={options}
      loading={loading}
      showSearch
      filterOption={false}
      notFoundContent={loading ? <Spin size="small" /> : "No data"}
      onPopupScroll={handlePopupScroll}
    />
  );
};

export default SelectApi;
