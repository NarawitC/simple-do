"use client";

import { useAppStore } from "@/store";

export function IsOnline() {
  console.log("🌐 IsOnline page");
  const { isOnline } = useAppStore();
  // const isOnline = useAppStore((state) => state.isOnline);
  // const isOnline = useAppStore.use.isOnline();
  return <div>isOnline: {isOnline}</div>;
}
