import { debounce } from "@/common/utils/common.utils";
import { Select, Spin } from "antd";
import { ComponentProps, FC, useCallback, useEffect } from "react";

type State = ComponentProps<typeof Select> & {
  initCb?: () => void;
  searchCb?: (value: string) => void;
  scrollInfiniteCb?: () => void;
};

const SelectApi: FC<State> = ({
  className,
  options,
  initCb,
  loading = false,
  searchCb,
  scrollInfiniteCb,
  ...rest
}) => {
  // Fetch dữ liệu ban đầu
  useEffect(() => {
    if (initCb) {
      initCb();
    }
  }, [initCb]);

  // Xử lý tìm kiếm (debounced)
  const handleSearch = useCallback(
    debounce((value: string) => {
      if (!value || !searchCb) return;
      searchCb(value);
    }, 300),
    [searchCb]
  );

  // Xử lý scroll để load thêm dữ liệu
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
    <>
      <Select
        {...rest}
        className={className}
        options={options}
        loading={loading}
        showSearch
        filterOption={false}
        onSearch={handleSearch}
        dropdownRender={(menu) => (loading ? <Spin>{menu}</Spin> : menu)}
        onPopupScroll={handlePopupScroll}
      />
      {JSON.stringify(options)}
    </>
  );
};

export default SelectApi;
