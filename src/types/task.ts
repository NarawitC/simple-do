export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type TaskInput = Omit<
  Task,
  'id' | 'completed' | 'createdAt' | 'updatedAt'
>;
export type TaskUpdate = Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>;
export type TaskFilter = 'ALL' | 'COMPLETED' | 'PENDING';
