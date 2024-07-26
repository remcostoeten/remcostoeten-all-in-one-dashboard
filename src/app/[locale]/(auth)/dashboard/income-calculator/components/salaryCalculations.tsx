// src/components/salary-calculator/SavedCalculations.tsx

import React from 'react'
import { useUser } from '@clerk/nextjs'
import useSWR from 'swr'

export const SavedCalculations: React.FC = () => {
    const { user } = useUser()
    const { data: calculations, error } = useSWR(
        user ? `salary-calculations-${user.id}` : null,
        () => (user ? getSalaryCalculations(user.id) : null)
    )

    if (error) return <div>Failed to load saved calculations</div>
    if (!calculations) return <div>Loading saved calculations...</div>

    return (
        <div>
            <h2 className='text-xl font-semibold mb-4'>Saved Calculations</h2>
            {calculations.map((calc) => (
                <div
                    key={calc.id}
                    className='bg-white shadow rounded-lg p-4 mb-4'
                >
                    <h3 className='font-bold'>{calc.employerName}</h3>
                    <p>Gross Salary: €{calc.grossSalary}</p>
                    <p>Net Salary: €{calc.netSalary}</p>
                    <p>Hours per Week: {calc.hoursPerWeek}</p>
                    {calc.travelAllowance > 0 && (
                        <p>Travel Allowance: €{calc.travelAllowance}</p>
                    )}
                    {calc.vacationMoney > 0 && (
                        <p>Vacation Money: €{calc.vacationMoney}</p>
                    )}
                    {calc.yearlyIncrease && (
                        <p>Yearly Increase: {calc.yearlyIncrease}</p>
                    )}
                    <p>Remote Work: {calc.isRemote ? 'Yes' : 'No'}</p>
                    <p>
                        Created At: {new Date(calc.createdAt).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    )
}
