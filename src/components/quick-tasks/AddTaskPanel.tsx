// AddTaskPanel.jsx
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
    Textarea
} from '@c/ui'
import CategoryManager from './CategoryManager'
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger
} from '../effects/animated-modal'
import {
    getCategories,
    addTask
} from '@/app/[locale]/(auth)/dashboard/task/task-actions'
import { AddTodoIcon } from '../shared/navigation/search/SearchIcons'
import { toast } from 'sonner'

type TaskProps = {
    isOpen: boolean
    onClose: () => void
}

type Category = {
    id: string
    name: string
}

const AddTaskPanel = ({ isOpen, onClose }: TaskProps) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await getCategories()

            setCategories(
                fetchedCategories.map(cat => ({
                    ...cat,
                    id: String(cat.id)
                }))
            )
        }

        fetchCategories()
    }, [])

    const handleSaveTask = async () => {
        try {
            if (title.trim() === '') {
                toast('Please enter a title')
                return
            }
            await addTask({
                title,
                description,
                categoryId: categoryId ? Number(categoryId) : null,
                content: ''
            })
            setTitle('')
            setDescription('')
            setCategoryId('')
            onClose()
            toast('Task added successfully')
        } catch (error) {
            toast('Failed to add task')
        }
    }

    const handleCategoryAdded = (newCategory: Category) => {
        setCategories(prevCategories => [...prevCategories, newCategory])
        toast('Category added successfully')
    }

    const handleCategoryDeleted = (categoryId: string) => {
        setCategories(prevCategories =>
            prevCategories.filter(cat => cat.id !== categoryId)
        )
        if (categoryId === categoryId) {
            setCategoryId('')
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalTrigger>
                <div
                    role='button'
                    className='w-12 h-12 rounded-lg bg-section shadow-md flex items-center justify-center'
                >
                    <AddTodoIcon />
                </div>
            </ModalTrigger>
            <ModalBody>
                <ModalContent className='space-y-2'>
                    <Input
                        type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder='Task Title'
                        className='bg-section'
                    />
                    <Textarea
                        placeholder='Task description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Select value={categoryId} onValueChange={setCategoryId}>
                        <SelectTrigger className='w-[180px]'>
                            <SelectValue placeholder='Category' />
                        </SelectTrigger>
                        <SelectContent className='w-full'>
                            {categories.map(category => (
                                <SelectItem
                                    key={category.id}
                                    value={category.id}
                                    className='flex justify-between min-w-[200px]'
                                >
                                    {category.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <CategoryManager
                        onCategoryAdded={handleCategoryAdded}
                        onCategoryDeleted={handleCategoryDeleted}
                    />
                </ModalContent>
                <ModalFooter>
                    <Button onClick={handleSaveTask}>Save Task</Button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}

export default AddTaskPanel
