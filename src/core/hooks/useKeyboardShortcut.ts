import { useEffect } from 'react'

const useKeyboardShortcut = (keyMap: { [key: string]: () => void }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = `${event.shiftKey ? 'Shift+' : ''}${event.key}`

            if (keyMap[key]) {
                event.preventDefault()
                keyMap[key]()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [keyMap])
}

export default useKeyboardShortcut
