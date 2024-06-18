'use client'

import {
    TransactionModel,
    Transaction as TransactionType
} from '@/core/@server/models/transaction-model'
import React, { useEffect, useState } from 'react'

const TransactionList: React.FC = () => {
    const [transactions, setTransactions] = useState<TransactionType[]>([])

    useEffect(() => {
        const fetchTransactions = async () => {
            const loadedTransactions: TransactionType[] =
                await TransactionModel.getAll()
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
