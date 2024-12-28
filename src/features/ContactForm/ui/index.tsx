'use client'

import { AppForm } from '@/shared/ui/Form'
import { NameField } from '@/shared/ui/Form/Fields/NameField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormType, defaultValues, Schema } from '../model/scheme'
import { TextField } from '@/shared/ui/Form/Fields/TextField'
import { useTranslation } from 'react-i18next'
import React, { ReactElement } from 'react'
import { PhoneField } from '@/shared/ui/Form/Fields/PhoneField'

interface ModalSlotProps {
    isValid: boolean
}

interface ContactFormProps {
    ModalSlot: ReactElement<ModalSlotProps>
}

export function ContactForm({ ModalSlot }: ContactFormProps) {
    const { t } = useTranslation()
    const formProps = useForm<ContactFormType>({
        resolver: zodResolver(Schema),
        mode: 'all',
        defaultValues,
    })
    const {
        reset,
        formState: { errors, isValid },
    } = formProps

    const onSubmit = (data: ContactFormType) => {
        console.log(data)
        reset({ name: '', surname: '', phoneNumber: undefined, message: '' })
    }

    return (
        <AppForm
            className="w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 flex flex-col mx-auto py-8"
            onSubmit={onSubmit}
            {...formProps}
        >
            <h2 className="text-orange-500 text-xl font-bold">
                {t('common:contactUsTitle')}
            </h2>
            <div>
                <NameField placeholder="Mamuka" name="name" />
                {errors.name && (
                    <p className="text-red-500 text-sm">
                        {errors.name.message}
                    </p>
                )}
            </div>
            <div>
                <NameField placeholder="Labidze" name="surname" />
                {errors.surname && (
                    <p className="text-red-500 text-sm">
                        {errors.surname.message}
                    </p>
                )}
            </div>
            <div>
                <PhoneField placeholder="555-111-222" name="phoneNumber" />
                {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">
                        {errors.phoneNumber.message}
                    </p>
                )}
            </div>
            <div>
                <TextField
                    placeholder="Hi! Call me please! ..."
                    name="message"
                    className="h-40"
                />
                {errors.message && (
                    <p className="text-red-500 text-sm">
                        {errors.message.message}
                    </p>
                )}
            </div>
            {React.cloneElement(ModalSlot, { isValid })}
        </AppForm>
    )
}
