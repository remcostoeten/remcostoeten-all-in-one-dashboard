const DashboardLayout = () => {
    return (
        <main className='relative flex h-screen w-full flex-row'>
            nva goes here
            <section className='ml-20 flex w-full flex-col gap-5 p-10'>
                <h1 className='text-4xl text-neutral-200'>Dashboard</h1>
                <div className='h-80 w-full rounded border border-neutral-500/50 bg-neutral-800/20' />
                <div className='flex w-full flex-row gap-5'>
                    <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
                    <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
                </div>
            </section>
        </main>
    )
}

export default DashboardLayout
