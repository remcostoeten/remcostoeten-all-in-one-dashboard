// src/core/validations/transactionValidation.ts
import { z } from 'zod'

export const transactionSchema = z.object({
    id: z.string(),
    amount: z.number(),
    description: z.string(),
    date: z.date(),
    category: z.string()
})

export type TransactionType = z.infer<typeof transactionSchema>
