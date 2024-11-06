import LogoImage from '@/images/logo.png';
import NoProfile from '@/images/no-profile.png';
import BellIcon from './bell.png';

import Image from 'next/image';
import Link from 'next/link';

export default function Header({ user }: { user: any }) {
  return (
    <div className="mx-5 mt-1 flex items-center justify-between">
      <Image className="" src={LogoImage} width={110} height={20} alt="logo" />
      <div className="flex gap-2">
        <Link href="/login" className="flex items-center gap-2 text-white text-[12px] bg-[#1E2037] rounded-[50px] pr-2">
          {user ? (
            <img className="rounded-full w-6 h-6 object-cover" width={24} height={24} src={user.profileImageUrl} />
          ) : (
            <Image unoptimized width={24} height={24} src={NoProfile} alt="" />
          )}
          {user ? user.nickname : '로그인'}
        </Link>
        {user && (
          <Link
            href="/notifications"
            className="relative bg-[#3A374A]/50 flex items-center justify-center rounded-full w-[24px]"
          >
            <Image src={BellIcon} width={16} height={16} alt="" />
          </Link>
        )}
      </div>
    </div>
  );
}
