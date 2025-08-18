"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAppStore } from "@/store";

export default function Test() {
  const tasks = useAppStore.use.tasks();
  const addTask = useAppStore.use.addTask();
  const toggleTaskCompletion = useAppStore.use.toggleTaskCompletion();

  return (
    <div className="mx-auto">
      <Button
        onClick={() =>
          addTask({
            title: "new task title",
            description: "new task description",
            completed: false,
          })
        }
      >
        Add task
      </Button>
      {tasks.map((task) => (
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
