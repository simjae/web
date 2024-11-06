import React from 'react';
import Image from 'next/image';
import { BP } from '@/components/bp';
import { Button } from '@/components/button';
import { BlockPickCategory } from '@/components/blockpick-category';
import { twMerge } from 'tailwind-merge';

interface BlockpickListitemProps {
  id: number;
  category: 'time-limit' | 'free' | 'prize' | 'survival';
  thumbnailImageUrl: string;
  bp: number;
  additional?: string;
  isEnded: boolean;
  isWon?: boolean;
  onResultClick?: (id: number) => void;
}

const BlockPickListItem: React.FC<BlockpickListitemProps> = (props) => {
  return (
    <div>
      <div className={twMerge('relative bg-[#121238] pt-[32.83%] rounded-t-[12px]', props.isEnded && 'bg-[#23234E]')}>
        <Image
          width={0}
          height={0}
          className="w-full h-full absolute inset-0 rounded-[12px] object-cover"
          src={props.thumbnailImageUrl}
          alt=""
        />
        {props.isEnded && (
          <>
            <div className="absolute inset-0 rounded-[12px] bg-[#474777]/80" />
            <p
              className={twMerge(
                'absolute top-3 right-4 w-8 h-8 flex items-center justify-center text-[12px] border border-white rounded-full',
                props.isWon
                  ? 'bg-[linear-gradient(144deg,#813DE8_-29.59%,#EB6E87_71.02%)] text-white'
                  : 'bg-[#616682]/35 text-[#858CB7]',
              )}
            >
              {props.isWon ? '당첨' : '탈락'}
            </p>
            <div className="absolute top-12 left-0 right-0 flex justify-center">
              <Button className="w-[170px] border border-[#FFF4C2]" onClick={props.onResultClick?.bind(null, props.id)}>
                결과공개
              </Button>
            </div>
          </>
        )}
        <div className="absolute top-2 left-2">
          <BlockPickCategory type={props.category} isActive={!props.isEnded} />
        </div>
      </div>
      <div
        className={twMerge('px-3 py-4 bg-[#121238] rounded-b-[12px]', props.isEnded && 'bg-[#23234E] text-[#474777]')}
      >
        <div className="flex items-center justify-between">
          {props.bp > 0 ? (
            <>
              <p>현재 당첨 금액</p>
              <BP value={props.bp} size="list" />
            </>
          ) : (
            <>
              <p>무료 블록픽</p>
              <p>무료로 블록픽에 참여해 보세요!</p>
            </>
          )}
        </div>
        {props.additional && <p className="mt-2 text-right text-sm text-white font-medium">{props.additional}</p>}
      </div>
    </div>
  );
};

export { BlockPickListItem };
