"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet, DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger, Input, SheetContent, SheetTrigger
} from "@/components/ui";
import { ModeToggle } from "@/components/shared";
import { generateResources, generateAppointments } from "@/core/data/fake-data";
import type { Resource, Appointment } from "@/core/models";
import Planner from "./components/Planner";

export default function HomePage() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        const initResources = generateResources(4); // Generate 10 resources
        const initAppointments = generateAppointments(100, initResources); // Generate 20 appointments linked to the resources
        setResources(initResources);
        setAppointments(initAppointments);
    }, []);
    return (
        <div className="flex min-h-screen w-full flex-col">
            {/* <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8"> */}
            {appointments.length > 0 && (
                <Planner
                    initialResources={resources}
                    initialAppointments={appointments}
                />
            )}
            {/* </main> */}
        </div>
    );
}