'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';

const Dialog = DialogPrimitive.Root;
const DialogClose = DialogPrimitive.Close;

const containerElement = globalThis?.document?.querySelector('main');
const DialogHead = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div className="pt-[30px]">
    <div
      className={twMerge('absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]', props.className)}
      ref={ref}
    >
      {props.children}
    </div>
  </div>
));
DialogHead.displayName = 'DialogHead';

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const innerRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);
  React.useLayoutEffect(() => {
    if (innerRef.current) {
      const element = innerRef.current;
      const rects = element.parentElement!.getClientRects();
      element.style.left = `${rects[0].left}px`;
      element.style.right = `${document.body.clientWidth - rects[0].right}px`;
    }
  }, []);

  return (
    <DialogPrimitive.Portal container={containerElement}>
      <DialogPrimitive.Overlay
        ref={innerRef}
        className={twMerge(
          'fixed inset-0 z-20 bg-[#020101]/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        )}
      />

      <DialogPrimitive.Content
        ref={ref}
        className={twMerge(
          'fixed z-20 max-w-dialog-max left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-6 py-5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[50%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[50%] rounded-[21px] bg-gradient-180 from-[#5B329E] to-[#3F226F]',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

DialogContent.displayName = DialogPrimitive.Content.displayName;
export { Dialog, DialogClose, DialogHead, DialogContent };
