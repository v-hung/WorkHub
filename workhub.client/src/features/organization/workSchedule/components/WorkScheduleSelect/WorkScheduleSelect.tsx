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
import { isEmpty } from "@/utils/validate.utils";
import { useWorkSchedules } from "../../hooks/useWorkSchedules";

type State = ComponentProps<typeof Select>;

const WorkScheduleSelect: FC<State> = (props) => {
  const { className, value, ...rest } = props;

  const {
    workSchedulePaginated,
    loading,
    request,
    updateRequest,
    fetchWorkSchedules,
  } = useWorkSchedules();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    if (!isEmpty(value)) {
      fetchWorkSchedules(Array.isArray(value) ? value : [value]).then(
        (data) => {
          setOptions(data.map((v) => ({ label: v.title, value: v.id })));
        }
      );
    }
  }, []);

  useEffect(() => {
    setOptions((prev) => {
      const newOptions = workSchedulePaginated.data.map((item) => ({
        label: item.title,
        value: item.id,
      }));

      return workSchedulePaginated.currentPage === 1
        ? newOptions
        : Array.from(
            new Map(
              [...(prev ?? []), ...newOptions].map((item) => [item.value, item])
            ).values()
          );
    });
  }, [workSchedulePaginated.data]);

  const handleSearch = useCallback(
    debounce((value: string) => {
      updateRequest((request) => ({
        ...request,
        pageNumber: 1,
        where: {
          conditions: [
            {
              column: "title",
              operator: "Contains",
              values: [value],
            },
          ],
        },
      }));
    }, 300),
    [request]
  );

  const handlePopupScroll = useCallback(() => {
    if (workSchedulePaginated.hasNextPage) {
      updateRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, workSchedulePaginated.hasNextPage]);

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

export default WorkScheduleSelect;

export const WorkScheduleSelectMemo = memo(WorkScheduleSelect);
