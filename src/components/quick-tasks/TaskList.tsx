import AnonymPost from '@/app/[locale]/(auth)/dashboard/posts/components/AnonymPost'
import { getTasks } from '@/app/[locale]/(auth)/dashboard/task/task-actions'
import { db } from '@/core/libs/DB'
import { posts } from '@/core/models/Schema'
import { extractTextFromJSON } from '@/core/utils/db-json-extract'

interface Task {
    id: number
    title: string
    description: string
    content: string | null
    priority: number
    categoryId: number | null
    categoryName: string | null
}

const TaskList = async () => {
    const tasks = await getTasks()
    const allPosts = await db.select().from(posts).all()

    return (
        <div className='b text-white p-4 rounded-lg'>
            <h2 className='text-2xl font-bold mb-4'>Task List</h2>
            <AnonymPost posts={allPosts} />{' '}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className='mb-2 p-2 bg-gray-700 rounded'>
                        <h3 className='text-xl'>{task.title}</h3>
                        <p>{task.description}</p>
                        {task.content && <p>{task.content}</p>}
                        {extractTextFromJSON(task.content)}
                        <p>Priority: {task.priority}</p>
                        {/* <p>Category: {task.categoryName}</p> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
