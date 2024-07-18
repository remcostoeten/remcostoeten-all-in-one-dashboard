export default function DirectMessage({ name }: { name: string }) {
    return (
        <div className='flex items-center gap-1 px-2.5 space-x-2'>
            <div className='w-2 h-2 rounded-full bg-green-500'></div>
            <div className='text-sm text-text-secondary hover:text-text-primary'>
                {name}
            </div>
        </div>
    )
}
