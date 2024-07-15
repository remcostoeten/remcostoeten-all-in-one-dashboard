'use client'
import { useEffect, useState } from 'react'

import { generateResources, generateAppointments } from '@/core/data/fake-data'
import type { Resource, Appointment } from '@/core/models'
import Planner from './components/Planner'
import React from 'react'

export default function HomePage() {
    const [resources, setResources] = useState<Resource[]>([])
    const [appointments, setAppointments] = useState<Appointment[]>([])

    useEffect(() => {
        const initResources = generateResources(4) // Generate 10 resources
        const initAppointments = generateAppointments(100, initResources) // Generate 20 appointments linked to the resources
        setResources(initResources)
        setAppointments(initAppointments)
    }, [])
    return (
        <React.Fragment>
            {appointments.length > 0 && (
                <Planner
                    initialResources={resources}
                    initialAppointments={appointments}
                />
            )}
        </React.Fragment>
    )
}
