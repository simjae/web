import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function SettingsPage() {
  const user = await auth();

  if (!user) {
    return redirect('/login');
  }

  return (
    <div>
      <div className="mt-12 flex flex-col items-center">
        <img className="rounded-full w-[68px] h-[68px] object-cover" src={user.profileImageUrl} alt="" />
        <button className="mt-5 px-3 py-1 text-[13px] bg-[#4F4E9F] rounded-[50px] text-white">프로필 변경</button>
      </div>

      <dl className="mt-7 mx-5 px-3 bg-[#231D4C] rounded-[12px] divide-y divide-[#121238]">
        <div className="flex items-center gap-8 px-3.5 py-4">
          <dt className="text-[13px]">이메일</dt>
          <dd className="text-base text-white">{user.email}</dd>
        </div>

        <div className="flex items-center gap-8 px-3.5 py-4">
          <dt className="text-[13px]">닉네임</dt>
          <dd className="text-white">{user.nickname}</dd>
        </div>
      </dl>
      <div className="mx-5 mt-4 flex justify-end">
        <Link href="/settings/delete" className="underline text-xs text-[#CCC5F1]">
          회원탈퇴
        </Link>
      </div>
    </div>
  );
}
