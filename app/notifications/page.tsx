import Link from 'next/link';
import List from './_list';

import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function Page({ searchParams: { tab } }: any) {
  const user = await auth();

  if (!user) {
    return redirect('/login');
  }

  return (
    <div>
      {tab === 'gift' ? (
        <ul className="flex">
          <li className="shrink-0 border-b-2 border-[#231D4C] w-[20px]" />
          <li className="pt-3 grow text-center text-sm border-b-2 border-[#231D4C]">
            <Link
              href={{
                query: { tab: 'notifications' },
              }}
            >
              알림
            </Link>
          </li>
          <li className="py-3 grow flex justify-center text-sm font-semibold text-white border-b-[3px] border-[#4A418B]">
            <Link
              href={{
                query: { tab: 'gift' },
              }}
            >
              <p className="relative">
                선물함
                <span className="w-1 h-1 -right-2 top-0.5 absolute bg-[#DF4949] rounded-full" />
              </p>
            </Link>
          </li>
          <li className="shrink-0 border-b-2 border-[#231D4C] w-[20px]" />
        </ul>
      ) : (
        <ul className="flex">
          <li className="shrink-0 border-b-2 border-[#231D4C] w-[20px]" />
          <li className="py-3 grow flex justify-center text-sm font-semibold text-white border-b-[3px] border-[#4A418B]">
            <Link
              href={{
                query: { tab: 'notifications' },
              }}
            >
              <p className="relative">
                알림
                <span className="w-1 h-1 -right-2 top-0.5 absolute bg-[#DF4949] rounded-full" />
              </p>
            </Link>
          </li>
          <li className="pt-3 grow text-center text-sm border-b-2 border-[#231D4C]">
            <Link
              href={{
                query: { tab: 'gift' },
              }}
            >
              선물함
            </Link>
          </li>
          <li className="shrink-0 border-b-2 border-[#231D4C] w-[20px]" />
        </ul>
      )}
      <List />
    </div>
  );
}
