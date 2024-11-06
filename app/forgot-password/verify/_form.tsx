'use client';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

import { verifyEmail, resend } from './actions';

export default function Page() {
  const query = useSearchParams();
  const [state, action, isPending] = useFormState<{ message?: string }, FormData>(verifyEmail, {});
  const resendAction = useFormState<any, { email: string }>(resend, {});

  useEffect(() => {
    if (resendAction[0]?.message) {
      alert(resendAction[0].message);
    }
  }, [resendAction[0]]);

  return (
    <form method="POST" action={action}>
      <input type="hidden" name="id" value={query.get('id') as string} />
      <p className="text-white text-base text-center">
        메일로 <b className="text-accent">전송된 코드</b>를 인증해 주세요.
      </p>
      <div className="mt-3 flex gap-1">
        <Input className="grow" name="code" placeholder="인증코드" />
        <button
          type="button"
          disabled={resendAction[2]}
          className="px-4.5 text-[13px] bg-[#4F4E9F] rounded-[8px] text-white shrink-0"
          onClick={() => {
            resendAction[1]({ email: query.get('email') as string });
          }}
        >
          재전송
        </button>
      </div>
      {state?.message && (
        <div className="mt-3 flex items-center">
          <p className="text-accent text-[12px]">{state.message}</p>
        </div>
      )}
      <div className="mt-10 flex justify-center">
        <Button variant="secondary" className="w-[113px] text-[13px] font-medium leading-[18px]" disabled={isPending}>
          코드 인증
        </Button>
      </div>
    </form>
  );
}
