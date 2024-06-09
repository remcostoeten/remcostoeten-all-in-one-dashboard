import localFont from 'next/font/local'

export const interUI = localFont({
    src: [
        {
            path: '../../../public/Inter-roman.var.woff2',
            weight: '400 800',
            style: 'normal'
        },
        {
            path: '../../../public/Inter-italic.var.woff2',
            weight: '400 800',
            style: 'italic'
        }
    ],
    display: 'swap',
    variable: '--font-inter-ui'
})

export const interDisplay = localFont({
    src: '../../../public/InterDisplay-SemiBold.woff2',
    weight: '600',
    style: 'normal',
    display: 'swap',
    variable: '--font-inter-display'
})
