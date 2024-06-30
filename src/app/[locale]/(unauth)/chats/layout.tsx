import { Inter } from 'next/font/google'
import ChatList from './components/ChatList'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex min-h-screen w-full bg-background'>
            <ChatList />
            <div className='flex-1'>{children}</div>
        </div>
    )
}
