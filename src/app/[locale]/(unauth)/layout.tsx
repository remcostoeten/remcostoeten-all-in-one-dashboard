import type { ReactNode } from 'react'

export default function MarketingLayout({ children }: { children: ReactNode }) {
    return (
        <main
            className='min-w-screen bg-dot-black/[0.2] flex flex-col items-center justify-between bg-black pt-16 bg-dot-white/[0.2] -z-10 min-h-screen'
            style={{
                paddingTop: 'calc(var(--nav-height) + 16px)'
            }}
        >
            {children}
        </main>
    )
}
