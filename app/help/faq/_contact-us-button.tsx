'use client';
import LogoImage from '@/images/logo.png';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button';
import UserContext from '@/contexts/user-context';

export default function ContactUsButton() {
  const user = use(UserContext);

  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="mt-10 flex justify-center">
        <Button variant="secondary" className="rounded-[10px]" asChild>
          <Link href="/help/contact-us" className="text-center">
            1:1 문의하기
          </Link>
        </Button>
      </div>
      <div className="pt-9 pb-10 flex justify-center opacity-10">
        <Image width={110} height={20} src={LogoImage} alt="로고" />
      </div>
    </div>
  );
}
