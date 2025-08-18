"use client";
import { AppVersion } from "@/components/app-version";
import { Count } from "@/components/count";
import { IsOnline } from "@/components/is-online";
import { Button } from "@/components/ui/button";
import { useAppStore, useAppStoreBase } from "@/store";

export default function Test() {
  console.log("🧪 Test page");
  const addCount = useAppStore.use.addCount();
  // const { addCount } = useAppStoreBase();

  return (
    <div className="mx-auto">
      <Button onClick={() => addCount()}>Add Count</Button>
      <Count></Count>
      <AppVersion></AppVersion>
      <IsOnline></IsOnline>
    </div>
  );
}
