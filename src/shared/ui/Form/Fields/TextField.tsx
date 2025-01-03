import clsx from 'clsx'
import { useController } from 'react-hook-form'
import { Textarea } from '../../shadcn/textArea'

interface TextFieldProps extends React.ComponentProps<'textarea'> {
    name: string
}
export const TextField = ({
    placeholder,
    // prefix,
    className,
    name,
    ...props
}: TextFieldProps) => {
    const { field } = useController({ name })

    return (
        <Textarea
            onChange={field.onChange}
            value={field.value}
            className={clsx(
                'text-[16px] leading-[20px] rounded-[6px] w-full p-[12px] bg-bg3 border-[1px] placeholder:text-txt1 placeholder:opacity-30 placeholder:font-[500]',
                className
            )}
            placeholder={placeholder}
            rows={5} // Задаем количество строк
            {...props}
        />
    )
}
