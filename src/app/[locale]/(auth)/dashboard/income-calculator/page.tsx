// src/app/dashboard/page.tsx

import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { SalaryCalculator } from './components/SalaryCalculator'
import { SavedCalculations } from './SavedCalculations'

export default function DashboardPage() {
    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Salary Calculator</h1>
            <SignedIn>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <SalaryCalculator />
                    <SavedCalculations />
                </div>
            </SignedIn>
            <SignedOut>
                <p>Please sign in to use the salary calculator.</p>
                <Button asChild>
                    <a href='/sign-in'>Sign In</a>
                </Button>
            </SignedOut>
        </div>
    )
}
