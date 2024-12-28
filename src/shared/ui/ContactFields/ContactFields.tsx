'use client'

import { useTranslation } from 'react-i18next'

export function ContactFields() {
    const { t } = useTranslation()

    return (
        <section
            className="mt-24 w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            aria-labelledby="contact-options"
        >
            <h2 id="contact-options" className="sr-only">
                {t('contactsPage:seoreserved')}
            </h2>
            {/* Приедьте к нам */}
            <article
                className="bg-white shadow-3xl rounded-lg p-6 text-center flex flex-col"
                aria-labelledby="visit-us"
            >
                <h3 id="visit-us" className="text-xl font-semibold mb-2">
                    {t('contactPage:comeToUs')}
                </h3>
                <p className="text-gray-600 mb-4">
                    {t('contactPage:visitFactory')}
                </p>
                <address className="not-italic text-gray-800 font-medium">
                    <p>{t('contactPage:adressTitle')}</p>
                    <p className="mb-4">{t('contactPage:adressText')}</p>
                </address>
                <p className="mt-auto">{t('contactPage:workingHoursTitle')}</p>
                <p>{t('contactPage:mondayFriday')} 09:00 - 18:00</p>
            </article>
            {/* Позвоните нам */}
            <article
                className="bg-white shadow-3xl rounded-lg p-6 text-center  flex flex-col"
                aria-labelledby="call-us"
            >
                <h3 id="call-us" className="text-xl font-semibold mb-2">
                    {t('contactPage:callUs')}
                </h3>
                <p className="text-gray-600 mb-4">
                    {t('contactPage:contactUsByPhone')}
                </p>
                <div className="text-gray-800 font-medium flex flex-col h-full">
                    <p>{t('contactPage:telephone')}</p>
                    <p className="mb-auto">
                        <a href="tel:+995555123456">+995 511 277 273</a>
                    </p>
                    <p className="mt-auto">
                        {t('contactPage:workingHoursTitle')}
                    </p>
                    <p>{t('contactPage:mondayFriday')} 09:00 - 18:00</p>
                </div>
            </article>
            {/* Напишите нам */}
            <article
                className="bg-white shadow-3xl rounded-lg p-6 text-center  flex flex-col"
                aria-labelledby="email-us"
            >
                <h3 id="email-us" className="text-xl font-semibold mb-2">
                    {t('contactPage:whiteUs')}
                </h3>
                <p className="text-gray-600 mb-4">
                    {t('contactPage:contactUsByEmail')}
                </p>
                <div className="text-gray-800 font-medium">
                    <p>{t('contactPage:email')}</p>
                    <p>
                        <a href="mailto:lalala@gmail.com">lalala@gmail.com</a>
                    </p>
                </div>
                <p className="text-green-600 font-bold mt-auto">
                    {t('contactPage:allDayWorking')}
                </p>
            </article>
        </section>
    )
}