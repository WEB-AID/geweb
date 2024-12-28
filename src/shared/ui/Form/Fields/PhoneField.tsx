import clsx from 'clsx'
import { useController } from 'react-hook-form'
import { Input } from '../../shadcn/input'

interface PhoneFieldProps extends React.ComponentProps<typeof Input> {
    name: string
}

export const PhoneField = ({
    placeholder,
    className,
    name,
    ...props
}: PhoneFieldProps) => {
    const { field } = useController({ name })

    return (
        <Input
            onChange={(e) => {
                const value = e.target.value
                // Разрешаем ввод только цифр, пробелов, `+`, `-`
                const formattedValue = value.replace(/[^0-9+\-\s]/g, '')
                field.onChange(formattedValue)
            }}
            value={field.value || ''}
            className={clsx(
                'h-[40px] text-[16px] leading-[16px] rounded-[6px] w-full p-[12px] bg-bg3 border-[1px] placeholder:text-txt1 placeholder:opacity-30 placeholder:font-[500]',
                className
            )}
            placeholder={placeholder}
            type="text" // Используем текстовое поле, чтобы сохранить формат
            {...props}
        />
    )
}
