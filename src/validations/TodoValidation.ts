import { z } from 'zod';

export const TodoValidation = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
});

export const EditTodoValidation = TodoValidation.extend({
    id: z.number(),
    completed: z.boolean().optional(),
});

export const DeleteTodoValidation = z.object({
    id: z.number(),
});

export const CompleteTodoValidation = z.object({
    id: z.number(),
});