'use client'

import {
    type FormProviderProps,
    type FieldValues,
    type SubmitHandler,
    FormProvider as OriginalFormProvider,
} from 'react-hook-form'

interface FormProviderExProps<
    TFieldValues extends FieldValues,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TContext = unknown,
    TTransformedValues extends FieldValues | undefined = undefined
> extends FormProviderProps<TFieldValues, TContext, TTransformedValues> {
    className?: string
    onSubmit?: SubmitHandler<TFieldValues>
}

export function FormProvider<
    TFieldValues extends FieldValues,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TContext = unknown
>({
    className,
    children,
    onSubmit = () => {},
    ...props
}: FormProviderExProps<TFieldValues, TContext>) {
    return (
        <OriginalFormProvider {...props}>
            <form onSubmit={props.handleSubmit(onSubmit)} className={className}>
                {children}
            </form>
        </OriginalFormProvider>
    )
}
