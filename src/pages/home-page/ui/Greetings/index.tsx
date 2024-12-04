'use client'

import { Button } from '@/shared/ui'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Greetings() {
    const { t } = useTranslation()
    const router = useRouter()
    const handleMenuItemClick = (path: string) => {
        router.push(path)
    }

    return (
        <div className="mt-6 px-6 flex flex-col items-center md:flex-row bg-gray-100 font-extrabold">
            <div className="w-3/4 md:w-96 lg:w-2/5 relative md:ml-auto max-[767px]:mx-auto md:mr-2">
                <Button
                    variant="default"
                    size="sm"
                    className="md:text-sm h-2 p-3 lg:h-10 absolute max-[600px]:-left-8 max-[600px]:top-0 left-2 top-2 md:-left-8 md:top-2 lg:top-0 lg:-left-4 xl:top-2 xl:left-8 border-0 bg-orange-600 font-sans font-bold"
                    onClick={() => {
                        handleMenuItemClick('contact')
                    }}
                >
                    {t('greetingsButton')}
                </Button>
                <Image
                    src="/KvemoKartliMap.png"
                    alt="Plant logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-auto"
                />
            </div>
            <article className="w-4/5 md:w-2/5 lg:w-80 flex flex-center items-center flex-col max-[767px]:mt-4 md:ml-2 md:mr-auto md:px-0 max-[767px]:mx-auto">
                <h1 className="self-start md:mb-4 text-base font-bold lg:text-xl">
                    {t('common:georgianHouse')}
                </h1>
                <p className="self-start text-sm lg:text-base 2xl:text-lg text-gray-600">
                    {t('greetingsText')}
                </p>
            </article>
        </div>
    )
}
