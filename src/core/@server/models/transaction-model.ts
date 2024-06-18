import { db } from '@/core/libs/DB'
import { transactionSchema } from '@/core/models/Schema'

export const TransactionModel = {
    async getAll() {
        return db.select().from(transactionSchema).all()
    }
}

export type Transaction = {
    id: string
    description: string
    amount: number
    date: Date
    category: string
    // Add any other properties that are required
}
