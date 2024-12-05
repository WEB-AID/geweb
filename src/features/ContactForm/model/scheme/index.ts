import { z } from 'zod'

// Схема
export const Schema = z.object({
    name: z.string().default(''),
    surname: z.string().default(''),
    phoneNumber: z.string().default(''),
    message: z.string().default(''),
})

// Генерация defaultValues на основе схемы
export const defaultValues: z.infer<typeof Schema> = Schema.parse({})
export type ContactFormType = z.infer<typeof Schema>
