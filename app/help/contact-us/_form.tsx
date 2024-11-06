'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { Button } from '@/components/button';
import { Textarea } from '@/components/textarea';
import { ChevronDown as ChevronDownIcon } from 'lucide-react';
import { Drawer, DrawerContent } from '@/components/drawer';
import SuccessDialog from './_success-dialog';
import { createTicket } from './actions';

const INQUIRY_TYPES: { [key: string]: string } = {
  SERVICE: '계정 관련 문의',
  BLOCKPICK: '블록픽 관련 문의',
  AD_AFFILIATE: '서비스 이용 문의',
  ETC: '기타',
};

const TEXTAREA_MAX_LENGTH = 1500;
export default function Form() {
  const [openTypeSelector, setOpenTypeSelector] = useState(true);
  const [inquiryType, setInquiryType] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  const [ticketActionState, _ticketAction, isPending] = useFormState<any, any>(createTicket, {});

  const contentRef = useRef<HTMLTextAreaElement>(null);
  const onChangeTextarea = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const count = event.currentTarget.value.length;
    setCount(count);
    if (count >= TEXTAREA_MAX_LENGTH) {
      event.preventDefault();
      return;
    }
  }, []);

  const onTypeClick = useCallback(
    (event: React.MouseEvent) => {
      setInquiryType((event.target as HTMLButtonElement).dataset.inquiryType || '');
      setOpenTypeSelector(false);
    },
    [setOpenTypeSelector],
  );

  useEffect(() => {
    if (contentRef.current && inquiryType) {
      contentRef.current.focus();
    }
  }, [contentRef, inquiryType]);

  return (
    <form method="POST" action={_ticketAction}>
      <button
        type="button"
        className="w-full pl-7 pr-6 py-4 bg-[#231D4C] rounded-[12px] flex items-center justify-between"
        onClick={() => setOpenTypeSelector(true)}
      >
        <p className="text-white">{inquiryType ? INQUIRY_TYPES[inquiryType] : '어떤 도움이 필요하신가요?'}</p>
        <ChevronDownIcon width={16} height={16} />
      </button>
      <input type="hidden" name="inquiryType" value={inquiryType} />
      <div className="mt-4 relative">
        <Textarea
          ref={contentRef}
          className="peer"
          placeholder="문의 내용 입력 (최소 10자)"
          name="content"
          rows={17}
          maxLength={TEXTAREA_MAX_LENGTH}
          onChange={onChangeTextarea}
        />
        <p className="absolute bottom-2 right-2 text-[12px] text-[#4C4C8E] peer-focus:text-[#7373AA]">
          {count}/{TEXTAREA_MAX_LENGTH}
        </p>
      </div>
      {ticketActionState && <p className="mt-1.5 text-xs text-[#E36A6A]">{ticketActionState.message}</p>}
      <div className="mt-7 flex justify-center">
        <Button
          type="submit"
          variant="secondary"
          className="w-[242px]"
          disabled={isPending || !inquiryType || count < 10}
        >
          등록하기
        </Button>
      </div>
      <p className="mt-5 text-center text-xs text-[#9988B3]">
        보내주신 문의에 대한 답변은 아이디로 사용중이신
        <br />
        이메일로 보내 드리고 있어 해당 이메일로 확인 부탁 드립니다.
      </p>
      <SuccessDialog isOpen={ticketActionState === null} />
      <Drawer open={openTypeSelector} onOpenChange={setOpenTypeSelector}>
        <DrawerContent>
          <h2 className="text-base font-medium text-center">문의 유형</h2>
          <ul className="mt-1.5 text-white text-base font-medium divide-y divide-[#121238]/50">
            {Object.entries(INQUIRY_TYPES).map(([key, value]) => (
              <li key={`inquiry-${key}`}>
                <button className="py-4 w-full flex justify-center" data-inquiry-type={key} onClick={onTypeClick}>
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </form>
  );
}
