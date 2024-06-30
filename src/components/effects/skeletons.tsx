import { Skeleton, SVGSkeleton } from '../ui/skeleton'

function SkeletonDashboardAside() {
    return (
        <>
            <aside className="flex w-[64px] flex-col justify-between border-r border-border py-4">
                <div className="flex w-full flex-1 flex-col px-2">
                    <div className="flex flex-col gap-1 mb-4 items-center">
                        <div className="flex items-center gap-2 flex-col">
                            <div className="grid place-items-center w-8 h-8">
                                <p>
                                    <Skeleton className="w-[14px] max-w-full" />
                                </p>
                            </div>
                        </div>
                        <div className="p-1 w-min border border-transparent hover:border-ghost-active h-8 grid place-items-center">
                            <div>
                                <div>
                                    <div>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div>
                                    <SVGSkeleton className="w-4 h-4" />
                                </div>
                                <SVGSkeleton className="w-[0px] h-[0px]" />
                                <div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="mb-4">
                        <div>
                            <a></a>
                            <a className="flex items-center px-3 py-2 justify-center">
                                <span className="w-6 h-6">
                                    <div>
                                        <SVGSkeleton className="w-4 h-4" />
                                    </div>
                                </span>
                            </a>
                        </div>
                    </nav>
                    <div className="h-[1px] px-7 mx-0 border-border border-b w-max self-center"></div>
                    <nav className="mt-4 space-y-2">
                        <div>
                            <a></a>
                            <a className="flex items-center px-3 py-2 justify-center">
                                <span className="w-6 h-6">
                                    <div>
                                        <SVGSkeleton className="w-4 h-4" />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className="flex items-center px-3 py-2 justify-center">
                                <span className="w-6 h-6">
                                    <div>
                                        <SVGSkeleton className="w-4 h-4" />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className="flex items-center px-3 py-2 justify-center">
                                <span className="w-6 h-6">
                                    <div>
                                        <SVGSkeleton className="w-4 h-4" />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className="flex items-center px-3 py-2 justify-center">
                                <span className="w-6 h-6">
                                    <div>
                                        <SVGSkeleton className="w-4 h-4" />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className="flex items-center px-3 py-2 justify-center">
                                <span className="w-6 h-6">
                                    <div>
                                        <SVGSkeleton className="w-4 h-4" />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className="flex items-center px-3 py-2 justify-center">
                                <span className="w-6 h-6">
                                    <div>
                                        <SVGSkeleton className="w-4 h-4" />
                                    </div>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a></a>
                            <a className="flex items-center px-3 py-2 justify-center">
                                <span className="w-6 h-6">
                                    <div>
                                        <SVGSkeleton className="w-4 h-4" />
                                    </div>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="mt-auto flex flex-col gap-2 items-center justify-center">
                    <div className="h-[1px] px-7 mx-0 border-border border-b w-max self-center"></div>
                    <div>
                        <a></a>
                        <a className="flex items-center px-3 py-2 justify-center">
                            <span className="w-6 h-6">
                                <SVGSkeleton className="w-4 h-4" />
                            </span>
                        </a>
                    </div>
                    <div>
                        <a></a>
                        <a className="flex items-center px-3 py-2 justify-center">
                            <span className="w-6 h-6">
                                <SVGSkeleton className="size-6 w-4 h-4" />
                            </span>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    )

}

export { SkeletonDashboardAside }