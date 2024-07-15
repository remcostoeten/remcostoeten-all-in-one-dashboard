'use client'

import React, { useEffect, useState } from 'react'
import { generateResources, generateAppointments } from '@/core/data/fake-data'
import type { Resource, Appointment } from '@/core/models'
import Planner from './components/Planner'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
    const [resources, setResources] = useState<Resource[]>([])
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [resourceCount, setResourceCount] = useState<number>(10)
    const [appointmentCount, setAppointmentCount] = useState<number>(200)

    const generateData = () => {
        const newResources = generateResources(resourceCount)
        const newAppointments = generateAppointments(
            appointmentCount,
            newResources
        )
        setResources(newResources)
        setAppointments(newAppointments)
    }

    useEffect(() => {
        generateData()
    }, [resourceCount, appointmentCount])

    return (
        <React.Fragment>
            <Card className='mb-4'>
                <CardHeader>
                    <CardTitle>Data Generation Controls</CardTitle>
                </CardHeader>
                <CardContent className='flex items-center space-x-4'>
                    <div className='flex-1'>
                        <label className='block text-sm font-medium mb-1'>
                            Resources
                        </label>
                        <Select
                            onValueChange={(value) =>
                                setResourceCount(Number(value))
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder={resourceCount} />
                            </SelectTrigger>
                            <SelectContent>
                                {[5, 10, 15, 20, 30, 40, 50, 75, 100].map(
                                    (num) => (
                                        <SelectItem
                                            key={num}
                                            value={num.toString()}
                                        >
                                            {num}
                                        </SelectItem>
                                    )
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='flex-1'>
                        <label className='block text-sm font-medium mb-1'>
                            Appointments
                        </label>
                        <Input
                            type='number'
                            value={appointmentCount}
                            onChange={(e) =>
                                setAppointmentCount(Number(e.target.value))
                            }
                            min='1'
                            max='1500'
                        />
                    </div>
                    <Button onClick={generateData} className='mt-6'>
                        Regenerate Data
                    </Button>
                </CardContent>
            </Card>
            {appointments.length > 0 && (
                <Planner
                    initialResources={resources}
                    initialAppointments={appointments}
                />
            )}
        </React.Fragment>
    )
}
