import { useEffect } from 'react'

export const useInitialEffect = (cb: () => void) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(cb, [])
}
