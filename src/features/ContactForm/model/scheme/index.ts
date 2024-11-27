import { z } from 'zod'

// Схема
export const Schema = z.object({
    name: z.string().default('123'),
    surname: z.string().default('333'),
})

// Генерация defaultValues на основе схемы
export const defaultValues: z.infer<typeof Schema> = Schema.parse({})
export type ContactFormType = z.infer<typeof Schema>
