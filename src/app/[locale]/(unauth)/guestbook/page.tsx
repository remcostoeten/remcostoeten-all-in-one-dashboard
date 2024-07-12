import { GuestbookList } from '@/components/dashboard/guestbook/GuestbookList'

export default async function page() {
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* <GuestbookForm/> */}
            <GuestbookList />
        </div>
    )
}
