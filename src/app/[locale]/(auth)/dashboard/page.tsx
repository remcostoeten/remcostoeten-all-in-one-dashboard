// src/app/[locale]/(auth)/dashboard/page.tsx

import { getTranslations } from 'next-intl/server'

import HelloWrapper from '@/components/Hello'
import Link from 'next/link'

export async function generateMetadata(props: { params: { locale: string } }) {
    const t = await getTranslations({
        locale: props.params.locale,
        namespace: 'Dashboard'
    })

    return {
        title: t('meta_title')
    }
}

const Dashboard = () => (
    <div className='[&_p]:my-6'>
        <h3>Work in progresssssssss...</h3>
        <Link
            className='text-xl underline'
            href='https://www.figma.com/design/1GPCg6iRCkIF0xcUB91GXi/Dashboard-design?node-id=6-1521&t=G5Bnba9CYsDvPKxj-0'
            target='_blank'
        >
            figma design
        </Link>
        <HelloWrapper />
    </div>
)

export default Dashboard
