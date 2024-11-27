import Link from 'next/link'
import { isActivePath } from '@/shared/lib/helpers'

export function HeaderMenuItem({
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
                className={`py-2 text-center whitespace-nowrap ${
                    isActivePath(path, pathname)
                        ? 'border-b-4 border-orange-300 border-opacity-75 after:content-[""] after:block after:mt-[-4px] cursor-default'
                        : 'hover:text-orange-600'
                }`}
            >
                <span>{name}</span>
            </Link>
        </li>
    )
}
