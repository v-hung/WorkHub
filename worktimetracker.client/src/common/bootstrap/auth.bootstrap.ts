import { useAuthStore } from "@/stores/auth.store";
import { createSuspender } from "../utils/suspender";

export const authBootstrap = createSuspender<void>(
  useAuthStore.getState().load()
);
