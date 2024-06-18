'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import React from 'react'

import { useTranslations } from 'next-intl'
import { TransactionValidation } from '@/core/validations/TransactionValidation'
import type { Transaction } from '@libsql/client'

interface TransactionFormProps {
    transaction?: Transaction
    onValid?: (data: any) => Promise<void>
}

const TransactionForm = (props: TransactionFormProps) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm<z.infer<typeof TransactionValidation>>({
        resolver: zodResolver(TransactionValidation),
        defaultValues: {
            id: '',
            amount: 0,
            description: '',
            date: new Date(),
            category: ''
        }
    })
    const router = useRouter()
    const t = useTranslations('GuestbookForm')

    const handleCreate = handleSubmit(async (data) => {
        await props.onValid(data)

        reset()
        router.refresh()
    })

    return (
        <form onSubmit={handleCreate} className='bg-gray-800 p-4 text-white'>
            <div className='mb-4'>
                <label htmlFor='id' className='block text-sm font-medium'>
                    ID
                    <input
                        type='text'
                        id='id'
                        {...register('id')}
                        className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                        placeholder='Enter ID'
                    />
                </label>
                {errors.id?.message && (
                    <div className='my-2 text-xs italic text-red-500'>
                        {errors.id?.message}
                    </div>
                )}
            </div>
            <div className='mb-4'>
                <label htmlFor='amount' className='block text-sm font-medium'>
                    Amount
                    <input
                        type='number'
                        id='amount'
                        {...register('amount')}
                        className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                        placeholder='Enter Amount'
                    />
                </label>
                {errors.amount?.message && (
                    <div className='my-2 text-xs italic text-red-500'>
                        {errors.amount?.message}
                    </div>
                )}
            </div>
            <div className='mb-4'>
                <label
                    htmlFor='description'
                    className='block text-sm font-medium'
                >
                    Description
                    <textarea
                        id='description'
                        {...register('description')}
                        className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                        placeholder='Enter Description'
                    />
                </label>
                {errors.description?.message && (
                    <div className='my-2 text-xs italic text-red-500'>
                        {errors.description?.message}
                    </div>
                )}
            </div>
            <div className='mb-4'>
                <label htmlFor='date' className='block text-sm font-medium'>
                    Date
                    <input
                        type='date'
                        id='date'
                        {...register('date')}
                        className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                    />
                </label>
                {errors.date?.message && (
                    <div className='my-2 text-xs italic text-red-500'>
                        {errors.date?.message}
                    </div>
                )}
            </div>
            <div className='mb-4'>
                <label htmlFor='category' className='block text-sm font-medium'>
                    Category
                    <input
                        type='text'
                        id='category'
                        {...register('category')}
                        className='mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md'
                        placeholder='Enter Category'
                    />
                </label>
                {errors.category?.message && (
                    <div className='my-2 text-xs italic text-red-500'>
                        {errors.category?.message}
                    </div>
                )}
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
