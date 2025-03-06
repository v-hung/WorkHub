import { Select, SelectProps } from "antd";
import { ComponentProps, FC, useCallback, useEffect, useState } from "react";
import SelectAsyncScroll from "@/ui/form/SelectAsyncScroll";
import { debounce } from "@/common/utils/common.utils";
import { useWorkTimes } from "../../hooks/useWorkTimes";

type State = ComponentProps<typeof Select>;

const WorkTimeSelect: FC<State> = (props) => {
  const { className, ...rest } = props;

  const { workTimePaginated, loading, request, setRequest } = useWorkTimes();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    setRequest((request) => ({
      ...request,
      pageNumber: 1,
    }));
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

  return (
    <SelectAsyncScroll
      {...rest}
      className={className}
      options={options}
      loading={loading}
      onSearch={handleSearch}
      scrollInfiniteCb={handlePopupScroll}
    />
  );
};

export default WorkTimeSelect;
