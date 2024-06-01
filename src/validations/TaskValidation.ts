import { z } from 'zod';

export const TaskValidation = z.object({
  title: z.string().min(1),
  completed: z.boolean(),
});

export const EditTaskValidation = z.object({
  id: z.coerce.number(),
  title: z.string().min(1),
  completed: z.boolean(),
});

export const DeleteTaskValidation = z.object({
  id: z.coerce.number(),
});
