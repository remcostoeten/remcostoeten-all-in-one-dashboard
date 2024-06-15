import React, { useState } from 'react'

const TransactionForm: React.FC = () => {
    const [transaction, setTransaction] = useState<Transaction>({
        id: '',
        amount: 0,
        description: '',
        date: new Date(),
        category: ''
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setTransaction((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (transaction) {
            await TransactionModel.insert(transaction)
            setTransaction({
                id: '',
                amount: 0,
                description: '',
                date: new Date(),
                category: ''
            }) // Reset form after submission
        }
    }

    return (
        <form onSubmit={handleSubmit} className='bg-gray-800 p-4 text-white'>
            <div className='mb-4'>
                <label htmlFor='id' className='block text-sm font-medium'>
                    ID
                </label>
                <input
                    type='text'
                    name='id'
                    value={transaction.id}
                    onChange={handleChange}
                    className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                    placeholder='Enter ID'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='amount' className='block text-sm font-medium'>
                    Amount
                </label>
                <input
                    type='number'
                    name='amount'
                    value={transaction.amount}
                    onChange={handleChange}
                    className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                    placeholder='Enter amount'
                />
            </div>
            <div className='mb-4'>
                <label
                    htmlFor='description'
                    className='block text-sm font-medium'
                >
                    Description
                </label>
                <textarea
                    name='description'
                    value={transaction.description}
                    onChange={handleChange}
                    className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                    placeholder='Enter description'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='date' className='block text-sm font-medium'>
                    Date
                </label>
                <input
                    type='date'
                    name='date'
                    value={transaction.date.toISOString().substring(0, 10)}
                    onChange={handleChange}
                    className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='category' className='block text-sm font-medium'>
                    Category
                </label>
                <input
                    type='text'
                    name='category'
                    value={transaction.category}
                    onChange={handleChange}
                    className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                    placeholder='Enter category'
                />
            </div>
            <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
            >
                Submit
            </button>
        </form>
    )
}

export default TransactionForm
