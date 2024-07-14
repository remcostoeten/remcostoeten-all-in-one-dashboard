import { getI18nPath } from '@/core/utils/get-I18n-path'
import { SignUp } from '@clerk/nextjs'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(props: { params: { locale: string } }) {
    const t = await getTranslations({
        locale: props.params.locale,
        namespace: 'SignUp'
    })

    return {
        title: t('meta_title'),
        description: t('meta_description')
    }
}

const SignUpPage = (props: { params: { locale: string } }) => (
    <SignUp path={getI18nPath('/sign-up', props.params.locale)} />
)
