'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePathname } from "next/navigation"

interface PaginationControlProps {
    currentPage: number
    totalMessages: number
    pageSize: number
    name: string
}

export function PaginationControl({ currentPage, totalMessages, pageSize, name }: PaginationControlProps) {
    const totalPages = Math.ceil(totalMessages / pageSize)
    const pathname = usePathname()
    const generatePaginationItems = () => {
        let items = []
        const maxVisiblePages = 5

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                items.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            href={`${pathname}?page=${i}&pageSize=${pageSize}`}
                            isActive={currentPage === i}
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                )
            }
        } else {
            // Logic for ellipsis and page numbers
            // Make sure to use the correct href format: `/nl/chat/${name}?page=${i}&pageSize=${pageSize}`
        }

        return items
    }

    return (
        <div className="flex items-center justify-between">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href={`${pathname}?page=${Math.max(1, currentPage - 1)}&pageSize=${pageSize}`}
                        />
                    </PaginationItem>
                    {generatePaginationItems()}
                    <PaginationItem>
                        <PaginationNext
                            href={`${pathname}?page=${Math.min(totalPages, currentPage + 1)}&pageSize=${pageSize}`}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            <Select
                onValueChange={(value) => {
                    window.location.href = `${pathname}?&pageSize=${value}`
                }}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={`${pageSize} per page`} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="25">25 per page</SelectItem>
                    <SelectItem value="50">50 per page</SelectItem>
                    <SelectItem value="100">100 per page</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
