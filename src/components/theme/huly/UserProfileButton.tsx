import { UserButtonStore } from '@/core/stores/UserButtonStore'
import { UserButton } from '@clerk/nextjs'
import { UserIcon } from '../icons'
import IconComponent from '../shells/IconShell'

export default function ProfileButton() {
    const { showUserButton, toggleShowUserButton } = UserButtonStore()

    return (
        <>
            <IconComponent
                tooltipTitle='Profile'
                hasBorder
                isButton={true}
                className='user-btn nostyle'
                onClick={toggleShowUserButton}
            >
                <UserIcon width={36} height={24} />
            </IconComponent>

            {showUserButton && <UserButton defaultOpen />}
        </>
    )
}
