'use client';
import { format } from 'date-fns';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

export default function Detail() {
  const params = useParams<{ id: string }>();

  const { data } = useQuery<any>({
    queryKey: ['announcements', Number.parseInt(params.id)],
  });

  return (
    <div className="min-h-full px-5 py-4 bg-[#231D4C] rounded-[12px]">
      <p className="text-base text-white text-semibold text-center">{data.title}</p>
      <p className="mt-2 text-[13px] text-center">{format(new Date(data.startedAt), 'yyyy-MM-dd')}</p>
      <p className="mt-7 text-white text-[13px] whitespace-pre">{data.content}</p>
    </div>
  );
}
