"use client";

import { useAppStore } from "@/store";

export function Count() {
  console.log("🔄 Count page");
  // const { count } = useAppStore();
  // const count = useAppStore((state) => state.count);
  const count = useAppStore.use.count();
  return <div>Count: {count}</div>;
}
