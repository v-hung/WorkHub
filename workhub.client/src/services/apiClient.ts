import {
  AccountApi,
  BioStarApi,
  Configuration,
  DeviceApi,
  DeviceCategoryApi,
  NotificationApi,
  ProjectApi,
  RequestsApi,
  RoleApi,
  TeamApi,
  TimesheetApi,
  UserApi,
  WorkTimeApi,
} from "@/generate-api";
import { createFetchHttp } from "./interceptors";

export const config = new Configuration({
  fetchApi: createFetchHttp(false),
});
export const configWithRefreshToken = new Configuration({
  fetchApi: createFetchHttp(true),
});

const accountApi = new AccountApi(config);
const accountApiWithRefreshToken = new AccountApi(configWithRefreshToken);
const userApi = new UserApi(configWithRefreshToken);
const teamApi = new TeamApi(configWithRefreshToken);
const projectApi = new ProjectApi(configWithRefreshToken);
const workTimeApi = new WorkTimeApi(configWithRefreshToken);
const roleApi = new RoleApi(configWithRefreshToken);
const timesheetApi = new TimesheetApi(configWithRefreshToken);
const deviceApi = new DeviceApi(configWithRefreshToken);
const deviceCategoryApi = new DeviceCategoryApi(configWithRefreshToken);
const requestApi = new RequestsApi(configWithRefreshToken);
const notificationApi = new NotificationApi(configWithRefreshToken);
const bioStarApi = new BioStarApi(configWithRefreshToken);

export {
  accountApi,
  accountApiWithRefreshToken,
  userApi,
  teamApi,
  projectApi,
  workTimeApi,
  roleApi,
  timesheetApi,
  deviceApi,
  deviceCategoryApi,
  requestApi,
  notificationApi,
  bioStarApi,
};
