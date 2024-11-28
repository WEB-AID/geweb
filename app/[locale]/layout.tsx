// app/layout.tsx
import { Suspense } from 'react'
import type { Metadata } from 'next'
import initTranslations, { i18nNamespaces } from '../i18n'
import clsx from 'clsx'
import './globals.css'
import { Comfortaa, Schibsted_Grotesk } from 'next/font/google'
import TranslationsProvider from '@/app/providers/TranslationsProvider'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import Loading from './loading'

export const metadata: Metadata = {
    title: 'Georgian House LLC',
    description:
        'Pigs growing is our way to show - how can food change, depends on technology and professionality.',
}

const fontEn = Schibsted_Grotesk({
    subsets: ['latin', 'latin-ext'],
    weight: ['500'],
})
const fontRu = Comfortaa({
    subsets: ['cyrillic', 'cyrillic-ext'],
    weight: ['700'],
})

const fontKa = {
    className: 'locale-ka-font',
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    const { locale } = await params
    const { resources } = await initTranslations(locale, i18nNamespaces)

    return (
        <html lang={locale}>
            <head>
                {/* Вставка шрифта в head */}
                <link
                    href="https://fonts.cdnfonts.com/css/bpg-nino-mtavruli"
                    rel="stylesheet"
                />
            </head>
            <body
                className={clsx(
                    'antialiased',
                    locale === 'ka'
                        ? fontKa.className
                        : locale === 'en'
                        ? fontEn.className
                        : fontRu.className
                )}
            >
                <TranslationsProvider
                    locale={locale}
                    namespaces={i18nNamespaces}
                    resources={resources}
                >
                    <Header />
                    <Suspense fallback={<Loading />}>
                        <div className="pt-24 lg:pt-32">{children}</div>
                    </Suspense>
                    <Footer />
                </TranslationsProvider>
                <div id="portal-root" />
            </body>
        </html>
    )
}
