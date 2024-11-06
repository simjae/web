'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { twMerge } from 'tailwind-merge';

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={twMerge('fixed inset-0 z-50 bg-[#020101]/80', className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={twMerge(
        'fixed inset-x-0 bottom-0 z-50 mt-24 px-5 flex h-auto flex-col rounded-t-[38px] bg-[#2E2E67]',
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 mb-3 h-1 w-[61px] rounded-[3.5px] bg-[#1A1A4C]" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerContent };
