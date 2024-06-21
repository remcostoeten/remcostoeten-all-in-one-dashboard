'use client'

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Copied ${text} to clipboard`)
    })
}

export default function ColorBox({ name, value, className }) {
    return (
        <div className='p-4 m-2 border rounded shadow-md flex items-center justify-between'>
            <div className={`w-16 h-16 ${className} border`}></div>
            <div className='ml-4 flex flex-col'>
                <span className='font-semibold'>{name}</span>
                <span className='text-sm'>{value}</span>
            </div>
            <button
                onClick={() => copyToClipboard(className)}
                className='ml-4 p-2 bg-blue-500 text-white rounded'
            >
                Copy
            </button>
        </div>
    )
}
