import clsx from 'clsx'
import * as React from 'react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={clsx(
                    'mt-2 w-full h-10 px-3 py-2 flex rounded-md border border-input bg-background text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-orange-500 focus-visible:border-2 focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = 'Input'

export { Input }
