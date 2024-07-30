import { RefObject, useCallback, useEffect } from 'react'

export function useOnClickOutside(
    ref: RefObject<HTMLDivElement> | undefined,
    enabled: boolean,
    handler: (e?: RefObject<HTMLDivElement>) => void
) {
    const handlerCallback = useCallback(handler, [ref])

    useEffect(() => {
        if (!ref || !enabled) return

        const listener = clickedElement => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref?.current || ref.current.contains(clickedElement.target)) return

            handler(clickedElement)
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handlerCallback, enabled])
}
