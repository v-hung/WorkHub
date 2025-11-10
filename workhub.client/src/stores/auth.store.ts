import {
  LoginRequest,
  Permission,
  UserDto,
  UserPosition,
  UserStatus,
  WorkScheduleDtoFromJSON,
} from "@/generate-api";
import { accountApi, accountApiWithRefreshToken } from "@/services/apiClient";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {} from "react-router";
import { wrapPromise } from "@/utils/promise";

export type LoadResponse = {
  user: UserDto | null;
  permissions: Permission[];
};

type AuthStoreState = {
  isFirstLoaded: boolean;
  user: UserDto | null;
  permissions: Permission[];
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  load: () => Promise<LoadResponse>;
};

export const useAuthStore = create<AuthStoreState>()(
  immer((set, get) => ({
    isFirstLoaded: false,
    user: null,
    permissions: [],

    login: async (credentials) => {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // set({
      //   user: USER,
      // });

      const user = await accountApi
        .accountLogin({ loginRequest: credentials })
        .then((res) => res.user);

      const rawPermissions = await accountApi.accountGetPermissions();

      const permissions: Permission[] = rawPermissions.map(
        (p) => p as Permission
      );

      set({ user, permissions, isFirstLoaded: true });
    },

    logout: async () => {
      await wrapPromise(() =>
        accountApi.accountLogout().then(async () => {
          set({ user: null });
        })
      );
    },

    load: async () => {
      // await new Promise((resolve, reject) => setTimeout(resolve, 300));
      // set({
      //   user: USER,
      // });
      // return USER;

      try {
        if (get().isFirstLoaded) {
          return { user: get().user, permissions: get().permissions };
        }

        const user = await accountApiWithRefreshToken.accountGetCurrentUser();

        const rawPermissions = await accountApi.accountGetPermissions();

        const permissions: Permission[] = rawPermissions.map(
          (p) => p as Permission
        );

        set({ user, permissions, isFirstLoaded: true });

        return { user, permissions };
      } catch (error) {
        set({ isFirstLoaded: true });
        return { user: null, permissions: [] };
      }
    },
  }))
);

const USER: UserDto = {
  id: "1",
  fullName: "Nguyễn Việt Hùng",
  userName: "hungnv@wbcvn.vn",
  email: "hungnv@wbcvn.vn",
  createdAt: new Date(),
  updatedAt: new Date(),
  isFirstLogin: false,
  userPosition: UserPosition.Developer,
  userStatus: UserStatus.Active,
  remainingLeaveMinutes: 480,
  workSchedule: WorkScheduleDtoFromJSON({}),
};
