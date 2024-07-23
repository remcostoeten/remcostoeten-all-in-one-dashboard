import { getTranslations } from 'next-intl/server'

import HelloWrapper from '@/components/Hello'
import UserData from '@/components/auth/_RenderUserData'
import AdminProtectedContent from '@/components/auth/AdminProtectedContent'

export async function generateMetadata(props: { params: { locale: string } }) {
    const t = await getTranslations({
        locale: props.params.locale,
        namespace: 'Dashboard'
    })

    return {
        title: t('meta_title')
    }
}

const DashboardMainPage = () => (
    <div className='[&_p]:my-6'>
        <AdminProtectedContent>
            <UserData />
        </AdminProtectedContent>
        <HelloWrapper />
    </div>
)

export default DashboardMainPage
