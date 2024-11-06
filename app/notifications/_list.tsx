'use client';
import MessageIcon from './message.png';
import BPIcon from './bp.png';
import WinIcon from './win.png';
import CloverIcon from './clover.png';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/button';
import { Dialog, DialogContent, DialogClose } from '@/components/dialog';
import { ChevronDown as ChevronDownIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';

export default function List() {
  const [showDialog, setShowDialog] = useState('');

  const searchParams = useSearchParams();

  const tab = searchParams.get('tab');

  return (
    <div>
      {tab === 'gift' ? (
        <>
          <div className="mt-3 mx-5 flex justify-between">
            <p className="text-[#9988B3] text-[11px] font-light">
              유효기간이 만료된 선물은 받을수 없습니다.
              <br />
              기간 만료 전 꼭 확인 바랍니다.
            </p>
            <button
              className="px-2.5 py-2 text-xs font-medium text-white bg-[#4F4E9F] rounded-[6px]"
              onClick={() => setShowDialog('delete')}
            >
              기간만료 전체삭제
            </button>
          </div>

          <ul className="mt-2 mx-5 flex flex-col gap-4">
            <li className="pl-3 pr-4 py-3 bg-[#231D4C] rounded-[12px]">
              <div className="flex gap-2">
                <div className="shrink-0 w-[26px] h-[26px] rounded-full bg-[#4A418B] flex items-center justify-center">
                  <img width={17} height={13} src={BPIcon.src} />
                </div>
                <div className="grow">
                  <p className="leading-[26px] text-[13px] text-white font-bold">블록픽 당첨 상금</p>
                  <p className="text-[11px]">
                    <span className="text-[#474777]">남은기간</span>&nbsp;1D:18h:30m
                  </p>
                </div>
                <div className="grow-0 shrink-0 flex items-end">
                  <button
                    className="w-[70px] py-1.5 text-xs text-[#222222] font-medium rounded-[30px] bg-[linear-gradient(180deg,#FEC936_0%,#F4E261_177.5%)]"
                    onClick={() => setShowDialog('receive')}
                  >
                    선물받기
                  </button>
                </div>
              </div>
              <div className="ml-8 mt-3 pl-5 py-3 bg-[#080C22] rounded-[6px] flex items-center text-[13px]">
                <p className="w-14">보상BP</p>
                <p className="font-semibold">
                  <span className="text-white">58,752,000</span> BP
                </p>
              </div>
            </li>

            <li className="pl-3 pr-4 py-3 bg-[#231D4C] rounded-[12px]">
              <div className="flex gap-2">
                <div className="shrink-0 w-[26px] h-[26px] rounded-full bg-[#4A418B] flex items-center justify-center">
                  <img width={17} height={13} src={BPIcon.src} />
                </div>
                <div className="grow">
                  <p className="leading-[26px] text-[13px] text-white font-bold">시즌 이벤트</p>
                  <p className="text-[11px]">
                    <span className="text-[#474777]">남은기간</span>&nbsp;1D:18h:30m
                  </p>
                </div>
                <div className="grow-0 shrink-0 flex items-end">
                  <button
                    className="w-[70px] py-1.5 text-xs text-[#222222] font-medium rounded-[30px] bg-[linear-gradient(180deg,#FEC936_0%,#F4E261_177.5%)]"
                    onClick={() => setShowDialog('receive')}
                  >
                    선물받기
                  </button>
                </div>
              </div>
              <div className="ml-8 mt-3 pl-5 py-3 bg-[#080C22] rounded-[6px] flex items-center text-[13px]">
                <p className="w-14">보상BP</p>
                <p className="font-semibold">
                  <span className="text-white">700</span> BP
                </p>
              </div>
            </li>

            <li className="pl-3 pr-4 py-3 bg-[#231D4C] rounded-[12px]">
              <div className="flex gap-2">
                <div className="shrink-0 w-[26px] h-[26px] rounded-full bg-[#4A418B] flex items-center justify-center">
                  <img width={17} height={13} src={CloverIcon.src} />
                </div>
                <div className="grow">
                  <p className="leading-[26px] text-[13px] text-white font-bold">서버 점검 보상</p>
                  <p className="text-[11px]">
                    <span className="text-[#474777]">남은기간</span>&nbsp;유효 기간 만료
                  </p>
                </div>
                <div className="grow-0 shrink-0 flex items-end">
                  <button className="w-[70px] px-3 py-1.5 bg-[#4F4E9F] text-xs text-white font-medium rounded-[30px]">
                    삭제
                  </button>
                </div>
              </div>
              <div className="ml-8 mt-3 pl-5 py-3 bg-[#080C22] rounded-[6px] flex items-center text-[13px]">
                <p className="w-14">보상BP</p>
                <p className="font-semibold">
                  <span className="text-white">행운블록 응모권</span>
                </p>
              </div>
            </li>
          </ul>
        </>
      ) : (
        <>
          <div className="mt-3 mx-5 flex justify-end">
            <button className="px-2.5 py-2 text-xs font-medium text-white bg-[#4F4E9F] rounded-[6px]">
              전체알림 삭제
            </button>
          </div>

          <ul className="mt-3 px-5 flex flex-col gap-4">
            <li className="py-3 pl-3 pr-6 rounded-[12px] flex gap-2 bg-[#231D4C]">
              <div className="shrink-0 w-[26px] h-[26px] rounded-full bg-[#4A418B] flex items-center justify-center">
                <img width={17} height={13} src={MessageIcon.src} />
              </div>
              <div className="grow">
                <div className="flex items-center justify-between h-[26px]">
                  <p className="relative text-[13px] text-white font-bold">
                    다음라운드 참여
                    <span className="w-1 h-1 -right-1.5 top-[-1px] absolute bg-[#DF4949] rounded-full" />
                  </p>
                  <ChevronRightIcon width={20} height={20} className="text-[#685F9F]" strokeWidth={1.5} />
                </div>
                <p className="text-[#474777] text-[11px]">방금전</p>
                <p className="mt-2 pb-1 text-[13px]">
                  참여한 블록픽 Check Point가 끝나고 다음라운드가 시작했습니다. 지금 바로 참여해 보세요.
                </p>
              </div>
            </li>

            <li className="py-3 pl-3 pr-6 rounded-[12px] flex gap-2 bg-[#231D4C]">
              <div className="shrink-0 w-[26px] h-[26px] rounded-full bg-[#4A418B] flex items-center justify-center">
                <img width={17} height={13} src={BPIcon.src} />
              </div>
              <div className="grow">
                <div className="flex items-center justify-between h-[26px]">
                  <p className="text-[13px] text-white font-bold">100,000 BP 당첨!</p>
                  <ChevronRightIcon width={20} height={20} className="text-[#685F9F]" strokeWidth={1.5} />
                </div>
                <p className="text-[#474777] text-[11px]">방금전</p>
                <p className="mt-2 pb-1 text-[13px]">
                  아기공룡님이 행운블록에서 100,000BP에 당첨되셨어요! 회원님도 행운에 도전해 보세요.
                </p>
              </div>
            </li>

            <li className="rounded-[12px] bg-[#231D4C]">
              <div className="py-3 pl-3 pr-6 bg-[#4A418B] flex gap-2 rounded-[12px]">
                <div className="w-[26px] h-[26px] rounded-full bg-[#231D4C] flex items-center justify-center">
                  <img width={17} height={13} src={WinIcon.src} />
                </div>
                <div className="grow">
                  <div className="flex items-center justify-between h-[26px]">
                    <p className="text-[13px] text-white font-bold">블록픽 당첨!</p>
                  </div>
                  <p className="text-[#231D4C] text-[11px]">방금전</p>
                </div>
                <div className="flex items-center">
                  <ChevronDownIcon width={20} height={20} className="text-white rotate-180" strokeWidth={1.5} />
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-end gap-1 text-[13px]">
                  <p className="text-white font-semibold">No.1,432블록픽</p>
                  <p>2024.05.15 / 14.28 종료</p>
                </div>
                <div className="mt-3 px-5 py-2.5 bg-[#080C22] rounded-[6px] text-[13px]">
                  <div className="flex">
                    <p className="w-14">결과</p>
                    <p className="text-white font-semibold">최종우승</p>
                  </div>

                  <div className="mt-3 flex">
                    <p className="w-14">보상BP</p>
                    <p className="font-semibold">
                      <span className="text-white">58,752,000</span> BP
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-[#ADA2E2]/50">보상BP는 선물함으로 지급됩니다. 꼭 확인 바랍니다.</p>
              </div>
            </li>

            <li className="py-3 pl-3 pr-6 rounded-[12px] flex gap-2 bg-[#231D4C]">
              <div className="w-[26px] h-[26px] rounded-full bg-[#4A418B] flex items-center justify-center">
                <img width={17} height={13} src={WinIcon.src} />
              </div>
              <div className="grow">
                <div className="flex items-center justify-between h-[26px]">
                  <p className="text-[13px] text-white font-bold">블록픽 당첨!</p>
                </div>
                <p className="text-[#474777] text-[11px]">방금전</p>
              </div>
              <div className="flex items-center">
                <ChevronDownIcon width={20} height={20} className="text-white" strokeWidth={1.5} />
              </div>
            </li>
          </ul>
        </>
      )}
      {showDialog === 'receive' && <ReceiveDialog onOpenChange={setShowDialog} />}
      {showDialog === 'delete' && <DeletedDialog onOpenChange={setShowDialog} />}
    </div>
  );
}

function ReceiveDialog({ onOpenChange }: any) {
  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent>
        <h2 className="text-lg font-medium text-center">선물함</h2>
        <p className="mt-3 text-base font-bold text-center text-white">
          선물받기가 정상적으로
          <br />
          완료 되었습니다!
        </p>

        <div className="mt-2 py-2 bg-[#080C22] rounded-[6px]">
          <p className="text-center text-[15px] font-semibold">
            <span className="text-white">58,752,000</span>&nbsp;BP 획득!
          </p>
        </div>

        <div className="mt-3 flex justify-center">
          <DialogClose asChild>
            <Button>확인</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DeletedDialog({ onOpenChange }: any) {
  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent>
        <h2 className="text-lg font-medium text-center">선물함</h2>
        <p className="mt-3 text-base font-bold text-center text-white">
          기간이 만료된 선물이
          <br />
          모두 삭제되었습니다.
        </p>

        <div className="mt-3 flex justify-center">
          <DialogClose asChild>
            <Button>확인</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
