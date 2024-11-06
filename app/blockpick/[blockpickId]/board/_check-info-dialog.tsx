'use client';
import CheckIcon from './check-icon.png';

import Cookies from 'js-cookie';
import { Fragment, use, useState } from 'react';
import Image from 'next/image';
import { context } from './context';
import { Button } from '@/components/button';
import { Dialog, DialogHead, DialogClose, DialogContent } from '@/components/dialog';

interface Props {
  onClose: () => void;
}

export default function _confirmDialog(props: Props) {
  const { blockpick } = use(context);
  const [step, setStep] = useState(1);

  const showWarning = Cookies.get('show-checkpoint-warning');
  return (
    <Dialog open onOpenChange={props.onClose}>
      <DialogContent className="from-[#E62F2F] to-[#661049]">
        <DialogHead>
          <div className="w-[84px] h-[84px] py-3 rounded-[15px] bg-white flex justify-center">
            <Image className="w-auto h-full" src={CheckIcon} alt="" />
          </div>
        </DialogHead>
        {step < 2 && showWarning !== '0' ? (
          <Fragment>
            <div className="text-white text-center whitespace-nowrap">
              <p className="text-xs font-bold">모든 참여정보는 완벽하게 암호화 되어</p>
              <p className="text-xs font-bold">블록체인에 기록된 후 참여자가 확인하기 전까지</p>
              <p className="text-[13px] font-black">누구도 알 수 없도록 철저히 보안이 유지됩니다.</p>
            </div>

            <div className="mt-3 border border-[#5D1132] rounded-[6px]">
              <div className="py-1 bg-[#5D1132]/90">
                <p className="text-xs text-[#FF6368] text-center">
                  <b className="font-semibold">Check Point</b> 시간내 참여한
                </p>
                <p className="text-xs font-medium text-white text-center">블록픽을 반드시 체크 해주세요.</p>
              </div>
              <div className="py-3 flex items-center justify-center gap-4">
                <div>
                  <p className="text-xs text-white font-semibold">2024.05.31</p>
                  <p className="text-[10px] text-[#FF6368] leading-[1]">(UTC+9)</p>
                </div>
                <div className="flex items-center">
                  <div className="relative tabular-nums bg-[#7A143E] p-1.5 rounded-[3px] text-white text-base font-bold">
                    15
                    <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFB3C5_50%,rgba(255,179,197,0)_100%)]" />
                    <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFCCD9_50%,rgba(255,179,197,0)_100%)]" />
                  </div>
                  <div className="mx-1.5 flex flex-col gap-2">
                    <div className="w-1 h-1 bg-[#FF8689] rounded-full" />
                    <div className="w-1 h-1 bg-[#FF8689] rounded-full" />
                  </div>
                  <div className="relative tabular-nums bg-[#7A143E] p-1.5 rounded-[3px] text-white text-base font-bold">
                    05
                    <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFB3C5_50%,rgba(255,179,197,0)_100%)]" />
                    <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFCCD9_50%,rgba(255,179,197,0)_100%)]" />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-[#FF6368] text-center">
              체크를 하지않은 참여정보는 무효처리 되며
              <br />
              사용한 BP는 반환되지 않습니다.
            </p>
            <div className="mt-3 flex justify-center">
              <Button
                onClick={() => {
                  setStep(2);
                }}
              >
                확인
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-1">
              <input
                type="checkbox"
                className="appearance-none w-2.5 h-2.5 border border-[#ADA2E2] bg-transparent rounded-[2px]"
              />
              <button
                className="text-[11px] text-white"
                onClick={() => {
                  const today = new Date();
                  Cookies.set('show-checkpoint-warning', '0', {
                    expires: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
                  });
                  setStep(2);
                }}
              >
                오늘 다시 보지 않기
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <h2 className="text-base text-white font-bold text-center">CHECK 잊지 않으셨죠?</h2>
            <p className="mt-2 text-[13px] text-white font-medium text-center">
              체크를 하지않은 참여정보는 <span className="text-[#FFC937]">무효처리</span> 되며
              <br />
              사용한 BP는 반환되지 않습니다.
            </p>

            <div className="mt-3 pl-5 pr-8 py-2 border border-[#5D1132] rounded-[6px]">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs text-white font-semibold">2024.05.31</p>
                  <p className="text-[10px] text-[#FF6368] leading-[1]">(UTC+9)</p>
                </div>
                <div className="flex items-center">
                  <div className="relative tabular-nums bg-[#7A143E] p-1.5 rounded-[3px] text-white text-base font-bold">
                    15
                    <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFB3C5_50%,rgba(255,179,197,0)_100%)]" />
                    <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFCCD9_50%,rgba(255,179,197,0)_100%)]" />
                  </div>
                  <div className="mx-1.5 flex flex-col gap-2">
                    <div className="w-1 h-1 bg-[#FF8689] rounded-full" />
                    <div className="w-1 h-1 bg-[#FF8689] rounded-full" />
                  </div>
                  <div className="relative tabular-nums bg-[#7A143E] p-1.5 rounded-[3px] text-white text-base font-bold">
                    05
                    <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFB3C5_50%,rgba(255,179,197,0)_100%)]" />
                    <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFCCD9_50%,rgba(255,179,197,0)_100%)]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-center">
              <DialogClose asChild>
                <Button>확인</Button>
              </DialogClose>
            </div>
          </Fragment>
        )}
      </DialogContent>
    </Dialog>
  );
}
