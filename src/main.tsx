import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App";
import { initMSW } from "./mocks/browser";
import "./styles/main.scss";

async function main() {
  await initMSW();

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

main();
