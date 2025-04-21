import { Select, SelectProps } from "antd";
import {
  ComponentProps,
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import SelectAsyncScroll from "@/ui/form/SelectAsyncScroll";
import { debounce } from "@/utils/common.utils";
import { useDeviceCategories } from "../../hooks/useDeviceCategories";
import { isEmpty } from "@/utils/validate.utils";

type State = ComponentProps<typeof Select>;

const DeviceCategorySelect: FC<State> = (props) => {
  const { className, value, ...rest } = props;

  const {
    deviceCategoryPaginated,
    loading,
    request,
    setRequest,
    fetchDeviceCategories,
  } = useDeviceCategories();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    if (!isEmpty(value)) {
      fetchDeviceCategories(Array.isArray(value) ? value : [value]).then(
        (data) => {
          setOptions(data.map((v) => ({ label: v.name, value: v.id })));
        }
      );
    }
  }, []);

  useEffect(() => {
    setOptions((prev) => {
      const newOptions = deviceCategoryPaginated.data.map((item) => ({
        label: item.name,
        value: item.id,
      }));

      return deviceCategoryPaginated.currentPage === 1
        ? newOptions
        : Array.from(
            new Map(
              [...(prev ?? []), ...newOptions].map((item) => [item.value, item])
            ).values()
          );
    });
  }, [deviceCategoryPaginated.data]);

  const handleSearch = useCallback(
    debounce((value: string) => {
      setRequest((request) => ({
        ...request,
        pageNumber: 1,
        searchString: value,
      }));
    }, 300),
    [request]
  );

  const handlePopupScroll = useCallback(() => {
    if (deviceCategoryPaginated.hasNextPage) {
      setRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, deviceCategoryPaginated.hasNextPage]);

  const firstOpenDropdown = () => {
    setRequest((request) => ({
      ...request,
      pageNumber: 1,
    }));
  };

  return (
    <SelectAsyncScroll
      value={value}
      className={className}
      options={options}
      loading={loading}
      onSearch={handleSearch}
      scrollInfiniteCb={handlePopupScroll}
      firstOpenDropdown={firstOpenDropdown}
      {...rest}
    />
  );
};

export default DeviceCategorySelect;

export const DeviceCategorySelectMemo = memo(DeviceCategorySelect);
