'use client';
import CubeIcon from '@/images/cube-icon.png';

import { format } from 'date-fns/format';
import Image from 'next/image';
import { BP } from '@/components/bp';
import { Button } from '@/components/button';
import { Dialog, DialogContent } from '@/components/dialog';
import { twMerge } from 'tailwind-merge';
import { X as XIcon } from 'lucide-react';

export default function ResultDialog(props: { id: number; onOpenChange: () => void }) {
  const myPicks: any[] = [
    {
      block: 1356,
      date: new Date(2024, 1, 1, 15, 0, 7),
    },
    {
      block: 1357,
      date: new Date(2024, 1, 1, 15, 0, 7),
    },
    {
      block: 3321,
      date: new Date(2024, 1, 1, 15, 0, 7),
    },
    {
      block: 2958,
      date: new Date(2024, 1, 1, 15, 0, 7),
    },
    {
      block: 2918,
      date: new Date(2024, 1, 1, 15, 0, 7),
    },
  ];

  return (
    <Dialog open onOpenChange={props.onOpenChange}>
      <DialogContent className="w-full px-0 py-5 h-full bg-none flex flex-col justify-center gap-3">
        <div className="relative w-full max-h-full py-5 bg-[#121238] overflow-y-auto rounded-[12px]">
          <div className="sticky top-0">
            <button
              className="absolute top-0 right-3 bg-[#070723] p-1 rounded-full"
              onClick={() => props.onOpenChange()}
            >
              <XIcon width={12} height={12} />
            </button>
          </div>

          <h2 className="text-[18px] font-medium text-center">블록픽 결과</h2>

          <div className="mt-8 mb-5">
            <p className="text-[24px] text-white font-bold text-center">Henry 님!</p>
            <p className="text-white text-[20px] font-bold text-center">
              다음 <span className="text-accent">블록픽 주인공</span>을<br />
              도전 하세요!
            </p>
            <div className="mt-7 mb-3 flex justify-center">
              <p className="px-4.5 py-1 rounded-[11.5px] bg-[#020824]/60 text-[12px] font-light">최종당첨</p>
            </div>
            <div className="mx-4 pt-4 pb-2.5 bg-[#020824] rounded-[9px]">
              <div className="flex justify-center">
                <div className="w-[68px] h-[68px]">1</div>
              </div>
              <p className="mt-2 text-[#FECA37] text-sm font-black text-center">이오니아</p>
              <p className="mt-2 text-[13px] font-semibold text-center">
                <span className="text-white text-sm font-black">{Number(1356).toLocaleString()}</span>&nbsp;BLOCK
              </p>
              <p className="text-[11px] text-[#9988B3] text-center">
                {format(new Date(2024, 1, 1, 15, 0, 7), 'yyyy-MM-dd / hh:mm:ss')} 기준
              </p>
              <div className="mt-1 flex justify-center">
                <BP value={5230000} size="medium" />
              </div>
            </div>
          </div>

          <div className="mx-4.5 py-3 bg-[#020824] rounded-[12px]">
            <div className="px-4.5 flex items-center gap-1">
              <Image width={10} height={11} src={CubeIcon} alt="" />
              <p className="text-white text-[12px] font-extrabold">내가 참여한 블록픽</p>
            </div>
            <div className="mt-5 h-[160px] overflow-y-auto">
              {Array.isArray(myPicks) && myPicks.length > 0 ? (
                <ul>
                  {myPicks.map((pick) => (
                    <li
                      key={`block-${pick.block}`}
                      className={twMerge(
                        'px-5 py-[11px] flex justify-between text-[12px] rounded-[30px]',
                        pick.block === 1356 &&
                          'text-white font-semibold bg-[linear-gradient(90deg,#813DE8_0%,#EB6E87_100%)]',
                      )}
                    >
                      <p>{pick.block}</p>
                      <p>{format(new Date(pick.date), 'yyyy-MM-dd / hh:mm:ss')}</p>
                      <p>{pick.block === 1356 ? '당첨' : '탈락'}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p>참가하지 않은 블록픽 입니다.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-center">
          <Button variant="secondary">전체내역보기</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
