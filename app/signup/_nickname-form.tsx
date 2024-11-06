'use client';
import { useTransition, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function NicknameForm() {
  const { formState, register, getValues, setValue, setError, clearErrors } = useFormContext();
  const [pending, startTransition] = useTransition();

  const isVerified = !!getValues('verifiedNickname');
  const checkNickname = useCallback(() => {
    const nickname = getValues('nickname');
    startTransition(async () => {
      const response = await fetch(`/api/user/check-nickname?nickname=${nickname}`);

      if (response.status === 200) {
        setValue('verifiedNickname', nickname);
        clearErrors('verifiedNickname');
      } else {
        setValue('verifiedNickname', undefined);
        const result = await response.json();
        setError('nickname', {
          message: result.message,
        });
      }
    });
  }, []);

  return (
    <div className="">
      <p className="text-center text-white">
        사용하실 <b className="text-accent">닉네임</b>을 입력해주세요
      </p>
      <div className="mt-3 grow flex gap-1 w-full">
        <Input className="grow" placeholder="닉네임" {...register('nickname')} />
        <button
          type="button"
          disabled={pending}
          onClick={checkNickname}
          className="shrink-0 px-3 py-2 text-[13px] bg-[#4F4E9F] text-white rounded-[8px]"
        >
          중복확인
        </button>
      </div>
      {isVerified && <p className="text-xs mt-1.5">사용할 수 있는 닉네임 입니다.</p>}
      <ErrorMessage
        errors={formState.errors}
        name="nickname"
        render={({ message }) => <p className="text-xs mt-1.5 text-[#E36A6A]">{message}</p>}
      />
      <div className="mt-10 flex justify-center">
        <Button type="submit" className="w-[113px]" disabled={!isVerified} variant="secondary">
          회원가입
        </Button>
      </div>
    </div>
  );
}
