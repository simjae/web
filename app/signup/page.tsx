'use client';
import { useState, useCallback } from 'react';

import { useForm, FormProvider } from 'react-hook-form';
import Link from 'next/link';
import { Button } from '@/components/button';
import { Dialog, DialogContent } from '@/components/dialog';
import EmailForm from './_email-form';
import ResendForm from './_resend-form';
import EmailVerifyForm from './_email-verify-form';
import NewPasswordForm from './_new-password-form';
import NicknameForm from './_nickname-form';

export default function SignupPage() {
  const methods = useForm();
  const [currentStep, setCurrentStep] = useState('email');
  const [isSucceed, setIsSucceed] = useState(false);

  const onSubmit = useCallback((data: any) => {
    console.log('gdgd', data);
    fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        nickname: data.nickname,
        emailVerificationId: data.emailVerificationId,
      }),
    }).then((response) => {
      if (response.status === 201) {
        setIsSucceed(true);
      }
    });
  }, []);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mx-5 mt-7 px-6 pt-8 pb-10 bg-[#231D4C]/50 rounded-[12px]">
          {currentStep === 'email' && <EmailForm setCurrentStep={setCurrentStep} />}

          {(currentStep === 'emailVerification' || currentStep === 'password') && (
            <div>
              <p className="text-base text-white text-center">
                메일로 <b className="text-accent">전송된 코드</b>를 인증해 주세요.
              </p>
              <ResendForm currentStep={currentStep} />
              <EmailVerifyForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
              <hr className="my-10 h-[1px] bg-[#232356] border-none w-full" />
              <NewPasswordForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </div>
          )}

          {currentStep === 'nickname' && <NicknameForm />}
        </div>
      </form>
      <Dialog open={isSucceed}>
        <DialogContent>
          <p className="text-[18px] font-medium text-center">환영합니다!!</p>
          <p className="mt-3 text-sm font-bold text-center text-white">
            <span className="text-accent">회원가입</span>을 완료했습니다
            <br />
            로그인 후 사용해 주세요.
          </p>
          <div className="mt-4 flex justify-center">
            <Link href="/login">
              <Button>로그인하기</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </FormProvider>
  );
}
