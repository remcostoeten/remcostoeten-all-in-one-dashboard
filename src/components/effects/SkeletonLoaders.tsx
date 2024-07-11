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

export { SkeletonDashboardAside, SkeletonGuestbookEntrys }
