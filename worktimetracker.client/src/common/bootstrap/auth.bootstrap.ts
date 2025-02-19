import { useAuthStore } from "@/stores/auth.store";
import { createSuspender } from "../utils/suspender";
import i18n from "../utils/i18n";

export const authBootstrap = createSuspender(
  (async () => {
    if (!i18n.isInitialized) {
      await i18n.init();
    }
    await useAuthStore.getState().load();
  })()
);
