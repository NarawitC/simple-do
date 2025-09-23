"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAppStore } from "@/store";
import { AddTaskSheet } from "@/components/custom/add-task-sheet";

export default function Test() {
  const tasks = useAppStore.use.tasks();
  const toggleTaskCompletion = useAppStore.use.toggleTaskCompletion();

  return (
    <div className="container mx-auto">
      <AddTaskSheet />

      {tasks
        .toSorted((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
        .map((task) => (
          <Card key={task.id} className="border-2">
            <CardContent className="flex flex-row justify-between">
              <div>
                <div>Id: {task.id}</div>
                <div>Title: {task.title}</div>
                <div>Description: {task.description}</div>
                <div>Completed: {task.completed.toString()}</div>
              </div>
              <div>
                <section className="flex items-center space-x-2">
                  <Switch
                    className="data-[state=checked]:bg-success"
                    id="toggle-complete-task"
                    onClick={() => toggleTaskCompletion(task.id)}
                  ></Switch>
                  <Label htmlFor="toggle-complete-task">Done</Label>
                </section>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
