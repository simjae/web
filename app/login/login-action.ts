'use server';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { setSession } from '@/auth';

const loginSchema = z.object({
  email: z
    .string({
      required_error: '이메일을 입력해주세요',
    })
    .email({
      message: '올바르지 않은 이메일 입니다. 다시 확인해 주세요.',
    }),
});

export type LoginActionState = {
  message: string;
} | null;

export async function loginAction(prevState: LoginActionState, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  const response = await fetch(`${process.env.API_HOST}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email: formData.get('email'),
      password: formData.get('password'),
    }),
  });

  const result = await response.json();
  console.log(result);

  if (!validatedFields.success) {
    console.log('이 것은 오류!', validatedFields.error);
    return {
      message: '아이디와 비밀번호를 다시 확인해 주세요.',
      // errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (result.code === 0) {
    setSession(result.data.accessToken);
    return redirect('/');
  }

  return {
    message: result.message,
  };
}
