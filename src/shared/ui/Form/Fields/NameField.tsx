import clsx from 'clsx'
import { useController } from 'react-hook-form'
import { Input } from '../../shadcn/input'

interface TextFieldProps extends React.ComponentProps<typeof Input> {
    name: string
}

export const NameField = ({
    placeholder,
    // prefix,
    className,
    name,
    ...props
}: TextFieldProps) => {
    const { field } = useController({ name })

    return (
        <Input
            onChange={field.onChange}
            value={field.value}
            className={clsx(
                'h-[40px] text-[16px] leading-[16px] rounded-[6px] w-full p-[12px] bg-bg3 border-[1px] placeholder:text-txt1 placeholder:opacity-30 placeholder:font-[500]',
                className
            )}
            placeholder={placeholder}
            {...props}
        />
    )
}
