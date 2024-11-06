'use client';
import CubeIcon from './cube.png';

import { useState, useCallback, useContext } from 'react';
import Image from 'next/image';
import { context } from './context';
import { Button } from '@/components/button';
import { Dialog, DialogHead, DialogContent } from '@/components/dialog';
import getBlockNo from '@/utils/get-block-no';
import { Pick } from '@/components/pick';

interface Props {
  onClose: () => void;
}

export default function _confirmDialog(props: Props) {
  const { steps, blocks, currentSelectedBlock, confirm } = useContext(context);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  const onConfirm = useCallback(() => {
    setIsLoading(true);
    confirm().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Dialog open onOpenChange={props.onClose}>
      <DialogContent>
        <DialogHead>
          <div className="w-[84px] h-[84px] py-3 rounded-[15px] bg-white flex justify-center">
            <Image className="w-auto h-full" src={CubeIcon} alt="" />
          </div>
        </DialogHead>
        <h2 className="text-lg text-center">알림</h2>
        {isConfirm ? (
          <>
            <p className="mt-1 text-base text-white font-bold text-center">
              <span className="text-accent">{Number(getBlockNo(currentSelectedBlock, steps)).toLocaleString()}</span>번
              블록을 선택했습니다.
            </p>
            <p className="mt-3 text-[11px] font-medium text-center">2024-02-19 / 15:00:07 기준</p>
            <p className="mt-1 text-center text-white text-[12px] whitespace-nowrap">
              참여현황에서 진행상황을 확인할 수 있습니다.
            </p>
            <div className="mt-3">
              <Button onClick={props.onClose}>확인</Button>
            </div>
          </>
        ) : (
          <>
            <p className="mt-1 text-base font-bold text-white text-center whitespace-nowrap">
              <span className="text-accent">{Number(getBlockNo(currentSelectedBlock, steps)).toLocaleString()}</span>번
              블록을 선택 하겠습니까?
            </p>
            {blocks[currentSelectedBlock[steps.length - 1]]?.pickCount && (
              <div className="flex items-center justify-center">
                <p>Block&nbsp;:&nbsp;</p>
                <Pick
                  count={blocks[currentSelectedBlock[steps.length - 1]]?.pickCount}
                  radius={3}
                  className="w-5 h-5 pb-0"
                />
                &nbsp;
                {blocks[currentSelectedBlock[steps.length - 1]]?.pickCount}PICK
              </div>
            )}

            <div className="mt-3 flex flex-col gap-2">
              <Button disabled={isLoading} onClick={onConfirm}>
                {getBlockNo(currentSelectedBlock, steps)}번 블록 선택하기
              </Button>
              <Button variant="tertiary" onClick={props.onClose}>
                선택취소
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
