'use client';
import BG from './bg.png';
import BombIcon from './bomb.png';

import { useState } from 'react';
import Image from 'next/image';
import { Plus as PlusIcon } from 'lucide-react';

export default function Info({ className, currentRound, prizes }: any) {
  const [open, setOpen] = useState(false);
  const [selectedPrizeType, setSelectedPrizeType] = useState('');

  return (
    <div className={`absolute inset-0 rounded-[21px] ${open ? 'bg-[#111322]/90' : 'bg-[#111322]/30'}`}>
      {open && (
        <div className="absolute left-0 right-0 bottom-[70px] opacity-70 flex justify-center">
          <Image className=" max-w-[150px] h-auto" src={BG} alt="" />
        </div>
      )}

      <div className="absolute top-4 left-4">
        <div className="gradient-blockpick-info bg-[#2E2B38]/80 px-5 py-2.5 flex flex-col items-center justify-between gap-0.5 rounded-[14px]">
          <span className="text-[11px] font-bold text-[#FFBF1F]">ROUND</span>
          <p className="text-sm font-bold text-white">{currentRound}R</p>
        </div>
      </div>

      <div className="absolute top-4 right-4">
        <div
          className={`px-3 py-4 bg-[#2E2B38]/60 flex items-center rounded-[14px] border-[#FEC936] ${open ? 'gradient-blockpick-info2' : ''}`}
        >
          <p className="text-[11px] leading-3 font-bold text-white">RULE</p>
          <ul className="ml-4 mr-3 flex items-center">
            {prizes.map((prize: any) => (
              <li
                className={`relative [&:not(:first-child)]:w-4 [&:not(:first-child)]:left-[-8px] ${open && ' grayscale'}`}
                key={`prize-${prize.id}`}
              >
                <Image className={`max-w-[unset] w-6 h-6`} width={24} height={24} src={prize.imageUrl} alt="" />
                <div className="absolute left-0 w-[24px] flex justify-center">
                  <div
                    className="w-[15px] h-[4px] opacity-30"
                    style={{
                      backgroundColor: prize.bgColor,
                      filter: 'blur(2px)',
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <button className="p-1 bg-[#614C68]/40 rounded-full" onClick={() => setOpen((prev) => !prev)}>
            <PlusIcon className={`transition ${open ? 'text-[#F4E261] -rotate-45 ' : ''}`} width={16} height={16} />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute bottom-6 left-0 right-0">
          <ul className="flex items-end justify-center">
            {prizes.map((prize: any) =>
              selectedPrizeType ? (
                <li
                  className={`${prize.rankType === selectedPrizeType ? 'w-[88px] h-[88px]' : 'w-[54px] h-[54px] opacity-60'}`}
                  key={`prize-${prize.id}`}
                  style={{
                    filter: prize.rankType === selectedPrizeType ? `drop-shadow(0 0px 30px ${prize.bgColor})` : 'none',
                  }}
                  onClick={() => setSelectedPrizeType(() => prize.rankType)}
                >
                  <Image className="w-full h-full" width={64} height={64} src={prize.imageUrl} alt="" />
                </li>
              ) : (
                <li
                  className="w-14 h-14"
                  key={`prize-${prize.id}`}
                  onClick={() => setSelectedPrizeType(() => prize.rankType)}
                >
                  <Image width={64} height={64} src={prize.imageUrl} alt="" />
                </li>
              ),
            )}
          </ul>

          {selectedPrizeType === '' && (
            <div className="mt-4">
              <p className="text-[18px] font-extrabold text-center">
                BLOCK PICK <span className="text-white">RULE</span>{' '}
              </p>
              <p className="text-[12px] font-medium text-white/60 text-center">아이콘을 선택해 보세요.</p>

              <div className="mt-5 flex justify-center">
                <div className="px-12 py-1.5 bg-[#2E2B38]/40 rounded-[8px]">
                  <p className="text-xs font-semibold text-center">탈락기준</p>
                  <div className="mt-1 flex items-center gap-1">
                    <Image width={22} height={22} src={BombIcon} alt="" />
                    <p className="text-white text-xs">
                      <span className="text-sm font-semibold">3</span>Pick
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedPrizeType && (
            <div className="mt-6">
              <div className="flex justify-center">
                <img
                  className="w-auto h-[26px]"
                  height={26}
                  src={prizes.find((p: any) => p.rankType === selectedPrizeType).titleImageUrl}
                  alt=""
                />
              </div>
              <p className="mt-2 text-white text-xs font-medium text-center whitespace-pre">
                {prizes.find((p: any) => p.rankType === selectedPrizeType).content}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
