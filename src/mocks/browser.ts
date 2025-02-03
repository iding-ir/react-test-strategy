import { setupWorker } from "msw/browser";

import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

export async function initMSW() {
  if (typeof window !== "undefined") {
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
      // onUnhandledRequest: "warn",
      quiet: true,
    });
  }
}
