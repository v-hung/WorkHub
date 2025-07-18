import { Select, Spin } from "antd";
import { ComponentProps, FC, useRef } from "react";

type State = Omit<ComponentProps<typeof Select>, "onPopupScroll"> & {
  scrollInfiniteCb?: () => void;
  firstOpenDropdown?: () => void;
};

const SelectAsyncScroll: FC<State> = ({
  className,
  options,
  loading = false,
  scrollInfiniteCb,
  firstOpenDropdown,
  ...rest
}) => {
  const isOpened = useRef(false);

  const handleDropdownChange = (open: boolean) => {
    if (open && !isOpened.current && firstOpenDropdown) {
      firstOpenDropdown();
      isOpened.current = true;
    }
  };

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
      onOpenChange={handleDropdownChange}
      notFoundContent={loading ? <Spin size="small" /> : "No data"}
      className={className}
      options={options}
      loading={loading}
      showSearch
      filterOption={false}
      onPopupScroll={handlePopupScroll}
      allowClear={true}
      {...rest}
    />
  );
};

export default SelectAsyncScroll;
