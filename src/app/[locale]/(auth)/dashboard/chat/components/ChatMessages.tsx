export default function ChatMessages() {
    return (
        <div className='flex-1 overflow-y-auto p-4'>
            <div className='mb-4'>
                <div className='flex items-start'>
                    <div className='w-10 h-10 rounded-full bg-blue-primary flex items-center justify-center text-white font-semibold'>
                        GF
                    </div>
                    <div className='ml-3'>
                        <div className='flex items-baseline'>
                            <span className='font-semibold'>George Fehri</span>
                            <span className='ml-2 text-sm text-text-secondary'>
                                5:46 pm
                            </span>
                        </div>
                        <p>hi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
