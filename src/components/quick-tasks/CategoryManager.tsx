'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
    addCategory,
    getCategories
} from '@/app/[locale]/(auth)/dashboard/task/task-actions'
import { Input } from '../ui/input'
import { toast } from 'sonner'

type Category = {
    name: string
}

type CategoryManagerProps = {
    onCategoryAdded: (category: Category) => void
}

export default function CategoryManager({
    onCategoryAdded
}: CategoryManagerProps) {
    const [newCategory, setNewCategory] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // Fetch the initial list of categories
        const fetchCategories = async () => {
            const fetchedCategories = await getCategories()

            setCategories(fetchedCategories)
        }

        fetchCategories()
    }, [])

    const handleAddCategory = async () => {
        if (newCategory.trim()) {
            const result = await addCategory(newCategory.trim())

            if (result.success) {
                toast('Category added successfully')
                const newCat = { name: newCategory.trim() }

                setCategories([...categories, newCat])
                setNewCategory('')
                onCategoryAdded(newCat)
            } else {
                toast('Category already exists')
            }
        } else {
            toast('Please enter a category name')
        }
    }

    return (
        <div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Manage Categories</h3>
            <div className='flex items-center'>
                <Input
                    type='text'
                    backgroundColor='bg-section'
                    placeholder='New Category'
                    className='!border-none'
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value)}
                    style={{ height: '45px' }}
                />
                <Button
                    onClick={handleAddCategory}
                    style={{ height: '45px' }}
                    className='rounded-l-none h-full'
                >
                    Add
                </Button>
            </div>
        </div>
    )
}
