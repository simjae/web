'use client';
import { useState, useCallback, useTransition } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/button';

export default function EmailVerifyForm({
  currentStep,
  setCurrentStep,
}: {
  currentStep: string;
  setCurrentStep: (arg0: string) => void;
}) {
  const { getValues, setError } = useFormContext();

  const [pending, startTransaction] = useTransition();

  const verifyEmail = useCallback(() => {
    const [id, code] = getValues(['emailVerificationId', 'emailVerificationCode']);
    startTransaction(async () => {
      const response = await fetch('/api/signup/verify-email', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          id,
          code,
        }),
      });

      if (response.status === 201) {
        setCurrentStep('password');
      } else {
        const result = await response.json();
        setError('emailVerificationCode', {
          message: result.message,
        });
      }
    });
  }, []);

  return (
    <div className="mt-10 flex justify-center">
      <Button
        type="submit"
        className="w-[113px]"
        variant="secondary"
        onClick={verifyEmail}
        disabled={pending || currentStep !== 'emailVerification'}
      >
        코드 인증
      </Button>
    </div>
  );
}
