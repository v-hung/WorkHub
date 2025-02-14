import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import App from "./App";
import router from "./router";
import "./index.css";

import "./common/utils/i18n";

createRoot(document.getElementById("root")!).render(
  <App>
    <RouterProvider router={router} />
  </App>
);
