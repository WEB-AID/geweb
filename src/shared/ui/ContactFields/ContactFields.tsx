'use client'

import { useTranslation } from 'react-i18next'

export function ContactFields() {
    const { t } = useTranslation()

    return (
        <section
            className="mt-12 md:mt-20 w-2/3 md:w-4/5 xl:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            aria-labelledby="contact-options"
        >
            <h2 id="contact-options" className="sr-only">
                {t('contactsPage:seoreserved')}
            </h2>
            {/* Приедьте к нам */}
            <article
                className="bg-white shadow-3xl rounded-lg p-4 lg:p-6 text-center flex flex-col"
                aria-labelledby="visit-us"
            >
                <h3
                    id="visit-us"
                    className="text-base lg:text-xl font-semibold mb-2"
                >
                    {t('contactPage:comeToUs')}
                </h3>
                <p className="text-gray-600 mb-4 text-sm lg:text-base">
                    {t('contactPage:visitFactory')}
                </p>
                <address className="not-italic text-gray-800 font-medium text-sm lg:text-base">
                    <p>{t('contactPage:adressTitle')}</p>
                    <p className="mb-4">{t('contactPage:adressText')}</p>
                </address>
                <p className="mt-auto text-sm lg:text-base">
                    {t('contactPage:workingHoursTitle')}
                </p>
                <p className="text-sm lg:text-base">
                    {t('contactPage:mondayFriday')} 09:00 - 18:00
                </p>
            </article>
            {/* Позвоните нам */}
            <article
                className="bg-white shadow-3xl rounded-lg p-4 lg:p-6 text-center  flex flex-col"
                aria-labelledby="call-us"
            >
                <h3
                    id="call-us"
                    className="text-base lg:text-xl font-semibold mb-2"
                >
                    {t('contactPage:callUs')}
                </h3>
                <p className="text-gray-600 mb-4 text-sm lg:text-base">
                    {t('contactPage:contactUsByPhone')}
                </p>
                <div className="text-gray-800 font-medium flex flex-col h-full text-sm lg:text-base">
                    <p>{t('contactPage:telephone')}</p>
                    <p className="mb-auto text-sm lg:text-base">
                        <a href="tel:+995555123456">+995 511 277 273</a>
                    </p>
                    <p className="mt-auto text-sm lg:text-base">
                        {t('contactPage:workingHoursTitle')}
                    </p>
                    <p className="text-sm lg:text-base">
                        {t('contactPage:mondayFriday')} 09:00 - 18:00
                    </p>
                </div>
            </article>
            {/* Напишите нам */}
            <article
                className="bg-white shadow-3xl rounded-lg p-4 lg:p-6 text-center  flex flex-col"
                aria-labelledby="email-us"
            >
                <h3
                    id="email-us"
                    className="text-base lg:text-xl font-semibold mb-2"
                >
                    {t('contactPage:whiteUs')}
                </h3>
                <p className="text-gray-600 mb-4 text-sm lg:text-base">
                    {t('contactPage:contactUsByEmail')}
                </p>
                <div className="text-gray-800 font-medium text-sm lg:text-base">
                    <p>{t('contactPage:email')}</p>
                    <p className="text-sm lg:text-base">
                        <a href="mailto:lalala@gmail.com">lalala@gmail.com</a>
                    </p>
                </div>
                <p className="text-green-600 font-bold mt-auto text-sm lg:text-base">
                    {t('contactPage:allDayWorking')}
                </p>
            </article>
        </section>
    )
}
