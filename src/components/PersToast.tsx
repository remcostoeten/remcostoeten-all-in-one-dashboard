'use client'

import useToast from '@/core/hooks/useToast'
import React from 'react'

interface ToastProps {
    message: string
}

const Toast: React.FC<ToastProps> = ({ message }) => {
    useToast(message)
    return null
}

export default Toast
