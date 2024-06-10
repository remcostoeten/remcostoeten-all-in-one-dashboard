'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from '@/core/utils/cn'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            'shadfixed shadinset-0 shadz-50 shadbg-black/80 shad data-[state=open]:shadanimate-in data-[state=closed]:shadanimate-out data-[state=closed]:shadfade-out-0 data-[state=open]:shadfade-in-0',
            className
        )}
        {...props}
    />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                'shadfixed shadleft-[50%] shadtop-[50%] shadz-50 shadgrid shadw-full shadmax-w-lg shadtranslate-x-[-50%] shadtranslate-y-[-50%] shadgap-4 shadborder shadbg-background shadp-6 shadshadow-lg shadduration-200 data-[state=open]:shadanimate-in data-[state=closed]:shadanimate-out data-[state=closed]:shadfade-out-0 data-[state=open]:shadfade-in-0 data-[state=closed]:shadzoom-out-95 data-[state=open]:shadzoom-in-95 data-[state=closed]:shadslide-out-to-left-1/2 data-[state=closed]:shadslide-out-to-top-[48%] data-[state=open]:shadslide-in-from-left-1/2 data-[state=open]:shadslide-in-from-top-[48%] sm:shadrounded-lg',
                className
            )}
            {...props}
        >
            {children}
            <DialogPrimitive.Close className='shadabsolute shadright-4 shadtop-4 shadrounded-sm shadopacity-70 shadring-offset-background shadtransition-opacity hover:shadopacity-100 focus:shadoutline-none focus:shadring-2 focus:shadring-ring focus:shadring-offset-2 disabled:shadpointer-events-none data-[state=open]:shadbg-accent data-[state=open]:shadtext-muted-foreground'>
                <X className='shadh-4 shadw-4' />
                <span className='shadsr-only'>Close</span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'shadflex shadflex-col shadspace-y-1.5 shadtext-center sm:shadtext-left',
            className
        )}
        {...props}
    />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'shadflex shadflex-col-reverse sm:shadflex-row sm:shadjustify-end sm:shadspace-x-2',
            className
        )}
        {...props}
    />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(
            'shadtext-lg shadfont-semibold shadleading-none shadtracking-tight',
            className
        )}
        {...props}
    />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn('shadtext-sm shadtext-muted-foreground', className)}
        {...props}
    />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription
}
