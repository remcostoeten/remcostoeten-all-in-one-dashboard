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

const AddTaskPanel = ({ isOpen, onClose }: TaskProps) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await getCategories()

            setCategories(fetchedCategories)
        }

        fetchCategories()
    }, [])

    const handleSaveTask = async () => {
        try {
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
        } catch {
            if (title.trim() === '') {
                toast('Please enter a title')
                return
            }
        }
    }

    const handleCategoryAdded = newCategory => {
        setCategories(prevCategories => [...prevCategories, newCategory])
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalTrigger>
                <Button size='icon' variant='secondary' className='mb-4'>
                    <AddTodoIcon />
                </Button>
            </ModalTrigger>
            <ModalBody>
                <ModalContent className='space-y-2'>
                    <Input
                        backgroundColor='!bg-section'
                        type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder='Task Title'
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
                        <SelectContent>
                            {categories.map(category => (
                                <SelectItem
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <CategoryManager onCategoryAdded={handleCategoryAdded} />
                </ModalContent>
                <ModalFooter>
                    <Button onClick={handleSaveTask}>Save Task</Button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}

export default AddTaskPanel
