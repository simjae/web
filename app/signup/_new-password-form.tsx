'use client';
import { useFormStatus } from 'react-dom';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function NewPasswordForm({
  currentStep,
  setCurrentStep,
}: {
  currentStep: string;
  setCurrentStep: Function;
}) {
  const { formState, register, getValues, setError, clearErrors } = useFormContext();
  const { pending } = useFormStatus();

  const setPassword = useCallback(() => {
    const [password, passwordConfirm] = getValues(['password', 'passwordConfirm']);
    if (password.length < 8) {
      return setError('password', { message: '최소 8자 이상 입력해 주세요.' });
    } else {
      clearErrors('password');
    }

    if (password !== passwordConfirm) {
      return setError('passwordConfirm', { message: '비밀번호가 서로 다릅니다. 다시 확인해 주세요.' });
    } else {
      clearErrors('passwordConfirm');
    }

    setCurrentStep('nickname');
  }, []);

  return (
    <>
      <p className="text-base text-white text-center">
        <strong className="text-accent">비밀번호</strong>를 입력 해주세요
      </p>
      <div className="mt-3 flex flex-col gap-2">
        <div>
          <Input
            className="w-full"
            placeholder="비밀번호 입력"
            type="password"
            autoComplete="new-password"
            disabled={currentStep !== 'password'}
            {...register('password')}
          />
        </div>

        <div>
          <Input
            className="w-full"
            placeholder="비밀번호 확인"
            type="password"
            autoComplete="new-password"
            disabled={currentStep !== 'password'}
            {...register('passwordConfirm')}
          />
        </div>
      </div>
      <ErrorMessage
        errors={formState.errors}
        name="password"
        render={({ message }) => <p className="text-xs mt-1.5 text-[#E36A6A]">{message}</p>}
      />
      <ErrorMessage
        errors={formState.errors}
        name="passwordConfirm"
        render={({ message }) => <p className="text-xs mt-1.5 text-[#E36A6A]">{message}</p>}
      />
      <div className="mt-8 flex justify-center">
        <Button
          type="button"
          size="small"
          variant="secondary"
          disabled={pending || currentStep !== 'password'}
          onClick={setPassword}
        >
          확인
        </Button>
      </div>
    </>
  );
}
