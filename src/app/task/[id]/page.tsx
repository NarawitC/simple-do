"use client";

import { format } from "date-fns";
import {
  ArrowLeftIcon,
  EditIcon,
  TrashIcon,
  CalendarIcon,
  ClockIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";
import Head from "next/head";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store";


export default function TaskPage() {
  const params = useParams();
  const router = useRouter();
  const taskId = params["id"] as string;

  const tasks = useAppStore.use.tasks();
  const updateTask = useAppStore.use.updateTask();
  const deleteTask = useAppStore.use.deleteTask();
  const toggleTaskCompletion = useAppStore.use.toggleTaskCompletion();

  const task = tasks.find((t) => t.id === taskId);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(task?.title || "");
  const [editDescription, setEditDescription] = useState(
    task?.description || ""
  );
  const [editDueDate, setEditDueDate] = useState<Date | undefined>(
    task?.dueDate
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  if (!task) {
    return (
      <div className="bg-background min-h-screen p-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>
          <Card>
            <CardContent className="flex items-center justify-center py-16">
              <div className="text-center">
                <h2 className="mb-2 text-2xl font-semibold">Task Not Found</h2>
                <p className="text-muted-foreground mb-4">
                  The task you're looking for doesn't exist or has been deleted.
                </p>
                <Button onClick={() => router.push("/")}>
                  Go to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const handleSaveTask = () => {
    if (!editTitle.trim()) return;

    const updates: any = {
      title: editTitle.trim(),
      description: editDescription.trim(),
    };

    if (editDueDate !== undefined) {
      updates.dueDate = editDueDate;
    }

    updateTask(taskId, updates);
    setIsEditDialogOpen(false);
  };

  const handleDeleteTask = () => {
    deleteTask(taskId);
    router.push("/task");
  };

  const handleToggleCompletion = () => {
    toggleTaskCompletion(taskId);
  };

  const timeSinceCreated = () => {
    const now = new Date();
    const created = new Date(task.createdAt);
    const diffInHours = Math.floor(
      (now.getTime() - created.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return format(created, "MMM d, yyyy");
  };

  const isDueSoon = () => {
    if (!task.dueDate) return false;
    const now = new Date();
    const due = new Date(task.dueDate);
    const diffInDays = Math.ceil(
      (due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diffInDays <= 3 && diffInDays >= 0;
  };

  const isOverdue = () => {
    if (!task.dueDate) return false;
    const now = new Date();
    const due = new Date(task.dueDate);
    return due < now && !task.completed;
  };

  return (
    <>
      <Head>
        <title>Task</title>
        <meta name="description" content="Task" />
      </Head>
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/task")}
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Task
          </Button>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={task.completed ? "destructive" : "default"}
              className="text-xs"
              onClick={handleToggleCompletion}
            >
              {task.completed ? (
                <>
                  <XIcon className="mr-2 h-4 w-4" />
                  Mark as Incomplete
                </>
              ) : (
                <>
                  <CheckIcon className="mr-2 h-4 w-4" />
                  Mark as Complete
                </>
              )}
            </Button>

            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <EditIcon className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Task</DialogTitle>
                  <DialogDescription>
                    Make changes to your task here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="edit-title">Title</Label>
                    <Input
                      id="edit-title"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="Enter task title..."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="edit-description">Description</Label>
                    <Textarea
                      id="edit-description"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="Enter task description..."
                      rows={3}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Due Date</Label>
                    <Popover
                      open={isCalendarOpen}
                      onOpenChange={setIsCalendarOpen}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal",
                            !editDueDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {editDueDate
                            ? format(editDueDate, "E d MMM, yyyy")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={editDueDate}
                          onSelect={(date) => {
                            setEditDueDate(date);
                            setIsCalendarOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    {editDueDate && (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          setEditDueDate(task.dueDate);
                          setEditTitle(task.title);
                          setEditDescription(task.description);
                        }}
                        className="h-8 px-2 text-xs"
                      >
                        Reset Data
                      </Button>
                    )}
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    onClick={handleSaveTask}
                    disabled={!editTitle.trim()}
                  >
                    Save Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <TrashIcon className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-1/2">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the task "
                    <span className="text-destructive font-bold">
                      {task.title}
                    </span>
                    ".
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteTask}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Main Task Card */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={handleToggleCompletion}
                    className="mt-1"
                  />
                  <CardTitle
                    className={cn(
                      "text-2xl leading-tight",
                      task.completed && "text-muted-foreground line-through"
                    )}
                  >
                    {task.title}
                  </CardTitle>
                </div>
                <div className="ml-8 flex items-center gap-2">
                  <Badge variant={task.completed ? "default" : "secondary"}>
                    {task.completed ? "Completed" : "In Progress"}
                  </Badge>
                  {task.dueDate && (
                    <Badge
                      variant="outline"
                      className={cn(
                        isOverdue() &&
                          "border-red-500 text-red-700 dark:text-red-300",
                        isDueSoon() &&
                          !isOverdue() &&
                          "border-yellow-500 text-yellow-700 dark:text-yellow-300"
                      )}
                    >
                      <CalendarIcon className="mr-1 h-3 w-3" />
                      Due {format(new Date(task.dueDate), "MMM d, yyyy")}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>

          {task.description && (
            <>
              <Separator />
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                    Description
                  </h3>
                  <CardDescription className="text-base leading-relaxed whitespace-pre-wrap">
                    {task.description}
                  </CardDescription>
                </div>
              </CardContent>
            </>
          )}

          <Separator />

          <CardFooter className="pt-6">
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="text-muted-foreground text-sm font-medium">
                  Created
                </h4>
                <p className="text-sm">
                  {format(new Date(task.createdAt), "PPP 'at' p")}
                </p>
                <p className="text-muted-foreground text-xs">
                  {timeSinceCreated()}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-muted-foreground text-sm font-medium">
                  Last Updated
                </h4>
                <p className="text-sm">
                  {format(new Date(task.updatedAt), "PPP 'at' p")}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-muted-foreground text-sm font-medium">
                  Status
                </h4>
                <div className="flex items-center gap-2">
                  {task.completed ? (
                    <CheckIcon className="h-4 w-4 text-green-500" />
                  ) : (
                    <ClockIcon className="h-4 w-4 text-blue-500" />
                  )}
                  <span className="text-sm">
                    {task.completed ? "Task completed" : "In progress"}
                  </span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
