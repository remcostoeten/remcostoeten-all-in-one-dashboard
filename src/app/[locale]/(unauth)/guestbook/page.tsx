import { AddGuestbookForm } from '@/components/dashboard/guestbook/AddGuestbookForm'
import GuestbookList from '@/components/dashboard/guestbook/GuestbookList'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'

export async function generateMetadata(props: { params: { locale: string } }) {
    const t = await getTranslations({
        locale: props.params.locale,
        namespace: 'Guestbook'
    })

    return {
        title: t('meta_title'),
        description: t('meta_description')
    }
}

const Guestbook = () => {
    const t = useTranslations('Guestbook')

    return (
        <div className='max-w-screen-lg mx-auto px-4 py-10 bg-border m-10 rounded-xl  text-white b-dashed border-amber-600'>
            <AddGuestbookForm />

            {/* <Suspense fallback={<p>{t('loading_guestbook')}</p>}> */}
            <GuestbookList />
            {/* </Suspense> */}
        </div>
    )
}

export default Guestbook
