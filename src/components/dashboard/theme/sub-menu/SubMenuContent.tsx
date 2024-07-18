export default function SubMenuContent({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col px-2 py-4 border-b border-border'>
            {children}
        </div>
    )
}


export function SubMenuInnerContent({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col pb-4 border-b border-border'>
            {children}
        </div>
    )
}
