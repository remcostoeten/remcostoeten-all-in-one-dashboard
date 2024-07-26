export default function Channel({ name }: { name: string }) {
    return (
        <div className='pointer-none cursor-not-allowed flex items-center gap-1 px-2.5 space-x-2 hover:bg-ghost'>
            <span className='text-text-secondary text-xs'>#</span>
            <div className='text-sm text-text-secondary hover:text-text-primary'>
                {name}
            </div>
        </div>
    )
}
