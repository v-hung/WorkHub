import { Select, SelectProps, Spin } from "antd";
import { ComponentProps, FC, useCallback, useEffect, useState } from "react";
import { useTeams } from "../../hooks/useTeams";
import { debounce } from "@/common/utils/common.utils";
import SelectApi from "@/ui/form/SelectApi";

type State = ComponentProps<typeof Select>;

const TeamSelect: FC<State> = (props) => {
  const { className, ...rest } = props;

  const { fetchTeams, loading, setRequest } = useTeams();
  const [options, setOptions] = useState<SelectProps["options"]>([]);
  // const [requestType, setRequestType] = useState<"search" | "scroll">("search");

  useEffect(() => {
    fetchTeams().then(v => setOptions(
			v?.data.map((item) => ({
				label: item.name,
				value: item.id,
			}))
		))
  }, []);

	const fetchTeams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await teamApi.teamGetAll(
        request.pageNumber,
        request.pageSize,
        request.searchString
      );
      return data;
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  const handleSearch = () => {
		setRequest((r) => ({ ...r, searchString: value }));
		fetchTeams().then(v => setOptions(
			v?.data.map((item) => ({
				label: item.name,
				value: item.id,
			}))
	}

  const handlePopupScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (
      target.scrollTop + target.offsetHeight === target.scrollHeight &&
      !loading &&
      teams.hasNextPage
    ) {
      setRequestType("scroll");
      setRequest((r) => ({ ...r, pageNumber: r.pageNumber + 1 }));
    }
  };

  return (
    <SelectApi
      {...rest}
      className={`${className}`}
      options={options}
      loading={loading}
      initCb
			searchCb
			scrollInfiniteCb
    />
  );
};

export default TeamSelect;
