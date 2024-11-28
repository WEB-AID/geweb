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
        <li className={`cursor-pointer `} onClick={onClick}>
            <Link
                href={path}
                className={` font-medium text-center whitespace-nowrap lg:text-xl min-[1280px]:text-xl`}
            >
                <span
                    className={`${
                        isActivePath(path, pathname)
                            ? 'border-b-4 border-orange-300 border-opacity-75 cursor-default'
                            : 'hover:text-orange-600'
                    }`}
                >
                    {name}
                </span>
            </Link>
        </li>
    )
}
