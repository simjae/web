'use client';
import BPLarge from './bp-large.png';
import BPMedium from './bp-medium.png';
import BPSmall from './bp-small.png';
import BPIcon from './bp.svg';

import React, { useState, useCallback, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export interface BPProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof bpVariants> {
  value: number;
}

const bpVariants = cva([], {
  variants: {
    size: {
      large: [
        'text-[40px]',
        'font-black',
        'text-transparent',
        'bg-clip-text',
        'bg-gradient-180',
        'from-[#F0DD34]',
        'to-[#EE941F]',
      ],
      medium: [
        'text-[26px]',
        'font-black',
        'text-transparent',
        'bg-clip-text',
        'bg-gradient-180',
        'from-[#F0DD34]',
        'to-[#EE941F]',
      ],
      small: [
        'text-[20px]',
        'font-black',
        'text-transparent',
        'bg-clip-text',
        'bg-gradient-180',
        'from-[#F0DD34]',
        'to-[#EE941F]',
      ],
      list: ['text-lg', 'font-semibold', 'text-white'],
    },
  },
  defaultVariants: {
    size: 'list',
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
      <p className={twMerge(bpVariants({ size: props.size }), 'flex')}>
        <Animation str={Number(props.value).toLocaleString()} />
      </p>
      <Image
        className={twMerge(
          props.size === 'large' && 'w-[44px] h-[44px]',
          props.size === 'medium' && 'w-[26px] h-[26px]',
          props.size === 'small' && 'w-[20px] h-[20px]',
          props.size === 'list' && 'w-[17px] h-[17px]',
        )}
        src={ICONS[props.size!]}
        alt="BP 아이콘"
      />
    </div>
  );
};

// 자바스크립트 맥스 넘버값 9007199254740991
function Animation({ str }: { str: string }) {
  const [animationIndex, setAnimationIndex] = useState(1);

  return Array.from(str).map((char, idx) => <Char key={idx} idx={str.length - idx} char={char} />);
}

function Char({ char, idx }: { char: string; idx: number }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [_char, setChar] = useState(char);

  useEffect(() => {
    setTimeout(
      () => {
        setStartAnimation(true);
        // 콤마와 숫자를 동시에 나오게 하기 위한 계산
      },
      (idx - Math.floor((idx - 1) / 4) - 1) * 150,
    );
    // setChar((prev) => prev === ',' ? prev : `${(Number.parseInt(prev) % 9) + 1}`);
  }, []);

  const onAnimationIteration = useCallback((event: React.AnimationEvent) => {
    setChar((prev) =>
      prev === ',' ? ',' : `${(Number.parseInt((event.target as HTMLSpanElement).innerText) % 9) + 1}`,
    );
  }, []);

  const onAnimationEnd = useCallback(() => {
    setChar(char);
  }, []);

  return (
    <span
      className="font-black text-transparent bg-clip-text bg-gradient-180 from-[#F0DD34] to-[#EE941F] animate-[bpSlideUp_50ms_ease-in-out_infinite] tabular-nums"
      onAnimationIteration={onAnimationIteration}
      onAnimationEnd={onAnimationEnd}
      style={{
        visibility: startAnimation ? 'visible' : 'hidden',
        animationPlayState: startAnimation ? 'running' : 'paused',
        animationIterationCount: char === ',' ? 1 : 10,
      }}
    >
      {_char}
    </span>
  );
}

export default BP;
