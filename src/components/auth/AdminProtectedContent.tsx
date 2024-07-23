'use client'

import React, { ReactNode } from 'react'
import withAdminAccess from './withAdminAccess'

interface AdminProtectedContentProps {
    children: ReactNode
}

const AdminProtectedContent: React.FC<AdminProtectedContentProps> = ({
    children
}) => {
    return <>{children}</>
}

export default withAdminAccess(AdminProtectedContent)
