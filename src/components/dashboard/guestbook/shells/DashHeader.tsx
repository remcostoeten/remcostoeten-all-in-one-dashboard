'use client'
import React, { useState, useCallback, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import RouteGuard from '@/components/RouteGaurd'
import AddAppointmentDialog from '@/app/[locale]/(auth)/dashboard/planner/components/AddAppointmentDialog'
import CalendarToolbar from "@/app/[locale]/(auth)/dashboard/planner/components/PlannerToolbar";

const DashHeader: React.FC = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [title, setTitle] = useState('Dashboard')

    useEffect(() => {
        const pathSegments = pathname.split('/')
        const lastSegment = pathSegments[pathSegments.length - 1] || ''
        setTitle(lastSegment.replace(/-/g, ' ') || 'Dashboard')
    }, [pathname])

    const handleSearch = useCallback(() => {
        console.log(`Searching for: ${searchQuery}`)
        // Implement search logic here
    }, [searchQuery])

    const handleCreate = useCallback(() => {
        console.log(`Creating new ${title}`)
        // Implement creation logic here
    }, [title])

    const handleUpdate = useCallback(() => {
        console.log(`Updating ${title}`)
        // Implement update logic here
    }, [title])

    const handleDelete = useCallback(() => {
        console.log(`Deleting ${title}`)
        // Implement delete logic here
    }, [title])

    const handlePrintToPDF = useCallback(() => {
        console.log(`Printing ${title} to PDF`)
        // Implement PDF printing logic here
    }, [title])

    return (
        <header className="flex flex-col space-y-4 p-4 bg-[var(--blue-alternative)] text-[var(--text-white)]">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">{title}</h1>
                <div className="flex space-x-2">
                    <SearchBar value={searchQuery} onChange={setSearchQuery} onSearch={handleSearch} />
                    <RouteGuard patterns={['/dashboard/planner', '/planner']}>
                        <AddAppointmentDialog />
                        <CalendarToolbar />
                    </RouteGuard>
                    <RouteGuard patterns={['/dashboard/planner', '/planner', '/folders']}>
                        <ActionButton onClick={handleCreate}>Create</ActionButton>
                        <ActionButton onClick={handleUpdate}>Update</ActionButton>
                        <ActionButton onClick={handleDelete}>Delete</ActionButton>
                    </RouteGuard>
                    <RouteGuard patterns="/documents/*">
                        <ActionButton onClick={handlePrintToPDF}>Print to PDF</ActionButton>
                    </RouteGuard>
                </div>
            </div>
        </header>
    )
}
interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                className="bg-[var(--bg-ghost)] text-[var(--text-white)] pl-8 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--blue-primary)]"
            />
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" onClick={onSearch} />
        </div>
    )
}

interface ActionButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="bg-[var(--bg-ghost)] hover:bg-[var(--bg-ghost-hover)] text-[var(--text-white)] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--blue-primary)]"
        >
            {children}
        </button>
    )
}

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    )
}

export default DashHeader