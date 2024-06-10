import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/core/utils/cn'

const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        className={cn(
            'shadrelative shadz-10 shadflex shadmax-w-max shadflex-1 shaditems-center shadjustify-center',
            className
        )}
        {...props}
    >
        {children}
        <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn(
            'shadgroup shadflex shadflex-1 shadlist-none shaditems-center shadjustify-center shadspace-x-1',
            className
        )}
        {...props}
    />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
    'shadgroup shadinline-flex shadh-10 shadw-max shaditems-center shadjustify-center shadrounded-md shadbg-background shadpx-4 shadpy-2 shadtext-sm shadfont-medium shadtransition-colors hover:shadbg-accent hover:shadtext-accent-foreground focus:shadbg-accent focus:shadtext-accent-foreground focus:shadoutline-none disabled:shadpointer-events-none disabled:shadopacity-50 data-[active]:shadbg-accent/50 data-[state=open]:shadbg-accent/50'
)

const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(navigationMenuTriggerStyle(), 'shadgroup', className)}
        {...props}
    >
        {children}{' '}
        <ChevronDown
            className='shadrelative shadtop-[1px] shadml-1 shadh-3 shadw-3 shadtransition shadduration-200 group-data-[state=open]:shadrotate-180'
            aria-hidden='true'
        />
    </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            'shadleft-0 shadtop-0 shadw-full data-[motion^=from-]:shadanimate-in data-[motion^=to-]:shadanimate-out data-[motion^=from-]:shadfade-in data-[motion^=to-]:shadfade-out data-[motion=from-end]:shadslide-in-from-right-52 data-[motion=from-start]:shadslide-in-from-left-52 data-[motion=to-end]:shadslide-out-to-right-52 data-[motion=to-start]:shadslide-out-to-left-52 md:shadabsolute md:shadw-auto shad',
            className
        )}
        {...props}
    />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div
        className={cn(
            'shadabsolute shadleft-0 shadtop-full shadflex shadjustify-center'
        )}
    >
        <NavigationMenuPrimitive.Viewport
            className={cn(
                'shadorigin-top-center shadrelative shadmt-1.5 shadh-[var(--radix-navigation-menu-viewport-height)] shadw-full shadoverflow-hidden shadrounded-md shadborder shadbg-popover shadtext-popover-foreground shadshadow-lg data-[state=open]:shadanimate-in data-[state=closed]:shadanimate-out data-[state=closed]:shadzoom-out-95 data-[state=open]:shadzoom-in-90 md:shadw-[var(--radix-navigation-menu-viewport-width)]',
                className
            )}
            ref={ref}
            {...props}
        />
    </div>
))
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
            'shadtop-full shadz-[1] shadflex shadh-1.5 shaditems-end shadjustify-center shadoverflow-hidden data-[state=visible]:shadanimate-in data-[state=hidden]:shadanimate-out data-[state=hidden]:shadfade-out data-[state=visible]:shadfade-in',
            className
        )}
        {...props}
    >
        <div className='shadrelative shadtop-[60%] shadh-2 shadw-2 shadrotate-45 shadrounded-tl-sm shadbg-border shadshadow-md' />
    </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName

export {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport
}
