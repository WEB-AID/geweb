import { z } from 'zod'

export const Schema = z.object({
    name: z
        .string()
        .min(5, { message: 'Name must be at least 5 characters long' }),
    surname: z.string().optional(),
    phoneNumber: z.preprocess(
        (value) => (typeof value === 'string' ? value.trim() : value), // Оставляем как строку
        z.string().regex(/^\d{9,}$/, {
            message: 'Phone number must have at least 9 digits',
        })
    ),
    message: z.string().optional(),
})

export const defaultValues: Partial<z.infer<typeof Schema>> = {}
export type ContactFormType = z.infer<typeof Schema>
