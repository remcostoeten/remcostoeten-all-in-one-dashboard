'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/components/ui/use-toast'
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'

export const SalaryCalculator: React.FC = () => {
    const { user } = useUser()
    const { toast } = useToast()

    const [employerName, setEmployerName] = useState('')
    const [grossSalary, setGrossSalary] = useState('')
    const [hoursPerWeek, setHoursPerWeek] = useState('')
    const [travelAllowance, setTravelAllowance] = useState('')
    const [vacationMoney, setVacationMoney] = useState('')
    const [yearlyIncrease, setYearlyIncrease] = useState('')
    const [isRemote, setIsRemote] = useState(false)
    const [includeTravel, setIncludeTravel] = useState(true)
    const [includeVacation, setIncludeVacation] = useState(true)

    const calculateNetSalary = (gross: number): number => {
        // This is a simplified calculation. In reality, you'd need to consider
        // tax brackets, social security contributions, etc.
        return gross * 0.7
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!user) {
            toast({
                title: 'Error',
                description: 'You must be logged in to save calculations.',
                variant: 'destructive'
            })
            return
        }

        const grossSalaryNum = parseFloat(grossSalary)
        const netSalary = calculateNetSalary(grossSalaryNum)

        const calculationData = {
            userId: user.id,
            employerName,
            grossSalary: grossSalaryNum,
            netSalary,
            hoursPerWeek: parseInt(hoursPerWeek),
            travelAllowance: includeTravel ? parseFloat(travelAllowance) : 0,
            vacationMoney: includeVacation ? parseFloat(vacationMoney) : 0,
            yearlyIncrease,
            isRemote
        }

        try {
            await saveSalaryCalculation(calculationData)
            toast({
                title: 'Calculation saved',
                description:
                    'Your salary calculation has been saved successfully.'
            })
            // Reset form fields after successful save
            setEmployerName('')
            setGrossSalary('')
            setHoursPerWeek('')
            setTravelAllowance('')
            setVacationMoney('')
            setYearlyIncrease('')
            setIsRemote(false)
            setIncludeTravel(true)
            setIncludeVacation(true)
        } catch (error) {
            toast({
                title: 'Error',
                description:
                    'There was an error saving your calculation. Please try again.',
                variant: 'destructive'
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <Label htmlFor='employerName'>Employer Name</Label>
                <Input
                    id='employerName'
                    value={employerName}
                    onChange={(e) => setEmployerName(e.target.value)}
                    required
                />
            </div>
            <div>
                <Label htmlFor='grossSalary'>Gross Salary</Label>
                <Input
                    id='grossSalary'
                    type='number'
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(e.target.value)}
                    required
                />
            </div>
            <div>
                <Label htmlFor='hoursPerWeek'>Hours per Week</Label>
                <Input
                    id='hoursPerWeek'
                    type='number'
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(e.target.value)}
                    required
                />
            </div>
            <div>
                <Label htmlFor='travelAllowance'>Travel Allowance</Label>
                <Input
                    id='travelAllowance'
                    type='number'
                    value={travelAllowance}
                    onChange={(e) => setTravelAllowance(e.target.value)}
                    disabled={!includeTravel}
                />
                <div className='flex items-center space-x-2 mt-2'>
                    <Switch
                        id='includeTravel'
                        checked={includeTravel}
                        onCheckedChange={setIncludeTravel}
                    />
                    <Label htmlFor='includeTravel'>
                        Include travel allowance
                    </Label>
                </div>
            </div>
            <div>
                <Label htmlFor='vacationMoney'>Vacation Money</Label>
                <Input
                    id='vacationMoney'
                    type='number'
                    value={vacationMoney}
                    onChange={(e) => setVacationMoney(e.target.value)}
                    disabled={!includeVacation}
                />
                <div className='flex items-center space-x-2 mt-2'>
                    <Switch
                        id='includeVacation'
                        checked={includeVacation}
                        onCheckedChange={setIncludeVacation}
                    />
                    <Label htmlFor='includeVacation'>
                        Include vacation money
                    </Label>
                </div>
            </div>
            <div>
                <Label htmlFor='yearlyIncrease'>Yearly Increase</Label>
                <Input
                    id='yearlyIncrease'
                    value={yearlyIncrease}
                    onChange={(e) => setYearlyIncrease(e.target.value)}
                    placeholder='e.g., 3% or €1000'
                />
            </div>
            <div className='flex items-center space-x-2'>
                <Switch
                    id='isRemote'
                    checked={isRemote}
                    onCheckedChange={setIsRemote}
                />
                <Label htmlFor='isRemote'>Remote work</Label>
            </div>
            <Button type='submit'>Calculate and Save</Button>
        </form>
    )
}
