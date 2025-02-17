import {
  LoginRequest,
  Permission,
  UserDto,
  UserPosition,
  UserStatus,
} from "@/generate-api";
import { accountApi } from "@/services/apiClient";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {} from "react-router";

type AuthState = {
  user: UserDto | null;
  permissions: Permission[];
  token: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  load: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    immer((set) => ({
      user: null,
      token: null,
      permissions: [],

      login: async (credentials) => {
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        // set({
        //   user: USER,
        // });

        const response = await accountApi.apiIdentityLoginPost(credentials);
        set({ user: response.user, token: response.token });
      },

      logout: () => set({ user: null, token: null }),

      load: async () => {
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        // set({
        //   user: USER
        // });

        try {
          const user = await accountApi.apiIdentityCurrentUserGet();

          set({ user });
        } catch (error) {
          set({ user: null, token: null });
        }
      },
    })),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token }),
    }
  )
);

const USER = {
  id: "1",
  fullName: "Nguyễn Việt Hùng",
  email: "hungnv@wbcvn.vn",
  createdAt: new Date(),
  updatedAt: new Date(),
  isFirstLogin: false,
  leaveHours: 0,
  userPosition: UserPosition.Developer,
  userStatus: UserStatus.Active,
};
