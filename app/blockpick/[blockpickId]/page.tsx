import { type IBlockPickListResponse } from '@/types/api';
import BP from '@/images/bp-icon.png';

import Link from 'next/link';
import Image from 'next/image';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { BPAnimated } from '@/components/bp';
import { PlayButton } from '@/components/play-button';
import { Share2 as Share2Icon } from 'lucide-react';
import Info from './_info';

export default async function Page({ params: { blockpickId } }: any) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['blockpicks', blockpickId],
    queryFn: async () => {
      const response = await fetch(`${process.env.API_HOST}/api/v1/blockpick`);
      const result: IBlockPickListResponse = await response.json();

      const item = result.data?.blockpicks.find((b) => b.id === Number(blockpickId));
      if (!item) {
        return;
      }

      return item;
    },
  });
  const dehydratedState = dehydrate(queryClient);
  const blockpick: any = await queryClient.getQueryData(['blockpicks', blockpickId]);

  const currentRound = blockpick.blockpickNormal.rounds.find(
    (r: any) => r.round === blockpick.blockpickNormal.currentRound,
  );

  const diff =
    blockpick.status === 'START'
      ? Date.parse(currentRound.roundEndAt) - Date.now()
      : blockpick.status === 'CHECKPOINT'
        ? Date.now()
        : 0;

  return (
    <HydrationBoundary state={dehydratedState}>
      <div>
        <p className="text-[15px] text-white font-bold text-center">
          최후의 <span className="text-accent">1인 PICK 블록</span>이 담첨!
        </p>
        <div className="mt-3 flex items-center justify-center gap-1">
          <p className="px-2 py-1 text-center text-[12px] font-light bg-[#261656]/70 rounded-[3px]">현재 당첨 금액</p>
          <button className="p-1 border border-[#4A296A] bg-[#391762]/50 rounded-[3px]">
            <Share2Icon width={14} height={14} />
          </button>
        </div>
        <div className="flex justify-center">
          <BPAnimated value={currentRound.roundPrizeAmount} size="large" />
        </div>

        <div className="mt-9 mx-5">
          <div className="py-[2px] bg-[linear-gradient(90deg,rgba(156,133,249,0.521569)_0%,#5C4E93_100%)] rounded-[22px]">
            <div className="relative pt-[100%]">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-[21px]"
                src="https://images.unsplash.com/photo-1690575539214-eb0ade6cdd4d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <Info currentRound={currentRound.round} prizes={blockpick.blockpickNormal.prizes} />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          {blockpick.status === 'CHECKPOINT' && (
            <div className="p-[1px] bg-[linear-gradient(179.78deg,#911E50_-36.21%,#921149_175.59%)] rounded-[6px]">
              <dl className="px-4.5 py-5 rounded-[12px] bg-[linear-gradient(0deg,#9D1D3C_-248.15%,#370A15_132.41%)] rounded-[6px]">
                <div className="flex items-center gap-3">
                  <dt className="flex flex-col items-center">
                    <p className="text-[13px] text-white font-semibold">남은시간</p>
                    <p className="text-[11px] text-[#FF6368] leading-3">(d/h/m)</p>
                  </dt>
                  <dd className="flex items-center">
                    <div className="relative tabular-nums bg-[#7A143E] p-1.5 rounded-[3px] text-white text-base font-bold">
                      00
                      <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFB3C5_50%,rgba(255,179,197,0)_100%)]" />
                      <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFCCD9_50%,rgba(255,179,197,0)_100%)]" />
                    </div>
                    <div className="mx-1.5 flex flex-col gap-2">
                      <div className="w-1 h-1 bg-[#FF8689] rounded-full" />
                      <div className="w-1 h-1 bg-[#FF8689] rounded-full" />
                    </div>

                    <div className="relative tabular-nums bg-[#7A143E] p-1.5 rounded-[3px] text-white text-base font-bold">
                      01
                      <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFB3C5_50%,rgba(255,179,197,0)_100%)]" />
                      <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFCCD9_50%,rgba(255,179,197,0)_100%)]" />
                    </div>
                    <div className="mx-1.5 flex flex-col gap-2">
                      <div className="w-1 h-1 bg-[#FF8689] rounded-full" />
                      <div className="w-1 h-1 bg-[#FF8689] rounded-full" />
                    </div>
                    <div className="relative tabular-nums bg-[#7A143E] p-1.5 rounded-[3px] text-white text-base font-bold">
                      19
                      <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFB3C5_50%,rgba(255,179,197,0)_100%)]" />
                      <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(255,179,197,0)_0%,#FFCCD9_50%,rgba(255,179,197,0)_100%)]" />
                    </div>
                  </dd>
                </div>

                <div className="mt-4 flex justify-center">
                  <p className="px-3.5 py-1.5 text-white text-[13px] bg-[#360A15] font-semibold rounded-[3px]">
                    다음 <span className="text-[#FFC937]">라운드</span>에 참여해 주세요.
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <div className="p-[1px] bg-[linear-gradient(90deg,#FFB72A_0%,#FFDD9A_100%)] rounded-[4px]">
                    <div className="pl-3.5 pr-5 py-2.5 flex items-center gap-2.5 bg-[#540F2B] rounded-[4px]">
                      <div className="p-1.5 bg-[linear-gradient(180deg,#F8DA52_0%,#FEC937_100%)] rounded-full">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 1.5L4 6.5L1 3.93618"
                            stroke="#1F1F09"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-white">Check 완료</p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          )}
          {blockpick.status === 'START' && (
            <div className="rounded-[12px] p-[1px]">
              <dl
                className="px-4.5 py-5 rounded-[12px]"
                style={{
                  background:
                    'linear-gradient(360deg, rgba(97, 71, 203, 0.3) -94.19%, rgba(48, 35, 101, 0.3) -26.22%, rgba(48, 35, 101, 0.6) 41.74%, rgba(97, 71, 203, 0.18) 100%)',
                }}
              >
                <div className="flex items-center gap-6">
                  <dt className="flex flex-col items-center">
                    <p className="text-[13px] font-semibold">남은시간</p>
                    <p className="text-[11px] text-[#56568E] leading-3">(d/h/m)</p>
                  </dt>
                  <dd className="flex items-center">
                    <div className="relative tabular-nums bg-[#09082D] p-1.5 rounded-[3px] text-white text-base font-bold">
                      {String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0')}
                      <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(142,147,255,0)_0%,rgba(203,205,255,0.4)_50%,rgba(85,88,153,0)_100%)]" />
                      <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(142,147,255,0)_0%,#ABAEFF_50%,rgba(85,88,153,0)_100%)]" />
                    </div>
                    <div className="mx-1.5 flex flex-col gap-2">
                      <div className="w-1 h-1 bg-[#56568E] rounded-full" />
                      <div className="w-1 h-1 bg-[#56568E] rounded-full" />
                    </div>
                    <div className="relative tabular-nums bg-[#09082D] p-1.5 rounded-[3px] text-white text-base font-bold">
                      {String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0')}
                      <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(142,147,255,0)_0%,rgba(203,205,255,0.4)_50%,rgba(85,88,153,0)_100%)]" />
                      <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(142,147,255,0)_0%,#ABAEFF_50%,rgba(85,88,153,0)_100%)]" />
                    </div>
                    <div className="mx-1.5 flex flex-col gap-2">
                      <div className="w-1 h-1 bg-[#56568E] rounded-full" />
                      <div className="w-1 h-1 bg-[#56568E] rounded-full" />
                    </div>
                    <div className="relative tabular-nums bg-[#09082D] p-1.5 rounded-[3px] text-white text-base font-bold">
                      {String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0')}
                      <div className="absolute left-[2px] right-[2px] bottom-[1px] h-[1px] bg-[linear-gradient(90deg,rgba(142,147,255,0)_0%,rgba(203,205,255,0.4)_50%,rgba(85,88,153,0)_100%)]" />
                      <div className="absolute left-[1px] right-[1px] bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(142,147,255,0)_0%,#ABAEFF_50%,rgba(85,88,153,0)_100%)]" />
                    </div>
                  </dd>
                </div>
                <div className="mt-4 flex items-center gap-6">
                  <dt className="text-[13px] font-semibold">참가비용</dt>
                  <dd className="grow bg-[#08082D] px-2 rounded-[3px] flex items-center justify-between">
                    <Image className="my-1.5" width={20} height={20} src={BP} alt="" />
                    <p className="text-white text-sm">
                      <span className="font-semibold">
                        {Number(blockpick.blockpickNormal.startBp).toLocaleString()}
                      </span>
                      BP
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </div>
        <div className="mt-4 pb-5 flex justify-center">
          {blockpick.status === 'CHECKPOINT' && <PlayButton option="shadow">Check Point!</PlayButton>}
          {blockpick.status === 'START' && (
            <Link href={`/blockpick/${blockpickId}/board`}>
              <PlayButton option="shadow">PICK!</PlayButton>
            </Link>
          )}
        </div>
      </div>
    </HydrationBoundary>
  );
}
