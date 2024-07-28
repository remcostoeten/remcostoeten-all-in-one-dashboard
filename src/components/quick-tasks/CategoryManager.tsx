import { useState, useEffect, useCallback } from 'react'
import { Button, Input } from '@c/ui'
import { toast } from 'sonner'
import { Trash } from 'lucide-react'
import { Flex } from '../shared/atoms/Flex'
import {
    addCategory,
    deleteCategory,
    getCategories
} from '@/app/[locale]/(auth)/dashboard/task/task-actions'
import AnimatedTabs from '../effects/AnimatedTabs'

type CategoryManagerProps = {
    onCategoryAdded: (category: Category) => void
    onCategoryDeleted: (categoryId: string) => void
}

export type Category = {
    id: string
    name: string
}

export default function CategoryManager({
    onCategoryAdded,
    onCategoryDeleted
}: CategoryManagerProps) {
    const [newCategory, setNewCategory] = useState('')
    const [categories, setCategories] = useState<Category[]>([])
    const [deletingCategories, setDeletingCategories] = useState<string[]>([])
    const [activeTab, setActiveTab] = useState('add')

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await getCategories()
            const updatedCategories = fetchedCategories.map((category) => ({
                id: category.id.toString(),
                name: category.name
            }))

            setCategories(updatedCategories)
        }

        fetchCategories()

        const intervalId = setInterval(fetchCategories, 5000)

        return () => clearInterval(intervalId)
    }, [])

    const handleAddCategory = useCallback(async () => {
        if (newCategory.trim()) {
            try {
                const result = await addCategory(newCategory.trim())

                if (result.success) {
                    const newCat = { id: result.id, name: newCategory.trim() }

                    setCategories((prev) => [...prev, newCat])
                    setNewCategory('')
                    onCategoryAdded(newCat)
                    toast('Category added successfully')
                } else {
                    toast('Category already exists')
                }
            } catch (error) {
                toast('Failed to add category')
            }
        } else {
            toast('Please enter a category name')
        }
    }, [newCategory, onCategoryAdded])

    const handleDeleteCategory = useCallback(
        async (categoryId: string) => {
            try {
                setDeletingCategories((prev) => [...prev, categoryId])
                await new Promise((resolve) => setTimeout(resolve, 300))
                await deleteCategory(Number(categoryId))
                setCategories((prev) =>
                    prev.filter((cat) => cat.id !== categoryId)
                )
                onCategoryDeleted(categoryId)
                toast('Category deleted successfully')
            } catch (error) {
                toast('Failed to delete category')
            } finally {
                setDeletingCategories((prev) =>
                    prev.filter((id) => id !== categoryId)
                )
            }
        },
        [onCategoryDeleted]
    )

    const tabs = [
        {
            title: 'Add Category',
            value: 'add',
            content: (
                <div className=' rounded-lg bg-section'>
                    <div className='flex items-center'>
                        <Input
                            type='text'
                            backgroundColor='bg-section !border-none'
                            placeholder='New Category'
                            className='flex-grow mr-2'
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <button
                            className='btn btn-secondary bg-background text-white border-none rounded-l-none'
                            onClick={handleAddCategory}
                        >
                            Add
                        </button>
                    </div>
                </div>
            )
        },
        {
            title: 'Delete Categories',
            value: 'delete',
            content: (
                <div className=''>
                    {categories.length === 0 && (
                        <div className='text-center text-gray-500'>
                            No categories to delete
                        </div>
                    )}
                    {categories.map((category) => (
                        <Flex
                            key={category.id}
                            className={`justify-between items-center mb-2 bg-section p-4 category-item ${
                                deletingCategories.includes(category.id)
                                    ? 'deleting'
                                    : ''
                            }`}
                        >
                            <span>{category.name}</span>
                            <Button
                                onClick={() =>
                                    handleDeleteCategory(category.id)
                                }
                                variant='ghost'
                                size='sm'
                                disabled={deletingCategories.includes(
                                    category.id
                                )}
                            >
                                <Trash size={16} />
                            </Button>
                        </Flex>
                    ))}
                </div>
            )
        }
    ]

    return (
        <div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Manage Categories</h3>
            <AnimatedTabs
                tabs={tabs}
                containerClassName='mb-4'
                value={activeTab}
                onValueChange={setActiveTab}
            />
        </div>
    )
}
