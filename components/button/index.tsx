import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(['bg-gradient-180', 'text-[15px]', 'leading-[1.2]', 'py-[11px]'], {
  variants: {
    variant: {
      primary: [
        'font-bold',
        'text-[#222222]',
        'from-[#FEC936]',
        'to-[#F4E261]',
        'hover:from-[#FFA231]',
        'hover:to-[#F4E261]',
        'active:from-[#FFA231]',
        'active:to-[#F1926A]',
        'disabled:text-[#56568E]',
        'disabled:font-medium',
        'disabled:from-[#34345A]',
        'disabled:to-[#34345A]',
      ],
      secondary: [
        'font-bold',
        'text-white',
        'from-[#5A319D]',
        'to-[#402271]',
        'hover:text-[#E6C4E3]',
        'hover:from-[#5A319D]',
        'hover:to-[#402271]',
        'active:from-[#7D49D0]',
        'active:to-[#402271]',
        'disabled:text-[#474777]',
        'disabled:font-medium',
        'disabled:from-[#34345A]',
        'disabled:to-[#34345A]',
      ],
      tertiary: [
        'bg-[#D2D2F7] text-[#666666] hover:bg-[#B7B7E2] hover:text-[#868484] active:bg-[#9393C5] active:text-[#E9E9E9] disabled:bg-[#34345A] disabled:text-[#56568E]',
        'disabled:font-medium',
      ],
    },
    size: {
      small: ['w-[113px]'],
      medium: ['w-[195px]'],
      large: ['w-[300px]'],
    },
    option: {
      shadow: [
        'py-2',
        'shadow-[0_3.15px_0_#7E6DAF,0_-3.15px_0_#F1E76A]',
        'hover:shadow-[0_3.15px_0_#7E6DAF,0_-3.15px_0_#F1CB6A]',
      ],
      outline: [],
    },
    shape: {
      pill: ['rounded-[30px]'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    shape: 'pill',
    size: 'medium',
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, option, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={twMerge(buttonVariants({ variant, size, option, className }))} ref={ref} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button };
