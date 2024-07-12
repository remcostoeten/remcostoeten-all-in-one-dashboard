import { GuestbookList } from '@/components/dashboard/guestbook/GuestbookList'
import { GuestbookForm } from '@/components/dashboard/guestbook/GuestbookForm'

export default async function page() {
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* <GuestbookForm/> */}
            <GuestbookList />
        </div>
    )
}
