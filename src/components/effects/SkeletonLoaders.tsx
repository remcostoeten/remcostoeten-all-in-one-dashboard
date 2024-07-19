/**
 * @author Remco Stoeten
 * @description SkeletonLoaders - Animated loading skeletons which match fetched content 1:1 to prevent layout shifts.
 *
 * ## Best Practices
 * - View your component in the browser, inspect the DOM, copy entire EL as HTML, and paste it [here](https://gpt-skeleton.vercel.app/generate)
 * - For each <LoaderFile/>, create a single function Element() that returns the generated loaded content. Export below in the {arr, arr} format.
 * - Add a small annotation where you have used the skeleton loader per function; this will prevent bloating.
 *   Use this format:
 * /**
 *  * @file src/app/loading.tsx
 *  * /
 * This project contains  a handfull custom snippets, so if you type "skdoc" in the editor and enter it will generate the entire godcstring for you with the correct file path and syntax. This because of @file ./vscode/nextjs.code-snippets
 */

import { Skeleton, SVGSkeleton } from '../ui/SkeletonwWrapper'

function ChatMessagesSkeleton() {
    return (
        <div className='flex flex-col h-full p-4 gap-4'>
            <div className='flex items-center justify-between'>
                <nav className='mx-auto flex w-full justify-center'>
                    <ul className='flex flex-row items-center gap-1'>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors h-10 px-4 py-2 gap-1 pl-2.5'>
                                <SVGSkeleton className='lucide-chevron-left w-[24px] h-[24px]' />
                                <span>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors border border-input size-10'>
                                <Skeleton className='w-[14px] max-w-full' />
                            </a>
                        </li>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors size-10'>
                                <Skeleton className='w-[14px] max-w-full' />
                            </a>
                        </li>
                        <span className='flex h-9 w-9 items-center justify-center'>
                            <SVGSkeleton className='w-[24px] h-[24px]' />
                        </span>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors size-10'>
                                <Skeleton className='w-[30px] max-w-full' />
                            </a>
                        </li>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors h-10 px-4 py-2 gap-1 pr-2.5'>
                                <span>
                                    <Skeleton className='w-[40px] max-w-full' />
                                </span>
                                <SVGSkeleton className='lucide-chevron-right w-[24px] h-[24px]' />
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='flex h-10 items-center justify-between border border-input px-3 py-2 [&amp;>span]:line-clamp-1 w-[180px]'>
                    <span>
                        <Skeleton className='w-[110px] max-w-full' />
                    </span>
                    <SVGSkeleton className='w-[24px] h-[24px]' />
                </div>
            </div>
            <div className='flex-1 overflow-y-auto'>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[270px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[30px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[220px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[510px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[440px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[360px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[330px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[60px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[40px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[260px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[160px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[340px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[90px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[310px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[520px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[100px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[340px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[30px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[80px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[350px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[120px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[80px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[20px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-start'>
                        <div className='w-10 h-10 flex items-center justify-center mr-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[60px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[150px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <div className='flex items-start flex-row-reverse'>
                        <div className='w-10 h-10 flex items-center justify-center ml-3'>
                            <Skeleton className='w-[14px] max-w-full' />
                        </div>
                        <div className='text-right'>
                            <div className='flex items-baseline'>
                                <span>
                                    <Skeleton className='w-[50px] max-w-full' />
                                </span>
                                <span className='ml-2'>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </div>
                            <p className='mt-1 p-2'>
                                <Skeleton className='w-[270px] max-w-full' />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <nav className='mx-auto flex w-full justify-center'>
                    <ul className='flex flex-row items-center gap-1'>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors h-10 px-4 py-2 gap-1 pl-2.5'>
                                <SVGSkeleton className='lucide-chevron-left w-[24px] h-[24px]' />
                                <span>
                                    <Skeleton className='w-[80px] max-w-full' />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors border border-input size-10'>
                                <Skeleton className='w-[14px] max-w-full' />
                            </a>
                        </li>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors size-10'>
                                <Skeleton className='w-[14px] max-w-full' />
                            </a>
                        </li>
                        <span className='flex h-9 w-9 items-center justify-center'>
                            <SVGSkeleton className='w-[24px] h-[24px]' />
                        </span>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors size-10'>
                                <Skeleton className='w-[30px] max-w-full' />
                            </a>
                        </li>
                        <li>
                            <a className='inline-flex items-center justify-center transition-colors h-10 px-4 py-2 gap-1 pr-2.5'>
                                <span>
                                    <Skeleton className='w-[40px] max-w-full' />
                                </span>
                                <SVGSkeleton className='lucide-chevron-right w-[24px] h-[24px]' />
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='flex h-10 items-center justify-between border border-input px-3 py-2 [&amp;>span]:line-clamp-1 w-[180px]'>
                    <span>
                        <Skeleton className='w-[110px] max-w-full' />
                    </span>
                    <SVGSkeleton className='w-[24px] h-[24px]' />
                </div>
            </div>
        </div>
    )
}

function DirectMessageSkeleton() {
    /**
     * @file [src/src/components/dashboard/chat-history/DirectMessageList.tsx]
     */

    return (
        <div className='flex items-center gap-2 px-2.5 space-x-2 animate-pulse'>
            <div className='w-5 h-5 rounded-full bg-gray-300'></div>
            <div className='h-4 w-24 bg-gray-300 rounded'></div>
        </div>
    )
}

function SkeletonGuestbookEntrys({ count }) {
    /**
     * @file src/components/dashboard/guestbook/GuestbookForm.tsx
     */

    return (
        <>
            {[...Array(count)].map((_, index) => (
                <div
                    key={index}
                    className='bg-gray-200 p-2 mb-4 rounded-lg w-full gap-2 max-h-[46px] items-center flex justify-between animate-pulse'
                >
                    <div className='space-x-4'>
                        <span className='animate-pulse bg-gray-400 h-5 w-32 rounded'></span>
                        <span className='animate-pulse bg-gray-400 h-5 w-64 rounded'></span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='text-blue-500 hover:text-blue-700'>
                            <span className='animate-pulse bg-gray-400 h-10 w-24 rounded'></span>
                        </div>
                        <div className='ml-2 text-green-500 hover:text-green-700'>
                            <span className='animate-pulse bg-gray-400 h-10 w-20 rounded'></span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

function SkeletonDashboardAside() {
    /**
      @file [src/app/loading.tsx]
     **/

    return (
        <>
            <aside className='flex w-[64px] flex-col justify-between border-r border-border py-4'>
                <div className='flex w-full flex-1 flex-col px-2'>
                    <div className='flex flex-col gap-1 mb-4 items-center'>
                        <div className='flex items-center gap-2 flex-col'>
                            <div className='grid place-items-center w-8 h-8'>
                                <p>
                                    <Skeleton className='w-[14px] max-w-full' />
                                </p>
                            </div>
                        </div>
                        <div className='p-1 w-min border border-transparent hover:border-ghost-active h-8 grid place-items-center'>
                            <div>
                                <div>
                                    <div>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div>
                                    <SVGSkeleton className='w-4 h-4' />
                                </div>
                                <SVGSkeleton className='w-[0px] h-[0px]' />
                                <div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className='mb-4'>
                        <div>
                            <a></a>
                            <a className='flex items-center px-3 py-2 justify-center'>
                                <span className='w-6 h-6'>
                                    <div>
                                        <SVGSkeleton className='w-4 h-4' />
                                    </div>
                                </span>
                            </a>
                        </div>
                    </nav>
                    <div className='h-[1px] px-7 mx-0 border-border border-b w-max self-center'></div>
                    <nav className='mt-4 space-y-2'>
                        <div>
                            <a></a>
                            <a className='flex items-center px-3 py-2 justify-center'>
                                <span className='w-6 h-6'>
                                    <div>
                                        <SVGSkeleton className='w-4 h-4' />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className='flex items-center px-3 py-2 justify-center'>
                                <span className='w-6 h-6'>
                                    <div>
                                        <SVGSkeleton className='w-4 h-4' />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className='flex items-center px-3 py-2 justify-center'>
                                <span className='w-6 h-6'>
                                    <div>
                                        <SVGSkeleton className='w-4 h-4' />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className='flex items-center px-3 py-2 justify-center'>
                                <span className='w-6 h-6'>
                                    <div>
                                        <SVGSkeleton className='w-4 h-4' />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className='flex items-center px-3 py-2 justify-center'>
                                <span className='w-6 h-6'>
                                    <div>
                                        <SVGSkeleton className='w-4 h-4' />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className='flex items-center px-3 py-2 justify-center'>
                                <span className='w-6 h-6'>
                                    <div>
                                        <SVGSkeleton className='w-4 h-4' />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className='flex items-center px-3 py-2 justify-center'>
                                <span className='w-6 h-6'>
                                    <div>
                                        <SVGSkeleton className='w-4 h-4' />
                                    </div>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className='mt-auto flex flex-col gap-2 items-center justify-center'>
                    <div className='h-[1px] px-7 mx-0 border-border border-b w-max self-center'></div>
                    <div>
                        <a></a>
                        <a className='flex items-center px-3 py-2 justify-center'>
                            <span className='w-6 h-6'>
                                <SVGSkeleton className='w-4 h-4' />
                            </span>
                        </a>
                    </div>
                    <div>
                        <a></a>
                        <a className='flex items-center px-3 py-2 justify-center'>
                            <span className='w-6 h-6'>
                                <SVGSkeleton className='size-6 w-4 h-4' />
                            </span>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    )
}

export {
    SkeletonDashboardAside,
    DirectMessageSkeleton,
    ChatMessagesSkeleton,
    SkeletonGuestbookEntrys
}
