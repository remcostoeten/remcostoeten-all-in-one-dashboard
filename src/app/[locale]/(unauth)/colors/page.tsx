import ColorBox from './x'

const colors = [
    { name: 'theme-primary', value: '#3b82f6', class: 'bg-theme-primary' },
    { name: 'blue-primary', value: '#205dc2', class: 'bg-blue-primary' },
    {
        name: 'blue-alternative',
        value: '#1A1928',
        class: 'bg-blue-alternative'
    },
    { name: 'top-bar', value: '#1A1928', class: 'bg-top-bar' },
    { name: 'dark-blue', value: '#14141f', class: 'bg-dark-blue' },
    { name: 'light-blue', value: '#1a1a28', class: 'bg-light-blue' },
    {
        name: 'text-white',
        value: 'rgba(255, 255, 255, 0.8)',
        class: 'text-text-white'
    },
    { name: 'icon', value: '#1a1a28', class: 'bg-icon' },
    { name: 'icon-border', value: '#ffffff17', class: 'border-icon' },
    { name: 'icon-active', value: 'white', class: 'bg-icon-active' },
    {
        name: 'icon-on-bg',
        value: 'rgba(255, 255, 255, 0.6)',
        class: 'bg-icon-on-bg'
    },
    {
        name: 'icon-active-background',
        value: 'rgba(255, 255, 255, 0.08)',
        class: 'bg-icon-active-background'
    },
    { name: 'border', value: 'rgba(255, 255, 255, 1)', class: 'border-border' },
    {
        name: 'seperator',
        value: 'rgba(255, 255, 255, 1)',
        class: 'border-seperator'
    },
    { name: 'search-hover', value: '#333240', class: 'bg-search-hover' },
    { name: 'bg-ghost', value: '#ffffff05', class: 'bg-bg-ghost' },
    { name: 'bg-ghost-hover', value: '#ffffff0a', class: 'bg-bg-ghost-hover' },
    {
        name: 'bg-ghost-active',
        value: '#ffffff0d',
        class: 'bg-bg-ghost-active'
    },
    {
        name: 'border-ghost',
        value: 'rgba(255 255 255 / 4%)',
        class: 'border-border-ghost'
    },
    {
        name: 'border-ghost-hover',
        value: 'rgba(255 255 255 / 8%)',
        class: 'border-border-ghost-hover'
    },
    { name: 'background-main', value: '#1a1b1e', class: 'bg-background-main' },
    {
        name: 'background-sidebar',
        value: '#202225',
        class: 'bg-background-sidebar'
    },
    { name: 'background-card', value: '#2c2f33', class: 'bg-background-card' },
    {
        name: 'background-active',
        value: '#3b3e44',
        class: 'bg-background-active'
    },
    { name: 'text-primary', value: '#e4e6eb', class: 'text-text-primary' },
    { name: 'text-secondary', value: '#b0b3b8', class: 'text-text-secondary' },
    { name: 'text-active', value: '#ffffff', class: 'text-text-active' },
    { name: 'button-primary', value: '#3b82f6', class: 'bg-button-primary' },
    {
        name: 'button-primary-hover',
        value: '#2563eb',
        class: 'bg-button-primary-hover'
    }
]

export default function Page() {
    return (
        <div className='p-8 bg-dark-blue'>
            <h1 className='text-2xl font-bold mb-4'>Color Showcase</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {colors.map((color) => (
                    <ColorBox
                        key={color.name}
                        name={color.name}
                        value={color.value}
                        className={color.class}
                    />
                ))}
            </div>
        </div>
    )
}
