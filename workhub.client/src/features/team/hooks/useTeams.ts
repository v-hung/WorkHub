import { getMessageError } from "@/utils/error.utils";
import { TeamDtoPaginated, TeamSearchRequest } from "@/generate-api";
import { teamApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useTeams = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  // GET LIST team
  // =============

  const [teamPaginated, setTeamPaginated] = useState<TeamDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 25,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const [request, setRequest] = useState<TeamSearchRequest>({
    pageNumber: teamPaginated.currentPage,
    pageSize: teamPaginated.pageSize,
    searchString: "",
  });

  const fetchPaginatedTeams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await teamApi.teamSearch(request);
      setTeamPaginated(data);
    } catch (e) {
      notification.error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    fetchPaginatedTeams();
  }, [request]);

  // GET All
  // ==============

  const fetchTeams = async (ids: number[]) => {
    setLoading(true);
    try {
      return await teamApi.teamGetAll({ ids });
    } catch (e) {
      notification.error({
        message: await getMessageError(e),
      });
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    teamPaginated,
    loading,
    fetchPaginatedTeams,
    request,
    setRequest,
    fetchTeams,
  };
};
