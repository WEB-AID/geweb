'use client'

import { Button } from '@/shared/ui'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/shadcn/dialog'
import clsx from 'clsx'

interface LoginModal {
    TriggerClassName?: string
    ContentBodyClassName?: string
}

export function LoginModal({
    TriggerClassName,
    ContentBodyClassName,
}: LoginModal) {
    return (
        <Dialog>
            {/* asChild почитать для вложенніх елементов */}
            <DialogTrigger className={clsx('', TriggerClassName)} asChild>
                <Button
                    variant="outline"
                    className="border-0 h-2 bg-orange-900 text-slate-100 p-3 font-sans font-semibold"
                >
                    LOGIN
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription></DialogDescription>
                    <div className={clsx('', ContentBodyClassName)}>
                        <form>
                            <input placeholder="Login" />
                            <input className="ml-2" placeholder="Password" />
                        </form>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
