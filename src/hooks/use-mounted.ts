"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hydration-safe mount hook using useSyncExternalStore.
 * Returns false on the server and true once mounted on the client,
 * avoiding cascading renders and satisfying React 19 lint rules.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
