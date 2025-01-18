import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App";
import { worker } from "./mocks/browser";
import "./styles/main.scss";

await worker.start({
  serviceWorker: {
    url: "/mockServiceWorker.js",
  },
  // onUnhandledRequest: "warn",
  quiet: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
