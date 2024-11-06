'use client';
import type { LoginActionState } from './login-action';
import LoginLogo from './login-logo.png';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { LinkButton } from '@/components/link-button';
import { loginAction } from './login-action';

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [formState, formAction, isPending] = useFormState<LoginActionState, FormData>(loginAction, null);

  return showLogin ? (
    <form className="h-full flex flex-col" method="POST" action={formAction}>
      <div className="flex-1 flex flex-col justify-center gap-20">
        <div className="flex items-center justify-center">
          <Image width={213} height={150} src={LoginLogo} alt="login logo" />
        </div>
        <div className="px-10 flex flex-col gap-2 w-full">
          <Input type="text" name="email" placeholder="아이디(이메일주소)" />
          <Input type="password" name="password" placeholder="비밀번호" />
          {formState?.message && <p className="mt-1 text-xs text-accent">{formState.message}</p>}
        </div>
      </div>
      <div className="pb-5 flex flex-col items-center">
        <Button type="submit" size="large" disabled={isPending}>
          로그인
        </Button>
        <Link href="/forgot-password" className="mt-4">
          <LinkButton>로그인정보를 잊어버렸어요.</LinkButton>
        </Link>
      </div>
    </form>
  ) : (
    <div className="pb-10 h-full flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center">
        <Image width={213} height={150} src={LoginLogo} alt="login logo" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <Button size="large" onClick={() => setShowLogin(true)}>
          로그인
        </Button>
        <Button size="large" variant="secondary" asChild>
          <Link className="text-center" href="/signup">
            회원가입
          </Link>
        </Button>
      </div>
    </div>
  );
}
