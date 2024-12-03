'use client'

import { Button } from '@/shared/ui'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Greetings() {
    const { t } = useTranslation()

    return (
        <div className="py-4 px-6 flex flex-col items-center md:flex-row bg-gray-100">
            <div className="w-3/4 md:w-96 lg:w-2/5 relative md:ml-auto max-[767px]:mx-auto md:mr-2">
                <Button
                    variant="default"
                    size="sm"
                    className="h-2 p-3 lg:h-10 absolute max-[600px]:-left-10 max-[600px]:top-2 left-2 top-2 lg:top-0 lg:left-0 xl:top-4 xl:left-4 border-0 bg-orange-600 font-sans font-bold"
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
            <article className="w-3/4 flex flex-center items-center flex-col md:w-2/5 lg:w-1/3 max-[767px]:mt-4 md:ml-2 md:mr-auto md:px-0 max-[767px]:mx-auto">
                <h1 className="self-start md:mb-4 text-sm font-bold lg:text-xl">
                    {t('common:georgianHouse')}
                </h1>
                <p className="self-start text-sm lg:text-base text-gray-700">
                    {t('greetingsText')}
                </p>
            </article>
        </div>
    )
}
