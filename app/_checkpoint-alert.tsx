'use client';
import CheckIcon from './blockpick/[blockpickId]/board/check-icon.png';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/button';
import { Dialog, DialogHead, DialogClose, DialogContent } from '@/components/dialog';

export default function CheckpointAlert() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="mt-3">
        <button onClick={() => setOpen(true)}>체크포인트 팝업 띄우기</button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="from-[#E62F2F] to-[#661049]">
          <DialogHead>
            <div className="w-[84px] h-[84px] py-3 rounded-[15px] bg-white flex justify-center">
              <Image className="w-auto h-full" src={CheckIcon} alt="" />
            </div>
          </DialogHead>
          <h2 className="text-base text-white font-bold text-center">
            참여하신 블록픽은 현재
            <br />
            Check Point 입니다.
          </h2>
          <p className="mt-2 text-[13px] text-white font-medium text-center">
            참여정보를 <span className="text-[#FFC937]">체크</span>하고
            <br />
            누적 상금을 확인해 보세요.
          </p>

          <div className="mt-5 flex justify-center">
            <DialogClose asChild>
              <Button>확인</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
