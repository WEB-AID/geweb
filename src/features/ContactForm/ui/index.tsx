'use client'

import { AppForm } from '@/shared/ui/Form'
import { TextField } from '@/shared/ui/Form/Fields/TextField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { defaultValues, Schema } from '../model/scheme'

type ContactFormType = z.infer<typeof Schema>

export function ContactForm() {
    const formProps = useForm<ContactFormType>({
        resolver: zodResolver(Schema),
        mode: 'all',
        defaultValues,
    })

    const onSubmit = (data: ContactFormType) => {
        console.log(data)
    }

    return (
        <AppForm
            className="border-2 border-black p-4 w-[300px] h-96 flex mx-auto my-auto"
            onSubmit={onSubmit}
            {...formProps}
        >
            <TextField name="name" />
            <TextField name="surname" />
            <button type="submit">submit</button>
        </AppForm>
    )
}
