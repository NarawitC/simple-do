import { create } from "zustand";

import { Task, TaskInput, TaskUpdate } from "@/types/task";

interface TaskStore {
  tasks: Task[];

  // Task actions
  addTask: (task: TaskInput) => void;
  updateTask: (id: string, updates: TaskUpdate) => void;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
  getTasks: () => Task[];
  getTaskById: (id: string) => Task | undefined;
}

const generateId = (): string => {
  return crypto.randomUUID();
};

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],

  addTask: (taskInput: TaskInput) => {
    const newTask: Task = {
      ...taskInput,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    set((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  },

  updateTask: (id: string, updates: TaskUpdate) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task
      ),
    }));
  },

  toggleTaskCompletion: (id: string) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed, updatedAt: new Date() }
          : task
      ),
    }));
  },

  deleteTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },

  getTasks: () => get().tasks,

  getTaskById: (id: string) => {
    return get().tasks.find((task) => task.id === id);
  },
}));
