import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Component() {
    return (
        <div className='flex min-h-screen w-full flex-col bg-muted/40'>
            <div className='flex flex-1 flex-col items-center justify-center gap-4 p-4 sm:px-6 md:gap-8'>
                <Card className='w-full max-w-md'>
                    <CardContent className='space-y-4 py-4'>
                        <p>
                            The chat feature is currently unavailable due
                            current database restructuring process.
                        </p>
                        <p>
                            This chat feature was originally designed to support
                            the export of WhatsApp chat logs to
                            <code>.txt</code> files, which were then converted
                            to <code>.json</code> format. However, as the
                            feature evolved, we have now transitioned to storing
                            the chat data in a SQLite database for better
                            performance and scalability.
                        </p>
                        <p>
                            Worked like a charm, mutate favourites, mutate
                            adminOnly, search through 100k messages instantly,
                            pagination etc. Only problem was 450M reads in a
                            couple days, thus have to rethink the structure.
                        </p>
                        <p>
                            The script used to convert the <code>.txt</code>
                            files to a SQLite database is available in our{' '}
                            <code>SQLite</code>
                            <Link
                                href='https://github.com/remcostoeten/remcostoeten-all-in-one-dashboard/blob/main/src/core/scripts/txt-to-sql.py'
                                target='_blank'
                                className='ml-1 text-primary underline'
                                prefetch={false}
                            >
                                GitHub repository
                            </Link>
                            . Feel free to check it out if you`re interested in
                            the technical details of this migration. The guide
                            to setting up the SQLite database is available{' '}
                            <Link
                                href='https://github.com/remcostoeten/remcostoeten-all-in-one-dashboard/blob/main/src/core/scripts/whatsapp-readme.md'
                                target='_blank'
                                className='underline'
                            >
                                here
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <circle cx='11' cy='11' r='8' />
            <path d='m21 21-4.3-4.3' />
        </svg>
    )
}

function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
            <circle cx='12' cy='12' r='3' />
        </svg>
    )
}

function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M18 6 6 18' />
            <path d='m6 6 12 12' />
        </svg>
    )
}
