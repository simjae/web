'use client';
import { TPolicyItem } from '@/types';
import { format } from 'date-fns/format';

import { useQuery } from '@tanstack/react-query';
import { ChevronDown as ChevronDownIcon } from 'lucide-react';

export default function Privacy() {
  const { data } = useQuery<TPolicyItem[]>({
    queryKey: ['privacy'],
  });

  if (!(Array.isArray(data) && data.length > 0)) {
    return null;
  }

  return (
    <div className="h-full flex flex-col gap-4 pt-6 pb-4 px-5">
      {/* height를 적용하지 않으면 스크롤 overflow-auto가 적용이 안됨 */}
      <div className="px-5 py-4 h-0 bg-[#231D4C] rounded-[12px] grow shrink overflow-y-auto">
        <h2 className="text-base text-white font-semibold text-center">블록픽 서비스 이용약관</h2>
        <p className="mt-1 text-[13px] text-center">{format(new Date(data[0].appliedAt), 'yyyy.MM.dd')}</p>
        <p className="mt-6 text-[13px] text-white whitespace-pre-wrap">{data[0].content}</p>
      </div>
      <button className="grow-0 shrink-0 bg-[#231D4C] pl-7 pr-6 py-4 flex justify-between rounded-[12px]">
        <p className="text-white">{format(new Date(data[0].appliedAt), 'yyyy.MM.dd')} 적용</p>
        <ChevronDownIcon />
      </button>
    </div>
  );
}
