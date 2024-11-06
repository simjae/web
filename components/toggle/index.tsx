'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';

const Toggle = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={twMerge(
      'peer inline-flex w-[41px] h-[22px] shrink-0 cursor-pointer items-center rounded-[11px] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-offset-[3px] focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[linear-gradient(90deg,#4D4D97_0%,#4E4E97_68.18%)] data-[state=unchecked]:bg-[#31306D] disabled:bg-[#34345A]',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={twMerge(
        'pointer-events-none block h-4 w-4 rounded-full bg-[#FBD347] data-[state=unchecked]:bg-[#414180] shadow-[0_1px_2px_0_rgba(2,8,36,0.6)] ring-0 transition-transform data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-[3px] data-[disabled]:bg-[#515171]',
      )}
    />
  </SwitchPrimitives.Root>
));
Toggle.displayName = SwitchPrimitives.Root.displayName;

export { Toggle };
