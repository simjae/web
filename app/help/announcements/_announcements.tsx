'use client';
import { type TAnnouncement } from '@/types';
import NewIcon from './new.png';

import { format } from 'date-fns';
import { getAnnouncements } from './actions';

import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Announcements() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<
    { page: number; totalCount: number; perPage: number; data: TAnnouncement[] },
    { page: number }
  >({
    queryKey: ['announcements'],
    queryFn: (context) => getAnnouncements({ pageParam: context.pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, page, lastPageParam) => {
      if (lastPage.totalCount > lastPage.perPage * lastPage.page) {
        return (lastPageParam as number) + 1;
      }

      return null;
    },
  });

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  return (
    <ul className="mx-5 pb-10 flex flex-col gap-5" ref={ref}>
      {data?.pages
        .flatMap((p) => p.data)
        .map((announcement) => (
          <li key={`announcement-${announcement.id}`}>
            <Link
              className="block px-5 pt-4 pb-6 bg-[#231D4C] rounded-[12px]"
              href={`/help/announcements/${announcement.id}`}
            >
              <div className="flex items-center gap-1">
                <p className="text-base text-white line-clamp-1">{announcement.title}</p>
                <Image className="shrink-0" width={16} height={16} src={NewIcon} alt="" />
              </div>
              <p className="text-[13px]">{format(new Date(announcement.startedAt), 'yyyy.MM.dd')}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}
