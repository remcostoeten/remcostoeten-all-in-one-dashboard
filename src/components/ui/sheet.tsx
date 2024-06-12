'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/core/utils/cn'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay
        className={cn(
            'shadfixed shadinset-0 shadz-50 shadbg-black/80 shad data-[state=open]:shadanimate-in data-[state=closed]:shadanimate-out data-[state=closed]:shadfade-out-0 data-[state=open]:shadfade-in-0',
            className
        )}
        {...props}
        ref={ref}
    />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
    'shadfixed shadz-50 shadgap-4 shadbg-background shadp-6 shadshadow-lg shadtransition shadease-in-out data-[state=open]:shadanimate-in data-[state=closed]:shadanimate-out data-[state=closed]:shadduration-300 data-[state=open]:shadduration-500',
    {
        variants: {
            side: {
                top: 'shadinset-x-0 shadtop-0 shadborder-b data-[state=closed]:shadslide-out-to-top data-[state=open]:shadslide-in-from-top',
                bottom: 'shadinset-x-0 shadbottom-0 shadborder-t data-[state=closed]:shadslide-out-to-bottom data-[state=open]:shadslide-in-from-bottom',
                left: 'shadinset-y-0 shadleft-0 shadh-full shadw-3/4 shadborder-r data-[state=closed]:shadslide-out-to-left data-[state=open]:shadslide-in-from-left sm:shadmax-w-sm',
                right: 'shadinset-y-0 shadright-0 shadh-full shadw-3/4 shad shadborder-l data-[state=closed]:shadslide-out-to-right data-[state=open]:shadslide-in-from-right sm:shadmax-w-sm'
            }
        },
        defaultVariants: {
            side: 'right'
        }
    }
)

interface SheetContentProps
    extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
        VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Content>,
    SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
    <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
            ref={ref}
            className={cn(sheetVariants({ side }), className)}
            {...props}
        >
            {children}
            <SheetPrimitive.Close className='shadabsolute shadright-4 shadtop-4 shadrounded-sm shadopacity-70 shadring-offset-background shadtransition-opacity hover:shadopacity-100 focus:shadoutline-none focus:shadring-2 focus:shadring-ring focus:shadring-offset-2 disabled:shadpointer-events-none data-[state=open]:shadbg-secondary'>
                <X className='shadh-4 shadw-4' />
                <span className='shadsr-only'>Close</span>
            </SheetPrimitive.Close>
        </SheetPrimitive.Content>
    </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'shadflex shadflex-col shadspace-y-2 shadtext-center sm:shadtext-left',
            className
        )}
        {...props}
    />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({
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
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Title
        ref={ref}
        className={cn(
            'shadtext-lg shadfont-semibold shadtext-foreground',
            className
        )}
        {...props}
    />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Description
        ref={ref}
        className={cn('shadtext-sm shadtext-muted-foreground', className)}
        {...props}
    />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription
}
