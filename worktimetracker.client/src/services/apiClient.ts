import {
  AccountApi,
  UserApi,
  createConfiguration,
  server1,
} from "@/generate-api";
import type { ConfigurationParameters } from "@/generate-api/configuration";
import "whatwg-fetch";
import { FetchHttpLibrary } from "./interceptors";

const baseServer = server1;

const configurationParameters: ConfigurationParameters = {
  baseServer: baseServer,
  httpApi: new FetchHttpLibrary(),
};

export const config = createConfiguration(configurationParameters);
export const configWithRefreshToken = createConfiguration({
  ...configurationParameters,
  httpApi: new FetchHttpLibrary(true),
});

const accountApi = new AccountApi(config);
const accountApiWithRefreshToken = new AccountApi(configWithRefreshToken);
const userApi = new UserApi(configWithRefreshToken);

export { accountApi, accountApiWithRefreshToken, userApi };
