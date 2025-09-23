import type { TaskSlice } from "./slices/task";

export type AppStore = TaskSlice & {
  count: number;
  appVersion: string;
  lastSync: null;
  isOnline: boolean;
  addCount: () => void;
  resetApp: () => void;
};
