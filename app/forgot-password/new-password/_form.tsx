'use client';

import { Suspense } from 'react';
import { useFormState } from 'react-dom';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/button';
import { Dialog, DialogContent, DialogClose } from '@/components/dialog';
import { Input } from '@/components/input';

import { setPassword } from './actions';

export default function Form() {
  const query = useSearchParams();
  const router = useRouter();
  const [state, action, isPending] = useFormState<any, any>(setPassword, {});

  return (
    <form action={action}>
      <input type="hidden" name="id" value={query.get('id') as string} />
      <p className="text-center text-base text-white">
        <b className="text-accent">비밀번호</b>를 입력해주세요.
      </p>
      <Input
        className="mt-4 w-full"
        type="password"
        name="password"
        autoComplete="new-password"
        placeholder="비밀번호 입력"
      />
      <Input
        className="mt-2 w-full"
        type="password"
        name="confirm-password"
        autoComplete="new-password"
        placeholder="비밀번호 확인"
      />
      {state?.message && (
        <div className="mt-3 flex items-center">
          <p className="text-accent text-[12px]">{state.message}</p>
        </div>
      )}
      <div className="mt-10 flex justify-center">
        <Button variant="secondary" className="w-[113px] text-[13px] font-medium leading-[18px]" disabled={isPending}>
          비밀번호 재설정
        </Button>
      </div>
      <Dialog
        open={!state}
        onOpenChange={() => {
          router.replace('/login');
        }}
      >
        <DialogContent className="min-w-[270px]">
          <h2 className="text-[18px] font-medium text-center">비밀번호 재설정</h2>
          <p className="mt-3 font-bold text-white text-center">
            <span className="text-accent">비밀번호 재설정</span>을 완료했습니다
            <br />
            로그인 후 사용해 주세요.
          </p>
          <div className="mt-4 flex justify-center">
            <DialogClose asChild>
              <Button size="medium">로그인하기</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  );
}
