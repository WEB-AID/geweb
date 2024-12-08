'use client'

import { AppForm } from '@/shared/ui/Form'
import { NameField } from '@/shared/ui/Form/Fields/NameField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { defaultValues, Schema } from '../model/scheme'
import { TextField } from '@/shared/ui/Form/Fields/TextField'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type ContactFormType = z.infer<typeof Schema>

interface ModalSlot {
    ModalSlot: ReactNode
}

export function ContactForm({ ModalSlot }: ModalSlot) {
    const { t } = useTranslation()
    const formProps = useForm<ContactFormType>({
        resolver: zodResolver(Schema),
        mode: 'all',
        defaultValues,
    })
    const { reset } = formProps // Деструктурируем метод reset

    const onSubmit = (data: ContactFormType) => {
        console.log(data)
        reset() // Сбрасываем значения формы после сабмита
    }

    return (
        <AppForm
            className="p-4 w-4/5 lg:w-1/2 h-96 flex flex-col mx-auto my-auto"
            onSubmit={onSubmit}
            {...formProps}
        >
            <h2 className="text-orange-500 text-xl font-bold">
                {t('common:contactUsTitle')}
            </h2>
            <NameField placeholder="Alex" name="name" />
            <NameField placeholder="Richardson" name="surname" />
            <NameField placeholder="+995-555-555-555" name="phoneNumber" />
            <TextField
                placeholder="Hi! Call me please! I want to speak about pigs =)"
                name="message"
                className="h-40"
            />
            {ModalSlot}
        </AppForm>
    )
}
