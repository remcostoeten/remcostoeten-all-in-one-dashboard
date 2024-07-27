import React from 'react'
import { getTasks } from '@/app/[locale]/(auth)/dashboard/task/task-actions'

interface Task {
    id: number
    title: string
    description: string
    content?: string
    categoryName?: string
}

const TaskList = async () => {
    const rawTasks = await getTasks()

    // Map the raw data to the Task interface
    const tasks: Task[] = rawTasks.map((item: any) => ({
        id: item.tasks.id,
        title: item.tasks.title,
        description: item.tasks.description,
        content: item.tasks.content,
        categoryName: item.categories ? item.categories.name : undefined
    }))

    return (
        <div className='bg-gray-800 text-white p-4 rounded-lg'>
            <h2 className='text-2xl font-bold mb-4'>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className='mb-2 p-2 bg-gray-700 rounded'>
                        <h3 className='text-xl'>{task.title}</h3>
                        <p>{task.description}</p>
                        {task.content && <p>{task.content}</p>}
                        {task.categoryName && (
                            <p>Category: {task.categoryName}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
