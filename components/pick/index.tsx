import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const pickVariants = cva(['absolute', 'top-0', 'left-0', 'right-0', 'h-[93.75%]', 'p-[0.5px]', 'bg-gradient-180'], {
  variants: {
    count: {
      1: ['from-[#FCFAFF]', 'to-[#9C77CA]'],
      2: ['from-[#FCFAFF]', 'to-[#F9B1FF]'],
      3: ['from-[#FCFAFF]', 'to-[#5865A8]'],
      4: ['from-[#C2FAFA]', 'to-[#298686]'],
      5: ['from-[#FCFAFF]', 'to-[#A7A858]'],
      6: ['from-[#FCFAFF]', 'to-[#E2AA3C]'],
      7: ['from-[#FCFAFF]', 'to-[#F37357]'],
      [-1]: ['from-[#363671]', 'to-[#5865A8]'],
    },
  },
});

const pickContentVariants = cva(['w-full', 'h-full', 'bg-gradient-180', 'flex', 'items-center', 'justify-center'], {
  variants: {
    count: {
      1: ['from-[#C597FF]', 'to-[#FFFFFF]'],
      2: ['from-[#FFC4F3]', 'to-[#FFFFFF]'],
      3: ['from-[#97BBFF]', 'to-[#FFFFFF]'],
      4: ['from-[#68D5D5]', 'to-[#FFFFFF]'],
      5: ['from-[#E4FF97]', 'to-[#FFFFFF]'],
      6: ['from-[#FFBC39]', 'to-[#FFFFFF]'],
      7: ['from-[#F9876E]', 'to-[#FFFFFF]'],
      [-1]: ['from-[#23234E]', 'to-[#23234E]'],
    },
    isCurrent: {
      true: '',
    },
  },
  compoundVariants: [
    {
      count: 1,
      isCurrent: true,
      class: ['from-[#9A4BFF]', 'to-[#F4B2FF]'],
    },
    {
      count: 2,
      isCurrent: true,
      class: ['from-[#F57DFF]', 'to-[#FFC9ED]'],
    },
    {
      count: 3,
      isCurrent: true,
      class: ['from-[#71A2FF]', 'to-[#C4D1FF]'],
    },
    {
      count: 4,
      isCurrent: true,
      class: ['from-[#42B9B9]', 'to-[#9CF6D0]'],
    },
    {
      count: 5,
      isCurrent: true,
      class: ['from-[#ADCC54]', 'to-[#EDFFA5]'],
    },
    {
      count: 6,
      isCurrent: true,
      class: ['from-[#FFAA06]', 'to-[#FFCD83]'],
    },
    {
      count: 7,
      isCurrent: true,
      class: ['from-[#FE7455]', 'to-[#FFC2BE]'],
    },
    {
      count: -1,
      isCurrent: true,
      class: ['from-[#17173F]', 'to-[#17173F]'],
    },
  ],
});

const shadowVariants = cva(['absolute', 'left-0', 'right-0', 'bottom-0', 'h-[93.75%]'], {
  variants: {
    count: {
      1: ['bg-[#9B72BB]'],
      2: ['bg-[#FEB9FF]'],
      3: ['bg-[#5E83E1]'],
      4: ['bg-[#419F9F]'],
      5: ['bg-[#BCBD47]'],
      6: ['bg-[#FCAA0B]'],
      7: ['bg-[#F4785D]'],
      [-1]: ['bg-[#14143D]'],
    },
  },
});

const iconVariants = cva(['w-[56.41%]', 'h-auto'], {
  variants: {
    count: {
      1: ['text-[#A975EA]'],
      2: ['text-[#FF94E7]'],
      3: ['text-[#88ADF4]'],
      4: ['text-[#57ADAD]'],
      5: ['text-[#BCBD47]'],
      6: ['text-[#FFB016]'],
      7: ['text-[#ED635699]'],
      [-1]: ['text-[#313165]'],
    },
    isCurrent: {
      true: '',
    },
  },
  compoundVariants: [
    {
      count: 1,
      isCurrent: true,
      class: ['text-[#73338D]'],
    },
    {
      count: 2,
      isCurrent: true,
      class: ['text-[#E051C1]'],
    },
    {
      count: 3,
      isCurrent: true,
      class: ['text-[#4482F8]'],
    },
    {
      count: 4,
      isCurrent: true,
      class: ['text-[#339393]'],
    },
    {
      count: 5,
      isCurrent: true,
      class: ['text-[#A3A431]'],
    },
    {
      count: 6,
      isCurrent: true,
      class: ['text-[#FF881A]'],
    },
    {
      count: 7,
      isCurrent: true,
      class: ['text-[#F64332]/60'],
    },
  ],
});

const Pick: React.FC<PickProps> = (props) => {
  const radius = typeof props.radius === 'number' ? props.radius : 8;

  return (
    <div className={twMerge('relative w-full pb-[100%]', props.className)}>
      <div
        className={twMerge(shadowVariants({ count: props.count }))}
        style={{
          borderRadius: `${radius}px`,
        }}
      />
      <div
        className={twMerge(pickVariants({ count: props.count }))}
        style={{
          borderRadius: `${radius}px`,
        }}
      >
        <div
          className={twMerge(
            pickContentVariants({ count: props.count, isCurrent: props.isCurrent }),
            props.isSelected && 'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)_inset]',
          )}
          style={{
            borderRadius: `${radius - 0.5}px`,
          }}
        >
          {props.isSelected ? (
            <img className="w-[80%] h-auto" src={props.profileImageUrl} alt="" />
          ) : props.count === -1 ? (
            <svg
              width="15"
              height="15"
              className={twMerge(iconVariants({ count: props.count }))}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.3665 1.3645L13.4676 13.4656"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.3667 13.4656L13.4678 1.3645"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={twMerge(iconVariants({ count: props.count, isCurrent: props.isCurrent }))}
              width="24"
              height="24"
              viewBox="0 0 19 14"
              fill="none"
            >
              <path
                d="M17.2514 2.41589L6.38867 12.4992L1.66803 8.11728"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export { Pick };

export interface PickProps extends React.HTMLAttributes<HTMLDivElement> {
  count: -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  isSelected?: boolean;
  isCurrent?: boolean;
  profileImageUrl?: string;
  radius?: number;
}
