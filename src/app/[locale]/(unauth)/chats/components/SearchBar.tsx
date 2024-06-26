'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SearchBar({
    onSearch
}: {
    onSearch: (query: string) => void
}) {
    const [query, setQuery] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(query)
    }

    return (
        <form onSubmit={handleSubmit} className='flex gap-2'>
            <Input
                type='search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search by name or date'
                className='w-full'
            />
            <Button type='submit'>Search</Button>
        </form>
    )
}
