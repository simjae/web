import { type IBlockPickListResponse } from '@/types/api';
import { type TBlockPick } from '@/types';

import { auth } from '@/auth';
import About from './about';
import Header from '../header';
import List from './_list';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const CATEGORIES = [
  {
    label: 'Survival',
    isActive: true,
  },
  {
    label: 'Event',
  },
  {
    label: 'Local',
  },
  {
    label: 'Commerce',
  },
];

export default async function BlockPickListPage() {
  const user = await auth();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['blockpicks'],
    queryFn: async () => {
      const response = await fetch(`${process.env.API_HOST}/api/v1/blockpick`);
      const result: IBlockPickListResponse = await response.json();

      return result.data?.blockpicks.map((item) => ({
        id: item.id,
        title: item.title,
        winningAmount: item.blockpickNormal.totalPrizeAmount,
        status: item.status,
        round: {
          round: item.blockpickNormal.rounds.find((r) => r.round === item.blockpickNormal.currentRound)?.round,
          endAt: item.blockpickNormal.rounds.find((r) => r.round === item.blockpickNormal.currentRound)?.roundEndAt,
        },
        steps: [
          {
            size: item.depth1SideSize,
            backgroundImageUrl:
              'https://plus.unsplash.com/premium_photo-1714675222078-f7a808907c38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            size: item.depth2SideSize,
            backgroundImageUrl:
              'https://plus.unsplash.com/premium_photo-1714675222078-f7a808907c38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            size: item.depth3SideSize,
            backgroundImageUrl:
              'https://plus.unsplash.com/premium_photo-1714675222078-f7a808907c38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            size: item.depth4SideSize,
            backgroundImageUrl:
              'https://plus.unsplash.com/premium_photo-1714675222078-f7a808907c38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
        ].filter((i) => i.size),
      }));
    },
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="relative grow pb-8">
        <Header user={user} />
        <div className="animate-[blockPickFadeInUp_500ms_ease-in-out]">
          <p className="mt-10 text-white text-[21px] font-bold text-center">
            블록픽에 참가해서
            <br />
            <span className="text-accent">BP상금 주인공</span>이 되어보세요!
          </p>
          <About />
        </div>
        <ul className="mt-6 mx-6 grid grid-cols-4 gap-x-3">
          {CATEGORIES.map((category) => (
            <li key={`id-${category.label}`} className="">
              <a
                className={` block rounded-[18px] bg-[linear-gradient(101deg,#FF8E8E_-12.92%,#9746FF_113.8%)]${category.isActive ? ' p-[1px]' : ''}`}
              >
                <div className="py-2 text-xs text-white text-center rounded-[18px] bg-[#37244E]">{category.label}</div>
              </a>
            </li>
          ))}
        </ul>

        <hr className="mt-3 mb-3.5 h-[3px] border-none bg-[#1B0E37]" />
        <div className="px-6 flex justify-between">
          <p className="text-[13px]">
            전체 <span className="text-white">14개</span>
          </p>
          <ul className="flex items-center gap-2">
            <li className="flex items-center gap-1">
              <input type="radio" name="status" className="border border-[#8272CD]" />
              <label className="text-xs text-white">전체</label>
            </li>
            <li className="flex items-center gap-1">
              <input type="radio" name="status" className="border border-[#8272CD]" />
              <label className="text-xs text-white">진행중</label>
            </li>
            <li className="flex items-center gap-1">
              <input type="radio" name="status" className="border border-[#8272CD]" />
              <label className="text-xs text-white">종료</label>
            </li>
          </ul>
        </div>
        <List />
      </div>
    </HydrationBoundary>
  );
}
