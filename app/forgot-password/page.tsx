'use client';
import { useFormState } from 'react-dom';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { emailAction } from './actions';

export default function ForgotPassword() {
  const [state, action, isPending] = useFormState(emailAction, null);

  return (
    <form method="POST" action={action}>
      <p className="text-base text-white text-center">
        가입한 <b className="text-accent">이메일</b>을 입력해주세요
      </p>
      <div className="mt-3 w-full">
        <Input className="w-full" name="email" placeholder="ex)blockpick@gmail.com" />
        {state?.message && (
          <div className="mt-3 flex items-center">
            <p className="text-accent text-[12px]">{state.message}</p>
          </div>
        )}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          type="submit"
          className="px-5 w-[113px] leading-[18px] font-medium text-[13px]"
          variant="secondary"
          disabled={isPending}
        >
          인증메일 발송
        </Button>
      </div>
    </form>
  );
}
