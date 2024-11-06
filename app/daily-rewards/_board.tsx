'use client';
import X1Active from './x1-active.png';
import X1Disabled from './x1-disabled.png';
import X2Active from './x2-active.png';
import X2Disabled from './x2-disabled.png';
import X3Active from './x3-active.png';
import X3Disabled from './x3-disabled.png';
import BPActive from './bp-active.svg';
import BPDisabled from './bp-disabled.svg';

import React from 'react';
import Image from 'next/image';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHead } from '@/components/dialog';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/button';

export default function Board() {
  const [earnedReward, setEarnedReward] = React.useState<{
    day: number;
    rewards: {
      type: 'BP' | 'LUCKY_BLOCK_TICKET';
      amount: number;
      multiple: number;
    }[];
  }>();
  const { data, refetch } = useQuery<
    {
      id: number;
      day: number;
      status: 'claimed' | 'available' | 'unavailable';
      rewards: {
        type: 'BP' | 'LUCKY_BLOCK_TICKET';
        amount: number; // 보상 BP (0인 경우 응모권)
        multiple: 1 | 2 | 3; // 배수
      }[];
    }[]
  >({
    queryKey: ['daily-rewards'],
  });

  const mutation = useMutation({
    async mutationFn(event: React.FormEvent) {
      event.preventDefault();
      const response = await fetch('/api/daily-rewards', {
        method: 'POST',
      });
      const result = await response.json();

      if (response.status !== 201) {
        throw new Error(result.message);
      }
      return result;
    },
    onSuccess(result) {
      const reward = data!.find((r) => r.status === 'available');
      setEarnedReward({
        day: reward!.day,
        rewards: result,
      });
    },
    onError(error) {
      alert(error.message);
    },
  });

  if (!data) {
    return null;
  }

  console.log(earnedReward);
  return (
    <form
      className="mx-5 mt-7 px-5 pt-9 pb-10 bg-[#121238] rounded-[18px] border border-[#2E2E67]"
      onSubmit={mutation.mutate}
    >
      <div className="flex items-center justify-between gap-4.5">
        <div className="grow shrink-0">
          <SingleReward day={data[0].day} rewards={data[0].rewards} status={data[0].status} />
        </div>

        <div className="grow shrink-0">
          <SingleReward day={data[1].day} rewards={data[1].rewards} status={data[1].status} />
        </div>

        <div className="grow shrink-0">
          <SingleReward day={data[2].day} rewards={data[2].rewards} status={data[2].status} />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4.5">
        <div className="grow shrink-0">
          <SingleReward day={data[3].day} rewards={data[3].rewards} status={data[3].status} />
        </div>

        <div className="grow shrink-0">
          <SingleReward day={data[4].day} rewards={data[4].rewards} status={data[4].status} />
        </div>

        <div className="grow shrink-0">
          <SingleReward day={data[5].day} rewards={data[5].rewards} status={data[5].status} />
        </div>
      </div>

      <div className="mt-7 flex justify-center">
        <DoubleReward
          day={7}
          rewards={[
            { type: 'BP', amount: 50, multiple: 3 },
            { type: 'LUCKY_BLOCK_TICKET', amount: 1, multiple: 1 },
          ]}
          status="claimed"
        />
      </div>
      <div className="mt-7 flex justify-center">
        <DoubleReward
          day={7}
          rewards={[
            { type: 'BP', amount: 50, multiple: 2 },
            { type: 'LUCKY_BLOCK_TICKET', amount: 0, multiple: 3 },
          ]}
          status="available"
        />
      </div>
      <div className="mt-7 flex justify-center">
        <DoubleReward day={data[6].day} rewards={data[6].rewards} status={data[6].status} />
      </div>
      {earnedReward && (
        <Dialog open>
          <DialogContent className="min-w-[270px]">
            <DialogHead className="w-[84px] h-[84px] bg-white rounded-[15px]"></DialogHead>
            <h2 className="text-[18px] font-medium text-center">연속출석</h2>
            <p className="mt-1 text-[20px] font-bold text-white text-center">
              <span className="text-accent">{earnedReward.day}일차</span> 출석완료!
            </p>
            <div className="mt-3 flex justify-center">
              <Button>받기</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </form>
  );
}

function SingleReward({ day, rewards, status }: RewardProps) {
  return (
    <button className="block w-full relative pt-[100%]" disabled={status !== 'available'}>
      <div
        className={twMerge(
          'absolute inset-0 rounded-full border-[0.7px] flex flex-col items-center justify-center',
          status === 'claimed' && 'bg-gradient-180 from-[#FFC632] to-[#F4E160] border-[#D49C2C]',
          status === 'available' && 'bg-[#3B3B7A] border-[#A09FF8]',
          status === 'unavailable' && 'bg-[#23234E] text-[#31316D]',
        )}
      >
        <p
          className={twMerge(
            'text-xs',
            status === 'claimed' && 'px-2.5 bg-[#3B3B7A] text-white rounded-full',
            status === 'available' && 'text-[#DCD4FF]/80',
            status === 'unavailable' && 'text-[#474777]',
          )}
        >
          <b>{day}</b>
          <span className="font-light">일</span>
        </p>

        {status === 'claimed' && (
          <p
            className={twMerge(
              'text-[#562F96] font-black leading-[14px]',
              rewards[0].type === 'BP' ? 'text-sm' : 'text-[13px]',
            )}
          >
            GET
          </p>
        )}

        {rewards[0].type === 'BP' && (
          <div className="flex items-center gap-0.5">
            <p
              className={twMerge(
                'font-bold text-base',
                status === 'claimed' && 'text-[#111111]',
                status === 'available' && 'text-white',
                status === 'unavailable' && 'text-[#474777]',
              )}
            >
              {rewards[0].amount}
            </p>
            <Image
              src={status === 'unavailable' ? BPDisabled : BPActive}
              className="w-[18px] h-[18px]"
              width={17}
              height={17}
              alt=""
            />
          </div>
        )}
        {rewards[0].type === 'LUCKY_BLOCK_TICKET' && (
          <p
            className={twMerge(
              'text-xs font-medium text-center leading-[14px]',
              status === 'claimed' && 'text-[#111111] font-bold',
              status === 'available' && 'text-white',
              status === 'unavailable' && 'text-[#474777]',
            )}
          >
            행운블록
            <br />
            응모권
          </p>
        )}
      </div>

      {rewards[0].multiple > 1 && (
        <div className="absolute w-[50%] top-[-14%] right-[-14%]">
          <Image
            width={46}
            height={43}
            className="w-full h-auto"
            src={status === 'unavailable' ? X2Disabled : X2Active}
            alt=""
          />
        </div>
      )}
    </button>
  );
}

function DoubleReward({ day, rewards, status }: RewardProps) {
  return (
    <button
      disabled={status !== 'available'}
      className={twMerge(
        'pt-3 pb-5 px-[30px] w-[63.82%] border rounded-[32px]',
        status === 'claimed' && 'bg-gradient-180 from-[#FFB800] to-[#EED031] border-[#D49C2C]',
        status === 'available' && 'bg-[#242463] border-[#A09FF8]',
        status === 'unavailable' && 'bg-[#23234E] border-[#31316D]',
      )}
    >
      <div className="flex justify-center">
        <p
          className={twMerge(
            'text-xs',
            status === 'claimed' && 'px-2.5 bg-[#3B3B7A] text-white rounded-full',
            status === 'available' && 'text-[#DCD4FF]/80',
            status === 'unavailable' && 'text-[#474777]',
          )}
        >
          <b>{day}</b>
          <span className="font-light">일</span>
        </p>
      </div>

      {status === 'claimed' && <p className="font-black text-sm text-center text-[#562F96]">All GET !!</p>}

      <div className="mt-3 flex items-center justify-center">
        <div className={twMerge('w-[45%] ')}>
          <div className="relative pt-[100%]">
            <div
              className={twMerge(
                'absolute inset-0 flex items-center justify-center rounded-full',
                status === 'claimed' && 'bg-[#3B3B7A]',
                status === 'available' && 'bg-[#3B3B7A] border-[0.7px] border-[#A09FF8]',
                status === 'unavailable' && 'bg-[#23234E] border border-[#31316D]',
              )}
            >
              {rewards[0].type === 'BP' && (
                <div className="flex items-center gap-0.5 leading-[17px]">
                  <p className={`text-base ${status === 'unavailable' ? 'text-[#474777]' : 'text-white'}`}>
                    {rewards[0].amount}
                  </p>
                  <Image
                    width={17}
                    height={17}
                    className="w-[17px] h-[17px]"
                    src={status === 'unavailable' ? BPDisabled : BPActive}
                    alt=""
                  />
                </div>
              )}
              {rewards[0].type === 'LUCKY_BLOCK_TICKET' && (
                <>
                  행운 블록
                  <br />
                  응모권
                </>
              )}

              {rewards[0].multiple && (
                <div className="absolute top-[-20%] right-[-2%] w-[51.72%]">
                  <MultipleBadge multiple={rewards[0].multiple} status={status} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grow">
          <div className="relative pt-[100%]">
            <div
              className={twMerge(
                'absolute inset-[-30%] rounded-full z-10 flex items-center justify-center',
                status === 'claimed' && 'bg-[#FFAA2A] text-[#FFDF6E] shadow-[0_1px_1px_0_rgba(0,0,0,0.25)]',
                status === 'available' && 'bg-[#A09FF8] text-[#23234E]',
                status === 'unavailable' && 'bg-[#3B3B7A]/80 text-[#23234E]',
              )}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" className="w-[40%] h-auto" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.85571 0.443359L3.85571 3.85766L0.441406 3.85766L0.441406 4.47879L3.85571 4.47879L3.85571 7.8931L4.47684 7.8931L4.47684 4.47879L7.89114 4.47879L7.89114 3.85766L4.47684 3.85766L4.47684 0.443359L3.85571 0.443359Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={twMerge('w-[45%] ')}>
          <div className="relative pt-[100%]">
            <div
              className={twMerge(
                'absolute inset-0 flex items-center justify-center rounded-full',
                status === 'claimed' && 'bg-[#3B3B7A]',
                status === 'available' && 'bg-[#3B3B7A] border-[0.7px] border-[#A09FF8]',
                status === 'unavailable' && 'bg-[#23234E] border border-[#31316D]',
              )}
            >
              {rewards[1].type === 'BP' && (
                <div className="flex items-center gap-0.5 leading-[14px]">
                  <p className={`text-base ${status === 'unavailable' ? 'text-[#474777]' : 'text-white'}`}>
                    {rewards[1].amount}
                  </p>
                  <Image
                    width={17}
                    height={17}
                    className="w-[17px] h-[17px]"
                    src={status === 'unavailable' ? BPDisabled : BPActive}
                    alt=""
                  />
                </div>
              )}
              {rewards[1].type === 'LUCKY_BLOCK_TICKET' && (
                <p
                  className={`mt-2 text-xs leading-[14px] text-center ${status === 'unavailable' ? 'text-[#474777]' : 'text-white'}`}
                >
                  행운 블록
                  <br />
                  응모권
                </p>
              )}

              {rewards[1].multiple && (
                <div className="absolute top-[-20%] right-[-2%] w-[51.72%]">
                  <MultipleBadge multiple={rewards[1].multiple} status={status} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function MultipleBadge({
  multiple,
  status,
  ...restProps
}: {
  multiple: 1 | 2 | 3 | undefined;
  status: 'claimed' | 'available' | 'unavailable';
}) {
  if (multiple === 1) {
    return status === 'unavailable' ? (
      <Image src={X1Disabled} alt="" {...restProps} />
    ) : (
      <Image src={X1Active} alt="" {...restProps} />
    );
  }

  if (multiple === 2) {
    return status === 'unavailable' ? (
      <Image src={X2Disabled} alt="" {...restProps} />
    ) : (
      <Image src={X2Active} alt="" {...restProps} />
    );
  }

  if (multiple === 3) {
    return status === 'unavailable' ? (
      <Image src={X3Disabled} alt="" {...restProps} />
    ) : (
      <Image src={X3Active} alt="" {...restProps} />
    );
  }
}

type RewardProps = {
  day: number;
  rewards: {
    type: 'BP' | 'LUCKY_BLOCK_TICKET';
    amount: number;
    multiple: 1 | 2 | 3;
  }[];
  status: 'claimed' | 'available' | 'unavailable';
};
