'use client';

import { type TFaq } from '@/types';

import { useQuery } from '@tanstack/react-query';
import { ChevronDown as ChevronDownIcon } from 'lucide-react';

export default function List() {
  const { data } = useQuery<TFaq[]>({
    queryKey: ['faq'],
  });

  if (!data) {
    return null;
  }

  return (
    <ul className="mt-7 px-5 flex flex-col gap-4">
      {data.map((item) => (
        <li key={`faq-${item.id}`}>
          <details className="group">
            <summary className="text-white relative z-40 pl-7 pr-5 py-4 bg-[#231D4C] rounded-[12px] marker:hidden list-none group-open:bg-[#4A418B] group-open:shadow-[0_4px_20px_0_rgba(2,8,36,0.7)] flex items-center justify-between">
              {item.question}
              <ChevronDownIcon
                width={20}
                height={20}
                strokeWidth={1.5}
                className="text-[#685F9F] group-open:text-white group-open:rotate-[-180deg] transition-all"
              />
            </summary>
            <div className="relative -top-[9px] px-5 py-9 bg-[#231D4C] rounded-b-[12px]">{item.answer}</div>
          </details>
        </li>
      ))}
    </ul>
  );
}
