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
import { useDevices } from "../../hooks/useDevices";
import { isEmpty } from "@/utils/validate.utils";

type State = ComponentProps<typeof Select>;

const DeviceSelect: FC<State> = (props) => {
  const { className, value, ...rest } = props;

  const { devicePaginated, loading, request, updateRequest, fetchDevices } =
    useDevices();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    if (!isEmpty(value)) {
      fetchDevices(Array.isArray(value) ? value : [value]).then((data) => {
        setOptions(data.map((v) => ({ label: v.name, value: v.id })));
      });
    }
  }, []);

  useEffect(() => {
    setOptions((prev) => {
      const newOptions = devicePaginated.data.map((item) => ({
        label: item.name,
        value: item.id,
      }));

      return devicePaginated.currentPage === 1
        ? newOptions
        : Array.from(
            new Map(
              [...(prev ?? []), ...newOptions].map((item) => [item.value, item])
            ).values()
          );
    });
  }, [devicePaginated.data]);

  const handleSearch = useCallback(
    debounce((value: string) => {
      updateRequest((request) => ({
        ...request,
        pageNumber: 1,
        searchConditions: [
          {
            column: "name",
            operator: "Contains",
            values: [value],
          },
        ],
      }));
    }, 300),
    [request]
  );

  const handlePopupScroll = useCallback(() => {
    if (devicePaginated.hasNextPage) {
      updateRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, devicePaginated.hasNextPage]);

  const firstOpenDropdown = () => {
    updateRequest((request) => ({
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

export default DeviceSelect;

export const DeviceSelectMemo = memo(DeviceSelect);
