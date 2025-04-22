import {
  LoginRequest,
  Permission,
  UserDto,
  UserPosition,
  UserStatus,
  WorkTimeDto,
} from "@/generate-api";
import { accountApi, accountApiWithRefreshToken } from "@/services/apiClient";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {} from "react-router";
import { wrapPromise } from "@/utils/promise";

export type LoadResponse = {
  user: UserDto | undefined;
  permissions: Permission[];
};

type AuthStoreState = {
  user: UserDto | null;
  permissions: Permission[];
  login: (credentials: LoginRequest, callback?: () => void) => Promise<void>;
  logout: (callback?: () => void) => Promise<void>;
  load: () => Promise<LoadResponse>;
};

export const useAuthStore = create<AuthStoreState>()(
  immer((set) => ({
    user: null,
    permissions: [],

    login: async (credentials, callback) => {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // set({
      //   user: USER,
      // });

      await wrapPromise(() =>
        accountApi.accountLogin(credentials).then(async (response) => {
          if (callback) {
            callback();
          }
          set({ user: response.user });
        })
      );
    },

    logout: async (callback) => {
      await wrapPromise(() =>
        accountApi.accountLogout().then(async () => {
          if (callback) {
            callback();
          }
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
        const [user, rawPermissions] = await Promise.all([
          accountApiWithRefreshToken.accountGetCurrentUser(),
          accountApiWithRefreshToken.accountGetPermissions(),
        ]);

        const permissions: Permission[] = rawPermissions.map(
          (p) => p as Permission
        );

        set({ user, permissions });

        return { user, permissions };
      } catch (error) {
        return { user: undefined, permissions: [] };
      }
    },
  }))
);

const USER: UserDto = {
  id: "1",
  fullName: "Nguyễn Việt Hùng",
  email: "hungnv@wbcvn.vn",
  createdAt: new Date(),
  updatedAt: new Date(),
  isFirstLogin: false,
  userPosition: UserPosition.Developer,
  userStatus: UserStatus.Active,
  remainingLeaveMinutes: 480,
  workTime: new WorkTimeDto(),
};
