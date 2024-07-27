import AddTaskPanel from '@/components/quick-tasks/AddTaskPanel'
import TaskList from '@/components/quick-tasks/TaskList'

export default function Home() {
    return (
        <div className='bg-gray-900 min-h-screen text-white'>
            <div className='w-full max-w-4xl mx-auto p-4'>
                <TaskList />
                <AddTaskPanel />
            </div>
        </div>
    )
}
