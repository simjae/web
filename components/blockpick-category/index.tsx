import { cva, type VariantProps } from 'class-variance-authority';

import React from 'react';
import Image from 'next/image';
import TimeLimitIcon from './time-limit.svg';
import TimeLimitActiveIcon from './time-limit-active.svg';
import PrizeIcon from './prize.svg';
import PrizeActiveIcon from './prize-active.svg';
import FreeIcon from './free.svg';
import FreeActiveIcon from './free-active.svg';
import SurvivalIcon from './survival.svg';
import SurvivalActiveIcon from './survival-active.svg';
import { twMerge } from 'tailwind-merge';

const categoryVariants = cva([], {
  variants: {
    type: {
      'time-limit': [],
      free: [],
      prize: [],
      survival: [],
    },
  },
  defaultVariants: {
    type: 'time-limit',
  },
});

export interface BlockpickCategoryProps extends VariantProps<typeof categoryVariants> {
  type: 'time-limit' | 'free' | 'prize' | 'survival';
  isActive: boolean;
}

const ICONS = {
  'time-limit': {
    default: TimeLimitIcon,
    active: TimeLimitActiveIcon,
  },
  free: {
    default: FreeIcon,
    active: FreeActiveIcon,
  },
  prize: {
    default: PrizeIcon,
    active: PrizeActiveIcon,
  },
  survival: {
    default: SurvivalIcon,
    active: SurvivalActiveIcon,
  },
};

const CATEGORIES = {
  'time-limit': 'Time Limit',
  free: 'FREE',
  prize: 'PRIZE',
  survival: 'Survival',
};

const BlockPickCategory: React.FC<BlockpickCategoryProps> = (props) => {
  return (
    <div className="flex items-center gap-1">
      <Image src={ICONS[props.type][props.isActive ? 'active' : 'default']} alt="" />
      <p className={twMerge('text-[13px]', 'font-medium', props.isActive ? 'text-white' : 'text-[#959FDD]')}>
        {CATEGORIES[props.type]}
      </p>
    </div>
  );
};

export { BlockPickCategory };
