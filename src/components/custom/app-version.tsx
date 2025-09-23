"use client";

import { useAppStore } from "@/store";

export function AppVersion() {
  console.log("🆕 AppVersion page");
  // const { appVersion } = useAppStore();
  // const appVersion = useAppStore((state) => state.appVersion);
  const appVersion = useAppStore.use.appVersion();
  return <div>AppVersion: {appVersion}</div>;
}
