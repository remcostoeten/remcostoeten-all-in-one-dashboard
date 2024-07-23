import { useUser } from '@clerk/nextjs'
import { ComponentType, FC } from 'react'

interface WithAdminAccessProps {
    fallback?: React.ReactNode
}

function withAdminAccess<P extends object>(
    WrappedComponent: ComponentType<P>,
    { fallback = null }: WithAdminAccessProps = {}
): FC<P> {
    const AdminProtectedComponent: FC<P> = (props) => {
        const { isLoaded, isSignedIn, user } = useUser()

        if (!isLoaded || !isSignedIn) {
            return null
        }

        const isAdmin = user?.publicMetadata?.isAdmin === true

        if (!isAdmin) {
            return <>{fallback}</>
        }

        return <WrappedComponent {...props} />
    }

    return AdminProtectedComponent
}

export default withAdminAccess
