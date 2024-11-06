import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { ChevronLeft as ChevronLeftIcon } from 'lucide-react';
import Announcements from './_announcements';
import { getAnnouncements } from './actions';

export default async function AnnouncementsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['announcements'],
    queryFn: getAnnouncements,
    initialPageParam: 1,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div
        className="px-5 grid text-white"
        style={{
          gridTemplateColumns: '1fr auto 1fr',
        }}
      >
        <ChevronLeftIcon width={24} height={24} />
        <p className="text-base font-bold">공지사항</p>
      </div>
      <div className="mt-12 grow">
        <Announcements />
      </div>
    </HydrationBoundary>
  );
}
