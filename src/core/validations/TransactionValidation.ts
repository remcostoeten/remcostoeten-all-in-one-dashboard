import { z } from 'zod'

export const TransactionValidation = z.object({
    id: z.string(),
    amount: z.number(),
    description: z.string().optional(),
    date: z.date(),
    category: z.string().optional()
})

export type TransactionType = z.infer<typeof TransactionValidation>
