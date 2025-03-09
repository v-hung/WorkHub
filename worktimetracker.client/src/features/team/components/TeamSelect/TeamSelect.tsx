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
import { debounce } from "@/common/utils/common.utils";
import { useTeams } from "../../hooks/useTeams";

type State = ComponentProps<typeof Select>;

const TeamSelect: FC<State> = (props) => {
  const { className, ...rest } = props;

  const { teamPaginated, loading, request, setRequest } = useTeams();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    setRequest((request) => ({
      ...request,
      pageNumber: 1,
    }));
  }, []);

  useEffect(() => {
    setOptions((prev) => {
      const newOptions = teamPaginated.data.map((item) => ({
        label: item.name,
        value: item.id,
      }));

      return teamPaginated.currentPage === 1
        ? newOptions
        : Array.from(
            new Map(
              [...(prev ?? []), ...newOptions].map((item) => [item.value, item])
            ).values()
          );
    });
  }, [teamPaginated.data]);

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
    if (teamPaginated.hasNextPage) {
      setRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, teamPaginated.hasNextPage]);

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

export default TeamSelect;

export const TeamSelectMemo = memo(TeamSelect);
