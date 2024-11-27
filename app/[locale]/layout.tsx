// app/layout.tsx
import { Suspense } from 'react'
import type { Metadata } from 'next'
import initTranslations, { i18nNamespaces } from '../i18n'
import clsx from 'clsx'
import './globals.css'
import { Noto_Serif_Georgian } from 'next/font/google'
import TranslationsProvider from '@/app/providers/TranslationsProvider'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import Loading from './loading'

export const metadata: Metadata = {
    title: 'Georgian House LLC',
    description:
        'Pigs growing is our way to show - how can food change, depends on technology and professionality.',
}

const font = Noto_Serif_Georgian({
    subsets: ['latin', 'georgian', 'latin-ext'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

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
            <body className={clsx(font.className, 'antialiased')}>
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
