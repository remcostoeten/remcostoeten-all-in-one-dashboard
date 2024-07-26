import { db } from '@/core/libs/DB'
import { salaryCalculationsSchema } from '@/core/models/Schema'

interface SalaryCalculationData {
    userId: string
    employerName: string
    grossSalary: number
    netSalary: number
    hoursPerWeek: number
    travelAllowance?: number
    vacationMoney?: number
    yearlyIncrease?: string
    isRemote: boolean
}

export async function saveSalaryCalculation(data: SalaryCalculationData) {
    try {
        await db.insert(salaryCalculationsSchema).values(data)
    } catch (error) {
        console.error('Error saving salary calculation:', error)
        throw error
    }
}

export async function getSalaryCalculations(userId: string) {
    try {
        return await db
            .select()
            .from(salaryCalculationsSchema)
            .where(eq(salaryCalculationsSchema.userId, userId))
            .orderBy(desc(salaryCalculationsSchema.createdAt))
    } catch (error) {
        console.error('Error fetching salary calculations:', error)
        throw error
    }
}
