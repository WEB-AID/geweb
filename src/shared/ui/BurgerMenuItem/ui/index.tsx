import Link from 'next/link'
import { isActivePath } from '@/shared/lib/helpers'

export function BurgerMenuItem({
    name,
    path,
    pathname,
    onClick,
}: {
    name: string
    path: string
    pathname: string
    onClick?: () => void
}) {
    return (
        <li className="cursor-pointer" onClick={onClick}>
            <Link
                href={path}
                className={`px-4 py-2 text-center rounded-lg transition-transform duration-300 whitespace-nowrap ${
                    isActivePath(path, pathname)
                        ? 'border border-b-4 border-orange-300 text-orange-500 cursor-default'
                        : 'hover:scale-105 hover:bg-orange-700'
                }`}
            >
                <span>{name}</span>
            </Link>
        </li>
    )
}
