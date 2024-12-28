import { z } from 'zod'

export const Schema = z.object({
    name: z
        .string()
        .min(5, { message: 'Name must be at least 5 characters long' }),
    surname: z.string().optional(),
    phoneNumber: z.preprocess(
        (value) => {
            if (typeof value === 'string') {
                // Удаляем все символы, кроме цифр, для подсчёта длины
                const digitsOnly = value.replace(/\D/g, '')
                return digitsOnly
            }
            return value
        },
        z
            .string()
            .min(9, { message: 'Phone number must have at least 9 digits' }) // Проверяем длину только цифр
    ),
    message: z.string().optional(),
})

export const defaultValues: Partial<z.infer<typeof Schema>> = {}
export type ContactFormType = z.infer<typeof Schema>
