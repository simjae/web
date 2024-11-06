import type { Viewport } from 'next';

import Logo from '@/images/logo.png';
import NoProfile from '@/images/no-profile.png';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button';
import { ChevronRight as ChevronRightIcon } from 'lucide-react';
import { auth } from '@/auth';

export const viewport: Viewport = {
  themeColor: '#121238',
};

export default async function Page() {
  const user = await auth();

  return (
    <div className="grow">
      <div className="absolute top-0 left-0 right-0 h-[320px] bg-[#231D4C]/50" />
      <div className="absolute top-0 left-0 right-0">
        {user ? (
          <div className="mt-10 flex flex-col items-center">
            <img
              width={68}
              height={68}
              className="w-[68px] h-[68px] rounded-full object-cover"
              src={user.profileImageUrl}
              alt=""
            />
            <p className="text-base text-white font-bold mt-2">{user.nickname}</p>
            <p className="text-[13px]">{user.email}</p>
            <Link className="mt-4 block p-1.5 rounded-full bg-[#23234E]" href="/settings/profile">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.545 7.85296V6.14713L11.6499 5.67545C11.5529 5.32007 11.4042 4.97115 11.2231 4.64807L12.232 2.97456L11.0226 1.76627L9.34738 2.77425C9.02399 2.59333 8.68119 2.44472 8.32546 2.3478L7.85331 0.45459H6.1458L5.67365 2.3478C5.31792 2.44472 4.96865 2.59333 4.65173 2.77425L2.97656 1.76627L1.76707 2.97456L2.77606 4.64807C2.59496 4.96469 2.4462 5.3136 2.34918 5.66898L0.454102 6.14067V7.85296L2.34918 8.32464C2.4462 8.68002 2.59496 9.02894 2.77606 9.35201L1.76707 11.0255L2.97656 12.2338L4.65173 11.2258C4.97512 11.4068 5.31792 11.5554 5.67365 11.6523L6.1458 13.5455H7.85331L8.32546 11.6523C8.68119 11.5554 9.03046 11.4068 9.34738 11.2258L11.0226 12.2338L12.232 11.0255L11.2231 9.35201C11.4042 9.02894 11.5529 8.68648 11.6499 8.32464L13.545 7.85296ZM6.99309 9.55878C5.57663 9.55878 4.43182 8.4151 4.43182 7.00004C4.43182 5.58499 5.57663 4.44131 6.99309 4.44131C8.40955 4.44131 9.55435 5.58499 9.55435 7.00004C9.55435 8.4151 8.40955 9.55878 6.99309 9.55878Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-2">
            <Image width={68} height={68} src={NoProfile} alt="" />
            <p className="text-base text-white font-bold">로그인 후 참여해 주세요</p>
            <Button className="" size="small" asChild>
              <Link href="/login" className="text-center">
                로그인하기
              </Link>
            </Button>
          </div>
        )}
        <ul className="mx-5 mt-8 bg-[#231D4C] rounded-[12px] px-3 divide-y divide-[#121238]">
          <li>
            <Link href="/help/announcements" className="flex items-center justify-between">
              <p className="px-4 py-4 text-white text-base text-medium">공지사항</p>
              <ChevronRightIcon className="text-[#685F9F]" />
            </Link>
          </li>

          <li>
            <Link href="/help/faq" className="flex items-center justify-between">
              <p className="px-4 py-4 text-white text-base text-medium">고객센터</p>
              <ChevronRightIcon className="text-[#685F9F]" />
            </Link>
          </li>

          <li>
            <Link href="/settings/notifications" className="flex items-center justify-between">
              <p className="px-4 py-4 text-white text-base text-medium">알림설정</p>
              <ChevronRightIcon className="text-[#685F9F]" />
            </Link>
          </li>

          <li>
            <Link href="/policy" className="flex items-center justify-between">
              <p className="px-4 py-4 text-white text-base text-medium">약관 및 정책</p>
              <ChevronRightIcon className="text-[#685F9F]" />
            </Link>
          </li>
        </ul>
        <div className="flex justify-center mt-8">
          <Image className="opacity-10" width={110} height={20} src={Logo} alt="로고" />
        </div>
      </div>
    </div>
  );
}
