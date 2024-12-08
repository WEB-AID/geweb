'use client'

import { Button } from '@/shared/ui'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/shadcn/dialog'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

interface LoginModal {
    TriggerClassName?: string
    ContentBodyClassName?: string
}

export function ContactFormModal({
    TriggerClassName,
    ContentBodyClassName,
}: LoginModal) {
    const { t, i18n } = useTranslation()
    const currentLocale = i18n.language

    return (
        <Dialog>
            {/* asChild почитать для вложенніх елементов */}
            <DialogTrigger className={clsx('', TriggerClassName)} asChild>
                <Button
                    className="bg-orange-600 mt-4 w-auto ml-auto"
                    type="submit"
                >
                    <div className={`${currentLocale === 'ka' ? 'mt-1' : ''}`}>
                        {t('common:contactUsSubmit')}
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-sm">
                        {t('common:contactUsModalHeader')}
                    </DialogTitle>
                    <DialogDescription
                        className={clsx('text-sm', ContentBodyClassName)}
                    >
                        {t('common:contactUsModalText')}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
