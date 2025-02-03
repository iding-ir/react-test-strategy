import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

import type { AppStore } from "./store";
import { store } from "./store";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  // Ensure that the store is only initialized once.
  if (!storeRef.current) {
    storeRef.current = store;
  }

  // Ensure that the listeners are only set up once.
  useEffect(() => {
    if (storeRef.current === null) {
      return;
    }

    // Set up the listeners for the store.
    // `return` to clean up the listeners when the component is unmounted.
    return setupListeners(storeRef.current.dispatch);
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
