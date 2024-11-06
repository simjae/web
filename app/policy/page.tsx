import Link from 'next/link';
import { ChevronRight as ChevronRightIcon } from 'lucide-react';

const TITLE = '약관 및 정책';
export default function Page() {
  return (
    <div>
      <ul className="mt-10 mx-5 flex flex-col gap-4">
        <li className="bg-[#231D4C] rounded-[12px]">
          <Link className="py-4 pl-7 pr-6 flex items-center justify-between" href="/policy/terms">
            <p className="text-base font-medium text-white">서비스 이용약관</p>
            <ChevronRightIcon className="text-[#685F9F]" width={20} height={20} />
          </Link>
        </li>

        <li className="bg-[#231D4C] rounded-[12px]">
          <Link className="py-4 pl-7 pr-6 flex items-center justify-between" href="/policy/privacy">
            <p className="text-base font-medium text-white">개인정보 처리방침</p>
            <ChevronRightIcon className="text-[#685F9F]" width={20} height={20} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
