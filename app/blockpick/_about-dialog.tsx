'use client';
import BackgroundImage from './about-background.png';

import React from 'react';
import { DialogContent, DialogClose } from '@/components/dialog';
import { ScrollArea } from '@/components/scrollbar';
import { X as XIcon } from 'lucide-react';

const _aboutDialog: React.FC = (props) => {
  return (
    <DialogContent
      className="w-full px-4 pt-5 pb-6"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: 'cover',
      }}
    >
      <DialogClose asChild>
        <button className="absolute z-40 top-3 right-3 bg-[#070723] p-1 rounded-full">
          <XIcon width={12} height={12} />
        </button>
      </DialogClose>
      <ScrollArea>
        <h2 className="text-lg font-medium text-center">블록픽이란?</h2>
        <p className="mt-8 text-[13px] font-medium text-white text-center">
          블록픽은 참가자가 블록을 선택하고,
          <br />
          <span className="text-accent">
            마지막까지 단 1인만 선택한 블록이
            <br />
            우승하는 새로운 개념
          </span>
          의 소수결 이벤트입니다
        </p>

        <p className="mt-5 text-[13px] font-medium text-center text-white">
          블록픽의 모든 과정과 정보는 <span className="text-[#FFC937]">블록체인</span>에 기록해서
          <br />
          <span className="text-accent">어떤 조작과 위.변조가 불가능하며,</span>
          <br />
          누구든 확인할 수 있도록 투명하게 공개됩니다.
        </p>

        <div className="mt-6 px-4.5 pt-3 pb-4 bg-[#020824] rounded-[9px]">
          <h3 className="text-[12px] text-white font-extrabold">참여방법</h3>
          <p className="text-[12px]">
            보유한 BP를 사용해 블록픽에 참가할 수 있어요. 복잡한 과정 없이 내가 원하는 블록만 선택하면 참가 완료! 한
            블록픽에 몇 번이든 참가해 여러개의 블록을 선택할 수 있어요.
          </p>
        </div>

        <div className="mt-6 px-4.5 pt-3 pb-4 bg-[#020824] rounded-[9px]">
          <h3 className="text-[12px] text-white font-extrabold">진행방식</h3>
          <p className="text-[12px]">
            블록픽 마다 설정된 ‘배수’에 따라 탈락하는 블록이 정해져요. 만약 ‘2배수’가 설정된 블록픽 에서는 1개의 블록이
            2번 선택 되면 탈락! ‘3배수’ 블록픽 에서는 3번 선택되면 탈락이 결정되는 방식이에요.
          </p>
        </div>

        <div className="mt-6 px-4.5 pt-3 pb-4 bg-[#020824] rounded-[9px]">
          <h3 className="text-[12px] text-white font-extrabold">우승상금</h3>
          <p className="text-[12px]">
            참가할 때 사용한 BP는 모두 모아서 우승자에게 상금으로 드려요! 참가자가 많아질수록 우승 상금도 점점 더
            늘어납니다.
          </p>
        </div>
      </ScrollArea>
    </DialogContent>
  );
};

export default _aboutDialog;
