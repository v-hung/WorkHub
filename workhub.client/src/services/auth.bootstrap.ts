import { useAuthStore } from "@/stores/auth.store";
import { createSuspender } from "../utils/suspender";
import i18n from "../utils/i18n";
import { LoginRequest } from "@/generate-api";

export const authBootstrap = createSuspender(
  (async () => {
    if (!i18n.isInitialized) {
      await i18n.init();
    }
    return await useAuthStore.getState().load();
  })()
);

export const authBootstrapLogout = async (callback?: () => void) => {
  await useAuthStore.getState().logout(() => {
    authBootstrap.setResult({ user: undefined, permissions: [] });

    if (callback) {
      callback();
    }
  });
};

export const authBootstrapLogin = async (
  credentials: LoginRequest,
  callback?: () => void
) => {
  await useAuthStore.getState().login(credentials, () => {
    authBootstrap.setResult({ user: undefined, permissions: [] });

    if (callback) {
      callback();
    }
  });
};
