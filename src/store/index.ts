import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createTaskSlice } from "./slices/task";
import type { AppStore } from "./types";

export type { Task, TaskInput, TaskUpdate, TaskFilter } from "@/types/task";

import { StoreApi, UseBoundStore } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export const useAppStoreBase = create<AppStore>()(
  devtools(
    persist(
      immer((set, get, store) => ({
        count: 1,
        appVersion: "1.0.0",
        lastSync: null,
        isOnline: true,
        // Combine all slices
        ...createTaskSlice(set, get, store),

        addCount: () =>
          set((state) => {
            state.count++;
          }),

        resetApp: () =>
          set((state) => {
            // Reset all state
            state.tasks = [];
          }),
      })),
      {
        name: "app-storage",
        partialize: (state) => ({
          // Only persist certain parts
          tasks: state.tasks,
        }),
        storage: {
          getItem: (name) => {
            const str = localStorage.getItem(name);
            if (!str) return null;

            const parsed = JSON.parse(str);
            // Convert ISO strings back to Date objects
            if (parsed.state?.tasks) {
              parsed.state.tasks = parsed.state.tasks.map((task: any) => ({
                ...task,
                createdAt: new Date(task.createdAt),
                updatedAt: new Date(task.updatedAt),
                dueDate: new Date(task.dueDate),
              }));
            }
            return parsed;
          },
          setItem: (name, value) => {
            localStorage.setItem(name, JSON.stringify(value));
          },
          removeItem: (name) => {
            localStorage.removeItem(name);
          },
        },
      }
    ),
    { name: "app-store" }
  )
);

export const useAppStore = createSelectors(useAppStoreBase);
