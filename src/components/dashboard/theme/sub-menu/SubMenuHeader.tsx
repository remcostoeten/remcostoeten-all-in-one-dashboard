export default function SubMenuHeader({ title }: { title: string }) {
    return (
        <div className='flex items-center p-3 border-b border-border max-h-top-section bg-section border-r'>
            <div className='text-lg font-semibold'>{title}</div>
        </div>
    )
}
