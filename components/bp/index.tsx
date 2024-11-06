'use client';
import BPLarge from './bp-large.png';
import BPMedium from './bp-medium.png';
import BPSmall from './bp-small.png';
import BPDisabled from './bg-disabled.svg';
import BPIcon from './bp.svg';

import React, { useState, useCallback, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import BPAnimated from './animated';

export interface BPProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof bpVariants> {
  value: number;
  disabled?: boolean;
}

const bpVariants = cva([], {
  variants: {
    size: {
      large: ['text-[40px]', 'font-black', 'from-[#F0DD34]', 'to-[#EE941F]'],
      medium: ['text-[26px]', 'font-black', 'from-[#F0DD34]', 'to-[#EE941F]'],
      small: ['text-[20px]', 'font-black', 'from-[#F0DD34]', 'to-[#EE941F]'],
      list: ['text-lg', 'font-semibold', 'text-white'],
    },
    disabled: {
      true: ['text-[#56568E]'],
      false: ['text-transparent', 'bg-clip-text', 'bg-gradient-180'],
    },
  },
  defaultVariants: {
    size: 'list',
    disabled: false,
  },
});

const ICONS = {
  large: BPLarge,
  medium: BPMedium,
  small: BPSmall,
  list: BPIcon,
};

const BP: React.FC<BPProps> = (props) => {
  return (
    <div className="flex items-center gap-1">
      <p className={twMerge(bpVariants({ size: props.size, disabled: props.disabled }))}>
        {Number(props.value).toLocaleString()}
      </p>
      <Image
        className={twMerge(
          props.size === 'large' && 'w-[44px] h-[44px]',
          props.size === 'medium' && 'w-[26px] h-[26px]',
          props.size === 'small' && 'w-[20px] h-[20px]',
          props.size === 'list' && 'w-[17px] h-[17px]',
        )}
        src={props.disabled ? BPDisabled : ICONS[props.size!]}
        alt="BP 아이콘"
      />
    </div>
  );
};

export { BP, BPAnimated };
