'use client';
import { useCallback, useTransition } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function EmailForm({ setCurrentStep }: { setCurrentStep: Function }) {
  const { register, formState, getValues, setValue, setError, clearErrors } = useFormContext();

  const [pending, startTransaction] = useTransition();

  const sendEmailVerify = useCallback(() => {
    startTransaction(async () => {
      const email = getValues('email');
      const response = await fetch('/api/signup/send-email-verification', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      const result = await response.json();
      if (response.status === 201) {
        setValue('emailVerificationId', result.id);
        setValue('emailVerificationExpiredDate', result.expiredDate);
        clearErrors('verifiedNickname');
        setCurrentStep('emailVerification');
      } else {
        setError('emailVerification', {
          message: result.message,
        });
      }
    });
  }, []);

  return (
    <div>
      <p className="text-base text-white text-center">
        <b className="text-accent">이메일</b>을 입력해주세요.
      </p>
      <Input
        // ref={emailRef}
        className="mt-3 w-full"
        placeholder="blockpick@gmail.com"
        // name="email"
        type="text"
        autoComplete="username"
        {...register('email')}
      />
      <ErrorMessage
        errors={formState.errors}
        name="emailVerification"
        render={({ message }) => <p className="text-xs mt-1.5 text-[#E36A6A]">{message}</p>}
      />
      <div className="mt-8 flex justify-center">
        <Button type="button" size="small" variant="secondary" onClick={sendEmailVerify} disabled={pending}>
          인증메일 발송
        </Button>
      </div>
    </div>
  );
}
