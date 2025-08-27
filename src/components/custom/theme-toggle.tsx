"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function SelectedTheme({ theme }: { theme: string | undefined }) {
  const className = "h-[1.2rem] w-[1.2rem]";
  switch (theme) {
    case "light":
      return <Sun className={className}></Sun>;
    case "dark":
      return <Moon className={className}></Moon>;
    case "system":
      return <Monitor className={className}></Monitor>;

    default:
      return <Monitor className={className}></Monitor>;
  }
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  console.log("theme", theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SelectedTheme theme={theme}></SelectedTheme>
          <div className="sr-only">Toggle theme</div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
