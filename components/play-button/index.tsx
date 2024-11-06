import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(['bg-gradient-180', 'text-lg', 'font-black', 'px-12', 'py-1.5'], {
  variants: {
    variant: {
      primary: [
        'text-[#222222]',
        'from-[#FEC936]',
        'to-[#F4E261]',
        'group-hover:from-[#FFA231]',
        'group-hover:to-[#F4E261]',
        'group-active:from-[#FFA231]',
        'group-active:to-[#F1926A]',
        'group-disabled:text-[#474777]',
        'group-disabled:from-[#34345A]',
        'group-disabled:to-[#34345A]',
      ],
      secondary: [
        'text-white',
        'from-[#5A319D]',
        'to-[#402271]',
        'group-hover:text-[#E6C4E3]',
        'group-hover:from-[#5A319D]',
        'group-hover:to-[#402271]',
        'group-active:from-[#7D49D0]',
        'group-active:to-[#402271]',
        'group-disabled:text-[#474777]',
        'group-disabled:from-[#34345A]',
        'group-disabled:to-[#34345A]',
      ],
    },
    size: {
      small: ['w-[156px]'],
      large: ['w-[242px]'],
    },
    option: {
      shadow: [
        'shadow-[0_10px_10px_0_#00000040]',
        // 'py-2',
        // 'shadow-[0_3.15px_0_#7E6DAF,0_-3.15px_0_#F1E76A]',
        // 'hover:shadow-[0_3.15px_0_#7E6DAF,0_-3.15px_0_#F1CB6A]'
      ],
      outline: [],
    },
    shape: {
      square: ['rounded-[9px]'],
      pill: ['rounded-[30px]'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'large',
    option: 'shadow',
    shape: 'square',
  },
});

const PlayButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const Comp = props.asChild ? Slot : 'button';
  return (
    <Comp className="group relative" ref={ref} onClick={props.onClick} disabled={props.disabled}>
      {props.option === 'shadow' && (
        <div className="absolute left-0 right-0 bottom-0 -top-[2.65px] rounded-[9px] bg-[#F1E76A] group-hover:bg-[#F1CB6A] group-disabled:bg-[#353563]" />
      )}
      {props.option === 'shadow' && (
        <div className="absolute left-0 right-0 top-0 -bottom-[2.65px] rounded-[9px] bg-[#7E6DAF] group-disabled:bg-[#23234E]" />
      )}
      <div className={twMerge('relative', buttonVariants({ variant: props.variant, className: props.className }))}>
        {props.children}
      </div>
    </Comp>
  );
});

PlayButton.displayName = 'PlayButton';

export { PlayButton };
