import React from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

const Dashboard: React.FC = () => {
    return (
        <div className='bg-gray-900 min-h-screen p-8'>
            <h1 className='text-white text-2xl mb-4'>Finance Dashboard</h1>
            <TransactionForm />
            <TransactionList />
        </div>
    )
}

export default Dashboard
