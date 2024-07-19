const LoadingSpinner = ({ size = 'md' }) => {
    const sizeClass =
        {
            xs: 'loading-xs',
            sm: 'loading-sm',
            md: 'loading-md',
            lg: 'loading-lg'
        }[size] || 'loading-md'

    return <span className={`loading loading-spinner ${sizeClass}`}></span>
}

export default LoadingSpinner
