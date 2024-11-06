'use client';
import { type TBlockPick } from '@/types';

import { use, useState, useEffect, useRef, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { BP } from '@/components/bp';
import UserContext from '@/contexts/user-context';

const ResultDialog = dynamic(() => import('./_result-dialog'));
const LoginDialog = dynamic(() => import('./_login-dialog'));

export default function List() {
  const user = use(UserContext);
  const { data: blockpicks } = useQuery<any[]>({
    queryKey: ['blockpicks'],
  });
  const [showResult, setShowResult] = useState<number | null>(null);
  const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false);

  if (!blockpicks) {
    return null;
  }

  return (
    <ul className="mx-6 mt-3 flex flex-col gap-5">
      {blockpicks.map((blockpick) => (
        <li
          key={`block-${blockpick.id}`}
          className="relative rounded-[16px] animate-[blockPickFadeInUp_500ms_ease-in-out]"
        >
          <div
            className={`px-4 pt-4 pb-3 rounded-[16px] ${blockpick.isEnded ? 'bg-[#5C5C85]/50' : 'bg-[linear-gradient(360deg,rgba(97,71,203,0.4)_0.35%,rgba(48,35,101,0.4)_35.23%,rgba(48,35,101,0.8)_70.11%,rgba(97,71,203,0.24)_100%)]'}`}
          >
            <div className="relative pt-[59.35%]">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-[7px]"
                src={blockpick.steps[0].backgroundImageUrl}
              />
              {blockpick.status === 'END' && (
                <div className="absolute inset-0 bg-[#474777]/80 flex items-center justify-center rounded-[7px]">
                  <span
                    className="px-5 py-2 text-sm font-bold bg-[#393973]/70% rounded-[100px]"
                    style={{
                      boxShadow: '0px 1px 4px 0px #00000040 inset',
                    }}
                  >
                    Finish
                  </span>
                </div>
              )}
              {['START', 'CHECKPOINT'].includes(blockpick.status) && (
                <>
                  <div className="absolute inset-0 bg-[#000000]/50 rounded-[7px]" />
                  <div className="absolute top-3 w-full">
                    <div className="relative gradient-blockpick-info px-6 py-3 w-fit flex items-center justify-between left-[50%] translate-x-[-50%] bg-[#2E2B38]/80 rounded-[14px]">
                      <div className="text-center shrink-0">
                        <p className="font-bold text-[11px] text-[#FFC937]">ROUND</p>
                        <p className="text-sm text-white">{blockpick.round.round}R</p>
                      </div>
                      {blockpick.status === 'CHECKPOINT' && (
                        <>
                          <hr className="w-[1px] h-[18px] ml-6 mr-3.5 border-none bg-[#4A455A] shrink-0" />
                          <div className="text-center shrink-0">
                            <p className="font-bold text-[11px] text-[#FFC937]">CHECK POINT</p>
                            <p className="flex items-center gap-1">
                              <span className="text-[10px] text-white/40">남은시간</span>
                              <span className="text-sm font-semibold text-white">3h&nbsp;:&nbsp;5m</span>
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <p className={`mt-2 text-base font-bold ${blockpick.status === 'END' ? 'text-[#5C5C85]' : 'text-white'}`}>
              {blockpick.title}
            </p>
            <div className="mt-3 flex items-end justify-between">
              <div>
                {blockpick.status === 'END' ? (
                  <p className="text-xs text-[#5C5C85]/50">최종 당첨 금액</p>
                ) : (
                  <p className="text-xs text-[#9988B3]">현재 당첨 금액</p>
                )}

                <BP value={blockpick.winningAmount} size="small" disabled={blockpick.status === 'END'} />
              </div>
              {blockpick.status === 'END' ? (
                <button
                  className="block px-7 py-3 border border-[#FFF4C2] rounded-[8px] text-[15px] text-[#562F96] font-extrabold bg-[linear-gradient(180deg,#FEC936_15.79%,#F4E261_81.58%)]"
                  onClick={setShowResult.bind(null, blockpick.id)}
                >
                  결과공개
                </button>
              ) : user ? (
                <Link
                  href={`/blockpick/${blockpick.id}`}
                  className="block px-7 py-3 border border-[#FFF4C2] rounded-[8px] text-[15px] text-[#000000] font-extrabold bg-[linear-gradient(180deg,#FEC936_15.79%,#F4E261_81.58%)]"
                >
                  참여하기
                </Link>
              ) : (
                <button
                  className="block px-7 py-3 border border-[#FFF4C2] rounded-[8px] text-[15px] text-[#000000] font-extrabold bg-[linear-gradient(180deg,#FEC936_15.79%,#F4E261_81.58%)]"
                  onClick={() => setShowLoginDialog(true)}
                >
                  참여하기
                </button>
              )}
            </div>
          </div>
        </li>
      ))}
      {showResult && <ResultDialog id={showResult} onOpenChange={() => setShowResult(null)} />}
      {!user && <LoginDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} />}
    </ul>
  );
}
