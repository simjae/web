import Main from './main.png';
import RewardsIcon from './reward-icon.png';
import BonusIcon from './bonus-icon.png';
import BG1 from './bg1.png';
import BG2 from './bg2.png';
import BG3 from './bg3.png';
import BG4 from './bg4.png';
import BG5 from './bg5.png';
import BG6 from './bg6.png';
import BPIcon from '@/components/bp/bp-large.png';

import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';
import { ChevronRight as ChevronRightIcon } from 'lucide-react';
import { BP } from '@/components/bp';
import { PlayButton } from '@/components/play-button';
import { BadgeButton } from '@/components/badge-button';
import CheckpointAlert from './_checkpoint-alert';
import Header from './header';

export default async function Home() {
  const user = await auth();

  return (
    <div className="pb-8">
      <Header user={user} />
      <div className="relative h-[300px]">
        <Image
          width={652}
          height={203}
          className="absolute left-0 right-0 bottom-10 mix-blend-soft-light object-cover"
          src={BG1}
          alt=""
        />
        <Image
          width={320}
          height={252}
          className="absolute left-0 right-0 bottom-[-38px] mx-auto object-cover"
          src={BG4}
          alt=""
        />
        <Image
          width={421}
          height={243}
          className="absolute left-0 right-0 bottom-[-100px] mx-auto object-cover"
          src={BG3}
          alt=""
        />
        <div className="absolute left-0 right-0 bottom-0 mx-auto w-fit">
          <Image width={170} height={335} className="object-cover" src={BG2} alt="" />
          <Image
            width={98}
            height={95}
            className="animate-[coinUpDown_4s_ease-in-out_infinite] absolute right-[-28px] bottom-[-16px]"
            src={BG5}
            alt=""
          />
          <Image
            width={54}
            height={54}
            className="animate-[coinUpDown_5s_ease_infinite] absolute left-[-10px] bottom-[120px]"
            src={BG6}
            alt=""
          />
        </div>

        {/*<Image className="absolute w-[421px] h-[454px] object-cover" src={Main} alt="" />*/}
      </div>

      <dl className="mt-10 text-center">
        <div className="flex flex-col items-center">
          <dt className="text-base font-semibold text-white">현재 총 상금</dt>
          <dd>
            <BP size="large" value={5230000} />
          </dd>
        </div>
      </dl>

      <div className="mx-5 mt-3 p-[1px] bg-[linear-gradient(180deg,#866DAD_0%,#392344_100%)] rounded-[28px]">
        <div
          className="relative pt-4 pl-6 pr-5 pb-[35px] rounded-[28px]"
          style={{
            background: 'linear-gradient(180deg, #5D33A2 -1.87%, #3F216E 93.93%)',
          }}
        >
          <dl>
            {user ? (
              <div>
                <dt className="text-[13px] text-[#ADA2E2]/90 text-center">현재 보유 BP</dt>
                <dd className="text-white text-[24px] font-bold flex items-center justify-center gap-0.5">
                  {Number(3250).toLocaleString()}
                  <Image width={24} height={24} src={BPIcon} alt="" />
                </dd>
              </div>
            ) : (
              <p className="text-[15px] font-bold text-white text-center">
                로그인 후 <span className="text-accent">블록픽</span>에 참여해 보세요!
              </p>
            )}

            <div className="mt-4 flex gap-5">
              <div className="flex-1 py-2 bg-[#6F3FBE] rounded-[12px] text-center">
                <dt className="text-sm font-semibold">진행중 블록픽</dt>
                <dd className="text-base text-white font-bold">{Number(21).toLocaleString()}개</dd>
              </div>

              <div className="flex-1 py-2 bg-[#6F3FBE] rounded-[12px] text-center">
                <dt className="text-sm font-semibold">진행중 이벤트</dt>
                <dd className="text-base text-white font-bold">{Number(2).toLocaleString()}개</dd>
              </div>
            </div>
          </dl>

          <div className="absolute left-0 right-0 -bottom-5 flex justify-center">
            <Link className="animate-[mainBounce_2s_ease-in-out_infinite]" href="/blockpick">
              <PlayButton className="w-[156px]" option="shadow">
                PICK!
              </PlayButton>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-5 mt-10 px-4.5 py-4 border border-[#2E2E67] rounded-[6px] flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image width={16} height={16} src={RewardsIcon} alt="" />
          <p className="text-[15px] text-white">매일 출석체크</p>
        </div>
        {user ? (
          <BadgeButton className="text-[12px] w-[56px] px-0" asChild>
            <Link className="text-center" href="/daily-rewards">
              출석체크
            </Link>
          </BadgeButton>
        ) : (
          <BadgeButton className="text-[12px] w-[56px] px-0" disabled>
            출석체크
          </BadgeButton>
        )}
      </div>

      <div className="mx-5 mt-4 px-4.5 py-4 border border-[#2E2E67] rounded-[6px]  flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image width={16} height={16} src={BonusIcon} alt="" />
          <p className="text-[15px] text-white">오늘의 보너스</p>
        </div>
        {user ? (
          <BadgeButton className="text-[12px] w-[56px] px-0">50BP</BadgeButton>
        ) : (
          <BadgeButton className="text-[12px] w-[56px] px-0" disabled>
            50BP
          </BadgeButton>
        )}
      </div>

      <div className="mx-5 mt-4 px-5 pt-[28px] pb-4 rounded-[12px] bg-[#231D4C]/50 flex items-center justify-between">
        <div>
          <p className="text-[15px] text-white font-semibold">
            <span className="text-accent">지금 받는</span> 보너스 타임!
          </p>
          <Link className="flex items-center mt-1 text-[12px]" href={user ? '/bonus' : ''}>
            받으러 가기
            <ChevronRightIcon width={16} height={16} />
          </Link>
        </div>
        <BP size="list" value={275000} />
      </div>

      <CheckpointAlert />
    </div>
  );
}
