import { getI18nPath } from '@/core/utils/get-I18n-path'
import { UserProfile } from '@clerk/nextjs'
import { getTranslations } from 'next-intl/server'
import SetPincode from '../../../../../../components/auth/SetPincode'
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from '../../../../../../components/ui'
import { PincodeForm } from '../../../../../../components/auth/InputOTPDemo'

export async function generateMetadata(props: { params: { locale: string } }) {
    const t = await getTranslations({
        locale: props.params.locale,
        namespace: 'UserProfile'
    })

    return {
        title: t('meta_title')
    }
}

const UserProfilePage = (props: { params: { locale: string } }) => (
    <>

        <PincodeForm />
        <div className='my-6 -ml-16'>

            <Collapsible>
                <CollapsibleTrigger><Button variant='secondary'>Edit profile</Button></CollapsibleTrigger>
                <CollapsibleContent>
                    <UserProfile
                        path={getI18nPath('/dashboard/user-profile', props.params.locale)} />
                </CollapsibleContent>
            </Collapsible>

        </div></>
)

export default UserProfilePage
