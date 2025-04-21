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
import { useWorkTimes } from "../../hooks/useWorkTimes";
import { isEmpty } from "@/utils/validate.utils";

type State = ComponentProps<typeof Select>;

const WorkTimeSelect: FC<State> = (props) => {
  const { className, value, ...rest } = props;

  const { workTimePaginated, loading, request, setRequest, fetchWorkTimes } =
    useWorkTimes();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    if (!isEmpty(value)) {
      fetchWorkTimes(Array.isArray(value) ? value : [value]).then((data) => {
        setOptions(data.map((v) => ({ label: v.title, value: v.id })));
      });
    }
  }, []);

  useEffect(() => {
    setOptions((prev) => {
      const newOptions = workTimePaginated.data.map((item) => ({
        label: item.title,
        value: item.id,
      }));

      return workTimePaginated.currentPage === 1
        ? newOptions
        : Array.from(
            new Map(
              [...(prev ?? []), ...newOptions].map((item) => [item.value, item])
            ).values()
          );
    });
  }, [workTimePaginated.data]);

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
    if (workTimePaginated.hasNextPage) {
      setRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, workTimePaginated.hasNextPage]);

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

export default WorkTimeSelect;

export const WorkTimeSelectMemo = memo(WorkTimeSelect);
