import HeroSection from '@/components/marketing/HeroSection'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(props: { params: { locale: string } }) {
    const t = await getTranslations({
        locale: props.params.locale,
        namespace: 'Index'
    })

    return {
        title: t('meta_title'),
        description: t('meta_description')
    }
}

export default function Index() {
    return (
        <>

<h1 className='text-white text-4xl'>test</h1>
        </>
    )
}
