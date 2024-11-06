'use server';
import { redirect } from 'next/navigation';

export async function emailAction(state: any, formData: FormData) {
  const response = await fetch(`${process.env.API_HOST}/api/v1/email-verification/send`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      verifyType: 'CHANGE_PASSWORD',
      email: formData.get('email'),
    }),
  });

  const result: {
    code: 0;
    message: string;
    data?: {
      emailVerificationId: number;
      code: string;
      remainingTime: number;
    };
  } = await response.json();

  if (result.code === 0) {
    return redirect(`/forgot-password/verify?email=${formData.get('email')}&id=${result.data!.emailVerificationId}`);
  }

  return {
    message: result.message[0],
  };
}
