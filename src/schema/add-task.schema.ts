import { z } from "zod/v4";

export const addTaskSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    dueDate: z.date(),
  })
  .strict();
