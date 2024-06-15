'use client'

// src/components/TransactionList.tsx
import React, { useEffect, useState } from 'react'
import { TransactionModel } from '../core/models/Schema'
import { Transaction } from '../core/validations/transactionValidation'

const TransactionList: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        const fetchTransactions = async () => {
            const loadedTransactions = await TransactionModel.select().run()
            setTransactions(loadedTransactions)
        }
        fetchTransactions()
    }, [])

    return (
        <div className='bg-gray-800 text-white p-4'>
            {transactions.map((transaction) => (
                <div
                    key={transaction.id}
                    className='border-b border-gray-700 p-2'
                >
                    {transaction.description} - ${transaction.amount}
                </div>
            ))}
        </div>
    )
}

export default TransactionList
