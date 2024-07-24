'use client'

import React, { ReactNode, ReactNode, useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { usePathname, useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

interface PaginationControlProps {
    currentPage: number
    totalMessages: number
    pageSize: number
    name: string
    children?: ReactNode
    toTop?: ReactNode
}

export function PaginationControl({
    currentPage,
    totalMessages,
    toTop,
    pageSize,
    children
}: PaginationControlProps) {
    const [isLoading, setIsLoading] = useState(false)
    const totalPages = Math.ceil(totalMessages / pageSize)
    const pathname = usePathname()
    const router = useRouter()

    const handlePageChange = (page: number) => {
        setIsLoading(true)
        router.push(`${pathname}?page=${page}&pageSize=${pageSize}`)
        setIsLoading(false)
    }

    const generatePaginationItems = () => {
        const items = []
        const maxVisiblePages = 5

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                items.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            href='#'
                            onClick={() => handlePageChange(i)}
                            isActive={currentPage === i}
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                )
            }
        } else {
            items.push(
                <PaginationItem key={1}>
                    <PaginationLink
                        href='#'
                        onClick={() => handlePageChange(1)}
                        isActive={currentPage === 1}
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
            )

            if (currentPage > 3) {
                items.push(<PaginationEllipsis key='ellipsis-start' />)
            }

            for (
                let i = Math.max(2, currentPage - 1);
                i <= Math.min(totalPages - 1, currentPage + 1);
                i++
            ) {
                items.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            href='#'
                            onClick={() => handlePageChange(i)}
                            isActive={currentPage === i}
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                )
            }

            if (currentPage < totalPages - 2) {
                items.push(<PaginationEllipsis key='ellipsis-end' />)
            }

            items.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink
                        href='#'
                        onClick={() => handlePageChange(totalPages)}
                        isActive={currentPage === totalPages}
                    >
                        {totalPages}
                    </PaginationLink>
                </PaginationItem>
            )
        }

        return items
    }

    return (
        <div className='flex items-center justify-between py-4'>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            {children}
            {toTop}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href='#'
                            onClick={() =>
                                handlePageChange(Math.max(1, currentPage - 1))
                            }
                        />
                    </PaginationItem>
                    {generatePaginationItems()}
                    <PaginationItem>
                        <PaginationNext
                            href='#'
                            onClick={() =>
                                handlePageChange(
                                    Math.min(totalPages, currentPage + 1)
                                )
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            <Select
                onValueChange={value => {
                    setIsLoading(true)

                    void (async () => {
                        await router.push(
                            `${pathname}?page=1&pageSize=${value}`
                        )
                        setIsLoading(false)
                    })()
                }}
            >
                <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder={`${pageSize} per page`} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='25'>25 per page</SelectItem>
                    <SelectItem value='50'>50 per page</SelectItem>
                    <SelectItem value='100'>100 per page</SelectItem>
                    <SelectItem value='250'>250 per page</SelectItem>
                    <SelectItem value='500'>500 per page</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
