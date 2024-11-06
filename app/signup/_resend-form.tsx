'use client';
import { useCallback, useEffect, useState, useRef, useTransition } from 'react';
import { differenceInSeconds } from 'date-fns/differenceInSeconds';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@/components/input';

export default function ResendForm({ currentStep }: { currentStep: string }) {
  const { formState, register, watch, getValues, setValue, setError, clearErrors } = useFormContext();

  const _expiredDate = watch('emailVerificationExpiredDate');
  const [pending, startTransaction] = useTransition();
  const [remainSeconds, setRemainSeconds] = useState<number | null>(null);

  const interval = useRef<any>(null);

  useEffect(() => {
    clearInterval(interval.current);
    const expiredDate = new Date(_expiredDate);
    interval.current = setInterval(() => {
      const seconds = differenceInSeconds(expiredDate, new Date());
      if (seconds < 0) {
        clearInterval(interval.current);
      }
      setRemainSeconds(seconds < 0 ? 0 : seconds);
    }, 1000);
  }, [_expiredDate]);

  useEffect(() => {
    if (currentStep !== 'emailVerification') {
      clearInterval(interval.current);
      setRemainSeconds(null);
    }
  }, [currentStep]);

  const resendEmailVerification = useCallback(() => {
    startTransaction(async () => {
      const response = await fetch('/api/signup/send-email-verification', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: getValues('email'),
        }),
      });

      const result: any = await response.json();

      if (response.status === 201) {
        setValue('emailVerificationId', result.id);
        setValue('emailVerificationExpiredDate', result.expiredDate);
        clearErrors('emailVerificationCode');
      } else {
        setError('emailVerificationCode', result.message);
        alert();
      }
    });
  }, []);

  return (
    <div>
      <div className="mt-3 flex gap-1">
        <div className="relative grow">
          <Input
            className="w-full"
            readOnly={currentStep !== 'emailVerification'}
            placeholder="인증코드"
            {...register('emailVerificationCode')}
          />
          {typeof remainSeconds === 'number' && (
            <div className="absolute right-4 top-0 bottom-0 flex items-center">
              <p className="text-[13px]">
                {Math.floor(remainSeconds / 60)}:{String(remainSeconds % 60).padStart(2, '0')}
              </p>
            </div>
          )}
        </div>
        <button
          type="button"
          className="shrink-0 px-4.5 bg-[#4F4E9F] text-white text-[13px] rounded-[8px] disabled:bg-[#34345A] disabled:text-[#56568E]"
          disabled={pending || currentStep !== 'emailVerification'}
          onClick={resendEmailVerification}
        >
          재전송
        </button>
      </div>
      {currentStep === 'password' && <p className="mt-1.5 text-xs">정상 인증 되었습니다.</p>}
      <ErrorMessage
        errors={formState.errors}
        name="emailVerificationCode"
        render={({ message }) => <p className="text-xs mt-1.5 text-[#E36A6A]">{message}</p>}
      />
    </div>
  );
}
