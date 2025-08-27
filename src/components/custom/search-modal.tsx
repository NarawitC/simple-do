"use client";

import { format } from "date-fns";
import { Clock, Calendar, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useAppStore } from "@/store";
import type { Task } from "@/store";

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const tasks = useAppStore.use.tasks();

  const handleSelect = (taskId: string) => {
    setOpen(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="text-muted-foreground gap-2"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search tasks...</span>
        <kbd className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="sm:max-w-1/2"
      >
        <CommandInput placeholder="Search tasks..." />
        <CommandList>
          <CommandEmpty>No tasks found.</CommandEmpty>
          <CommandGroup heading="Tasks">
            {tasks.map((task: Task) => (
              <CommandItem
                key={task.id}
                value={task.id}
                onSelect={() => handleSelect(task.id)}
              >
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>
                      <span
                        className={`${task.completed ? "text-muted-foreground line-through" : ""}`}
                      >
                        {task.title}
                      </span>
                      {task.completed && (
                        <span className="text-success bg-success/20 ml-1 rounded-full px-2 py-0.5 text-xs">
                          Completed
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1">
                      <Clock />
                      {format(task.createdAt, "MMM d, yyyy")}
                    </div>
                    {task.dueDate && (
                      <div className="text-warning flex items-center gap-1">
                        <Calendar />
                        Due {format(task.dueDate, "MMM d")}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
