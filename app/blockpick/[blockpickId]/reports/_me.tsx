import LockIcon from './lock.png';
import UnlockIcon from './unlock.png';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight as ChevronRightIcon, X as XIcon } from 'lucide-react';

export default function Me() {
  return (
    <ul className="mx-5 mt-6 flex flex-col gap-4">
      <li className="px-4 py-3 rounded-[12px] bg-[#231D4C]">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px]">블록 NO.</p>
            <p className="text-[#FFCD32] text-[21px] leading-[1] font-bold">{Number(1356).toLocaleString()}</p>
          </div>
          <span className="w-[50px] h-[20px] flex items-center justify-center text-[#222222] text-[11px] leading-[1] font-bold bg-[linear-gradient(180deg,#FFCD32_0%,#FFDB6C_75.81%)] rounded-[10px]">
            유효
          </span>
        </div>

        <div className="mt-3 flex">
          <div className="flex-1 px-4 py-2 bg-[#080C22] rounded-[6px]">
            <p className="text-[11px]">선택 정보</p>
            <p className="text-xs text-white">2024.06.12 - 12:50:12</p>
            <Link
              href="/"
              className="relative py-1 flex items-center justify-center bg-[linear-gradient(180deg,#5C329F_0%,#402271_96.5%)] rounded-[5px]"
            >
              <p className="text-[11px] leading-[1]">0x6512...7831</p>
              <div className="absolute top-0 bottom-0 right-1 flex items-center">
                <ChevronRightIcon width={12} height={12} className="" />
              </div>
            </Link>
          </div>
          <div className="shrink-0 relative w-[3px]">
            <div className="absolute top-0 bottom-0 left-0 translate-x-[-50%] flex items-center">
              <div className="w-[22px] h-[22px] p-[1px] bg-[linear-gradient(180deg,#FFCD32_0%,#BA5EA7_100%)] rounded-full">
                <div className="w-full h-full bg-[#231D4C] rounded-full flex items-center justify-center">
                  <Image className="max-w-[unset] w-[14px] h-[14px]" width={14} height={14} src={LockIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col px-4 py-2 bg-[#080C22] rounded-[6px]">
            <p className="text-[11px]">체크 정보</p>
            <p className="grow flex items-center justify-center text-sm text-[#474777]">체크내역이 없습니다.</p>
          </div>
        </div>
      </li>

      <li className="px-4 py-3 rounded-[12px] bg-[#231D4C]">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px]">블록 NO.</p>
            <p className="text-[#DF4949] text-[21px] leading-[1] font-bold">{Number(1356).toLocaleString()}</p>
          </div>
          <span className="w-[50px] h-[20px] text-white text-[11px] leading-[1] font-bold flex items-center justify-center bg-[linear-gradient(180deg,#C02930_0%,#7C183E_75.81%)] rounded-[10px]">
            탈락 / 1픽
          </span>
        </div>

        <div className="mt-3 flex">
          <div className="flex-1 px-4 py-2 bg-[#080C22] rounded-[6px]">
            <p className="text-[11px]">선택 정보</p>
            <p className="text-xs text-white">2024.06.12 - 12:50:12</p>
            <Link
              href="/"
              className="relative py-1 flex items-center justify-center bg-[linear-gradient(180deg,#5C329F_0%,#402271_96.5%)] rounded-[5px]"
            >
              <p className="text-[11px] leading-[1]">0x6512...7831</p>
              <div className="absolute top-0 bottom-0 right-1 flex items-center">
                <ChevronRightIcon width={12} height={12} className="" />
              </div>
            </Link>
          </div>

          <div className="shrink-0 relative w-[3px]">
            <div className="absolute top-0 bottom-0 left-0 translate-x-[-50%] flex items-center">
              <div className="w-[22px] h-[22px] bg-[#231D4C] rounded-full flex items-center justify-center">
                <Image className="max-w-[unset] w-[14px] h-[14px]" width={14} height={14} src={UnlockIcon} alt="" />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col px-4 py-2 bg-[#080C22] rounded-[6px]">
            <p className="text-[11px]">체크 정보</p>
            <p className="text-xs text-white">2024.06.12 - 12:50:12</p>
            <Link
              href="/"
              className="relative py-1 flex items-center justify-center bg-[linear-gradient(180deg,#5C329F_0%,#402271_96.5%)] rounded-[5px]"
            >
              <p className="text-[11px] leading-[1]">0x6512...7831</p>
              <div className="absolute top-0 bottom-0 right-1 flex items-center">
                <ChevronRightIcon width={12} height={12} className="" />
              </div>
            </Link>
          </div>
        </div>
      </li>

      <li className="px-4 py-3 rounded-[12px] bg-[#231D4C]">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px]">블록 NO.</p>
            <p className="text-[#9988B3] text-[21px] leading-[1] font-bold">{Number(1356).toLocaleString()}</p>
          </div>
          <span className="w-[50px] h-[20px] flex items-center justify-center text-white text-[11px] leading-[1] font-bold px-4 py-1 bg-[#474777] rounded-[10px]">
            무효
          </span>
        </div>

        <div className="mt-3 flex">
          <div className="flex-1 px-4 py-2 bg-[#080C22] rounded-[6px]">
            <p className="text-[11px]">선택 정보</p>
            <p className="text-xs text-white">2024.06.12 - 12:50:12</p>
            <Link
              href="/"
              className="relative py-1 flex items-center justify-center bg-[linear-gradient(180deg,#5C329F_0%,#402271_96.5%)] rounded-[5px]"
            >
              <p className="text-[11px] leading-[1]">0x6512...7831</p>
              <div className="absolute top-0 bottom-0 right-1 flex items-center">
                <ChevronRightIcon width={12} height={12} className="" />
              </div>
            </Link>
          </div>

          <div className="shrink-0 relative w-[3px]">
            <div className="absolute top-0 bottom-0 left-0 translate-x-[-50%] flex items-center">
              <div className="w-[22px] h-[22px] bg-[#414170] rounded-full flex items-center justify-center">
                <XIcon className="text-[#161644]" width={16} height={16} strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col px-4 py-2 bg-[#080C22] rounded-[6px]">
            <p className="text-[11px]">체크 정보</p>
            <p className="grow flex items-center justify-center text-sm text-[#474777]">체크내역이 없습니다.</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
