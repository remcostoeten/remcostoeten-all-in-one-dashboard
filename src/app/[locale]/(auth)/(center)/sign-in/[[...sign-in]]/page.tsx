import { getI18nPath } from '@/core/utils/get-I18n-path'
import { SignIn } from '@clerk/nextjs'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(props: { params: { locale: string } }) {
    const t = await getTranslations({
        locale: props.params.locale,
        namespace: 'SignIn'
    })

    return {
        title: t('meta_title'),
        description: t('meta_description')
    }
}

const SignInPage = (props: { params: { locale: string } }) => (
    <SignIn path={getI18nPath('/sign-in', props.params.locale)} />
)

export default SignInPage
