import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getRewards } from './actions';
import Board from './_board';

export default async function DailyRewardsPage() {
  const user = await auth();
  if (!user) {
    return redirect('/login');
  }
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['daily-rewards'],
    queryFn: getRewards,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="pb-10">
        <p className="mt-12 text-white text-[21px] font-semibold text-center">
          7일간 연속출석하고
          <br />
          <span className="text-accent">쏟아지는 보상</span>을 받아가세요!
        </p>

        <Board />

        <ul className="mx-5 mt-5 ps-4 list-disc text-[13px] text-[#999999]/60">
          <li>연속 출석일이 커질수록 보상이 많아져요</li>
          <li>
            연속출석을 놓치면 1일부터 다시 시작해요.
            <br />
            놓치지 않도록 매일 확인해주세요!
          </li>
        </ul>
      </div>
    </HydrationBoundary>
  );
}
