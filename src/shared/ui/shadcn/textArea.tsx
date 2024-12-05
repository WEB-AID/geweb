import clsx from 'clsx'
import * as React from 'react'

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={clsx(
                'mt-2 flex h-[90px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-orange-500 focus-visible:border-2 focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = 'Textarea'

export { Textarea }
