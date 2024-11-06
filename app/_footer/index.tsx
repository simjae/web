'use client';

import HomeIcon from './home-icon.svg';
import HomeActiveIcon from './home-active-icon.svg';
import BlockpickIcon from './blockpick-icon.svg';
import BlockpickActiveIcon from './blockpick-active-icon.svg';
import BonusIcon from './bonus-icon.svg';
import BonusActiveIcon from './bonus-active-icon.svg';
import MoreIcon from './more-icon.svg';
import MoreActiveIcon from './more-active-icon.svg';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface Props {
  currentTab: 'home' | 'blockpick' | 'bonus' | 'more';
}

const Index: React.FC<Props> = (props) => {
  const pathname = usePathname();

  const currentTab = useMemo(() => {
    const paths = pathname.split('/');
    if (paths.includes('blockpick')) {
      return 'blockpick';
    }

    if (paths.includes('bonus')) {
      return 'bonus';
    }

    if (paths.includes('more')) {
      return 'more';
    }

    return 'home';
  }, [pathname]);

  return (
    <div
      className="border-t border-[#121238] sticky w-full bottom-0 px-9 pt-3 flex justify-between text-[#5151A3] bg-[#020824] z-20"
      style={{
        paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))',
      }}
    >
      <Link href="/" className="flex flex-col items-center">
        <Image src={currentTab === 'home' ? HomeActiveIcon : HomeIcon} alt="" />
        <p className={twMerge('mt-1 text-[10px]', currentTab === 'home' && 'text-white')}>홈</p>
      </Link>

      <Link href="/blockpick" className="flex flex-col items-center">
        <Image src={currentTab === 'blockpick' ? BlockpickActiveIcon : BlockpickIcon} alt="" />
        <p className={twMerge('mt-1 text-[10px]', currentTab === 'blockpick' && 'text-white')}>블록픽</p>
      </Link>

      <a className="flex flex-col items-center">
        <Image src={currentTab === 'bonus' ? BonusActiveIcon : BonusIcon} alt="" />
        <p className={twMerge('mt-1 text-[10px]', currentTab === 'bonus' && 'text-white')}>보너스</p>
      </a>

      <a href="/more" className="flex flex-col items-center">
        <Image src={currentTab === 'more' ? MoreActiveIcon : MoreIcon} alt="" />
        <p className={twMerge('mt-1 text-[10px]', currentTab === 'more' && 'text-white')}>더보기</p>
      </a>
    </div>
  );
};

export default Index;
