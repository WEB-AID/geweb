import { useEffect } from 'react'

export function useSyncHeaderMargin() {
    useEffect(() => {
        const updateMargin = () => {
            const marginRight = getComputedStyle(document.body).marginRight
            document.documentElement.style.setProperty(
                '--body-margin-right',
                marginRight || '0px'
            )
        }

        // Обновляем при загрузке и изменении состояния модалки
        updateMargin()
        const observer = new MutationObserver(updateMargin)
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['style'],
        })

        return () => observer.disconnect()
    }, [])
}
