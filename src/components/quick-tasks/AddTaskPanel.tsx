'use client'

import { useEffect, useState } from 'react'
import {
    Button,
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    Input,
    Textarea,
    Checkbox,
    Slider
} from '@c/ui'
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger
} from '../effects/animated-modal'
import {
    getCategories,
    addTask,
    addCategory,
    deleteCategory
} from '@/app/[locale]/(auth)/dashboard/task/task-actions'
import { AddTodoIcon } from '../shared/navigation/search/SearchIcons'
import { toast } from 'sonner'
import { Trash } from 'lucide-react'
import { Flex } from '../shared/atoms/Flex'
import AnimatedTabs from '@c/effects/AnimatedTabs'
import { Category } from './CategoryManager'
import { Seperator } from '../theme/dashboard-sidebar/DashboardAside'
import useKeyboardShortcut from '@/core/hooks/useKeyboardShortcut'

type TaskProps = {
    isOpen?: boolean | (() => void)
    onClose?: () => void
    onCategoryAdded?: (category: Category) => void
    onCategoryDeleted?: (categoryId: number) => void
}

const AddTaskPanel = ({
    isOpen = false,
    onClose,
    onCategoryAdded,
    onCategoryDeleted
}: TaskProps) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState<number | null>(null)
    const [categories, setCategories] = useState<Category[]>([])
    const [newCategory, setNewCategory] = useState('')
    const [keepOpen, setKeepOpen] = useState(false)
    const [priority, setPriority] = useState(1)

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await getCategories()

            setCategories(fetchedCategories)
        }

        fetchCategories()
    }, [])

    useKeyboardShortcut({
        Escape: () => {
            if (typeof onClose === 'function') {
                onClose()
            }
        }
    })

    const handleSaveTask = async () => {
        try {
            if (title.trim() === '') {
                toast('Please enter a title')
                return
            }
            await addTask({
                title,
                description,
                categoryId,
                priority,
                content: ''
            })
            toast('Task added successfully')
            if (!keepOpen) {
                resetForm()
                if (typeof onClose === 'function') {
                    onClose()
                }
            } else {
                resetForm()
            }
        } catch (error) {
            console.error('Failed to add task:', error)
            toast('Failed to add task')
        }
    }

    const resetForm = () => {
        setTitle('')
        setDescription('')
        setCategoryId(null)
        setPriority(1)
    }

    const handleAddCategory = async () => {
        if (newCategory.trim()) {
            const result = await addCategory(newCategory.trim())

            if (result.success) {
                const newCat = { id: result.id, name: newCategory.trim() }

                setCategories([...categories, newCat])
                setNewCategory('')
                toast('Category added successfully')
            } else {
                toast(result.message || 'Failed to add category')
            }
        } else {
            toast('Please enter a category name')
        }
    }

    const handleDeleteCategory = async (categoryId: number) => {
        try {
            await deleteCategory(categoryId)
            setCategories(categories.filter((cat) => cat.id !== categoryId))
            toast('Category deleted successfully')
            if (onCategoryDeleted) {
                onCategoryDeleted(categoryId)
            }
        } catch (error) {
            toast('Failed to delete category')
        }
    }

    const categoryTabs = [
        {
            title: 'Add Category',
            value: 'add',
            content: (
                <div className='w-full p-4 rounded-lg bg-section'>
                    <div className='flex items-center'>
                        <Input
                            type='text'
                            backgroundColor='bg-section'
                            placeholder='New Category'
                            className='!border-none'
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
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
        },
        {
            title: 'Delete Categories',
            value: 'delete',
            content: (
                <div className='w-full p-4 rounded-lg bg-section'>
                    {categories.map((category) => (
                        <Flex
                            key={category.id}
                            className='justify-between items-center mb-2'
                        >
                            <span>{category.name}</span>
                            <Button
                                onClick={() =>
                                    handleDeleteCategory(category.id)
                                }
                                variant='ghost'
                                size='sm'
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
        <Modal
            isOpen={isOpen}
            onClose={typeof onClose === 'function' ? onClose : undefined}
        >
            <ModalTrigger>
                <Button
                    size='icon'
                    variant='secondary'
                    className='mb-4 fixed right-5 bottom-2 glass bg-none'
                >
                    <AddTodoIcon />
                </Button>
            </ModalTrigger>
            <ModalBody>
                <ModalContent className='space-y-4'>
                    <h3 className='text-lg font-semibold '>Add new task</h3>
                    <Input
                        backgroundColor='!bg-section'
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Task Title'
                    />
                    <Textarea
                        placeholder='Task description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Select
                        value={categoryId?.toString()}
                        onValueChange={(value) => setCategoryId(Number(value))}
                    >
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Category' />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem
                                    key={category.id}
                                    value={category.id.toString()}
                                >
                                    {category.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div>
                        <label
                            htmlFor='priority'
                            className='block text-sm font-medium mb-1'
                        >
                            Priority: {priority}
                        </label>
                        <Slider
                            id='priority'
                            min={1}
                            max={5}
                            step={1}
                            value={[priority]}
                            onValueChange={(value) => setPriority(value[0])}
                        />
                    </div>
                    <Seperator />
                    <div className='mt-4'>
                        <h3 className='text-lg font-semibold mb-2'>
                            Manage Categories
                        </h3>
                        <AnimatedTabs
                            tabs={categoryTabs}
                            containerClassName='mb-4'
                            contentClassName='mt-4'
                            value={''}
                        />
                    </div>
                    <Flex className='items-center'>
                        <Checkbox
                            id='keepOpen'
                            checked={keepOpen}
                            onCheckedChange={(checked) =>
                                setKeepOpen(checked as boolean)
                            }
                        />
                        <label htmlFor='keepOpen' className='ml-2'>
                            Keep modal open after adding task
                        </label>
                    </Flex>
                </ModalContent>
                <ModalFooter>
                    <Button onClick={handleSaveTask}>Save Task</Button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}

export default AddTaskPanel
