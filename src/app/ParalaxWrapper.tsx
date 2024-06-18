import { useEffect } from 'react'

const useParallaxEffect = () => {
    useEffect(() => {
        const handleScroll = () => {
            document.documentElement.style.setProperty(
                '--scroll',
                window.scrollY.toString()
            )
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
}

export default useParallaxEffect
