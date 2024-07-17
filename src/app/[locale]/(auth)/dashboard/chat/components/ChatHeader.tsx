import MainContentHeaderWrapper from '@/components/dashboard/guestbook/ui-shells/MainContentHeaderWrapper'

export default function ChatHeader() {
    return (
        <MainContentHeaderWrapper
            hasIconBeforeTitle={true}
            title='general'
            subtitle='General Channel'
            icon={<span>#</span>} // You can replace this with an actual icon component if needed
            showSearch={true}
            className='bg-[#1f1f2c] border-b border-border min-h-[3rem] px-3 py-2 text-xs'
        />
    )
}
