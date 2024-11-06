'use server';

import { redirect, RedirectType } from 'next/navigation';

export async function verifyEmail(prevState: any, formData: FormData) {
  const response = await fetch(`${process.env.API_HOST}/api/v1/email-verification/verify`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      code: formData.get('code'),
      emailVerificationId: Number.parseInt(formData.get('id') as string),
    }),
  });

  const result = await response.json();

  if (result.code === 0) {
    return redirect(`/forgot-password/new-password?id=${formData.get('id')}`, RedirectType.replace);
  }

  return {
    message: result.message,
  };
}

export async function resend(prevState: any, formData: { email: string }) {
  const response = await fetch(`${process.env.aAPI_HOST}/api/v1/email-verification/send`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      verifyType: 'CHANGE_PASSWORD',
      email: formData.email,
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
    return redirect(
      `/forgot-password/verify?email=${formData.email}&id=${result.data!.emailVerificationId}`,
      RedirectType.replace,
    );
  }

  return {
    message: result.message,
  };
}
