import { StateCreator } from "zustand";
import { Task, TaskInput, TaskUpdate } from "@/types/task";
import type { AppStore } from "../types";

const generateId = (): string => {
  return crypto.randomUUID();
};

export interface TaskSlice {
  tasks: Task[];
  addTask: (taskInput: TaskInput) => void;
  updateTask: (id: string, updates: TaskUpdate) => void;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
  getTasks: () => Task[];
  getTaskById: (id: string) => Task | undefined;
}

export const createTaskSlice: StateCreator<
  AppStore,
  [
    ["zustand/devtools", never],
    ["zustand/persist", unknown],
    ["zustand/immer", never],
  ],
  [],
  TaskSlice
> = (set, get) => ({
  tasks: [] as Task[],

  addTask: (taskInput: TaskInput) => {
    // Basic validation
    if (!taskInput.title.trim()) {
      throw new Error("Task title cannot be empty");
    }

    const newTask: Task = {
      id: generateId(),
      ...taskInput,
      title: taskInput.title.trim(),
      description: taskInput.description.trim(),
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    set((state) => {
      state.tasks.push(newTask);
    });
  },

  updateTask: (id: string, updates: TaskUpdate) => {
    set((state) => {
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        Object.assign(task, updates, {
          updatedAt: new Date().toISOString(),
        });
      }
    });
  },

  toggleTaskCompletion: (id: string) => {
    set((state) => {
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
        task.updatedAt = new Date();
      }
    });
  },

  deleteTask: (id: string) => {
    set((state) => {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    });
  },

  getTasks: () => {
    return get().tasks;
  },

  getTaskById: (id: string) => {
    return get().tasks.find((task) => task.id === id);
  },
});
