import { z } from "zod";

export const TaskValidation = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  link: z.string().optional(),
  username: z.string().min(1, "Username is required"),
});

export const EditTaskValidation = TaskValidation.extend({
  id: z.number(),
  completed: z.boolean(),
});

export const DeleteTaskValidation = z.object({
  id: z.number(),
});
