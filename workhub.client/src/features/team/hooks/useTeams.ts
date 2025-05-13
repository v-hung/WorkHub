import { getMessageError } from "@/utils/error.utils";
import { TeamDtoPaginated, PagedRequest } from "@/generate-api";
import { teamApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useState } from "react";

export const useTeams = () => {
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

  const [request, setRequest] = useState<PagedRequest>({
    pageNumber: teamPaginated.currentPage,
    pageSize: teamPaginated.pageSize,
    searchConditions: [],
  });

  const fetchPaginatedTeams = async (request: PagedRequest) => {
    setLoading(true);
    try {
      const data = await teamApi.teamSearch({ pagedRequest: request });
      setTeamPaginated(data);
    } catch (e) {
      notification.error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  const updateRequest = useCallback(
    (updater: SetStateAction<PagedRequest>) => {
      const newRequest =
        typeof updater === "function" ? updater(request) : updater;

      setRequest(newRequest);
      fetchPaginatedTeams(newRequest);
    },
    [request]
  );

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
    updateRequest,
  };
};
