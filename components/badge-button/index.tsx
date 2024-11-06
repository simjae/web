import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const BadgeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={twMerge(
          'px-3 py-0.5 rounded-[50px] text-[13px] leading-[20px] font-semibold bg-[#4F4E9F] text-white hover:bg-[#323182] active:bg-[#3937BF] disabled:bg-[#34345A] disabled:text-[#56568E]',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

BadgeButton.displayName = 'BadgeButton';

export { BadgeButton };
