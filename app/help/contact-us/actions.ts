'use server';

import { z } from 'zod';
import { getToken } from '@/auth';

const loginSchema = z.object({
  inquiryType: z.string().min(1, '문의 유형을 선택해주세요'),
  content: z.string({
    required_error: '내용을 입력해주세요.',
  }),
});

export async function createTicket(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    inquiryType: formData.get('inquiryType'),
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors[0].message,
    };
  }

  const jwt = getToken();
  const response = await fetch(`${process.env.API_HOST}/api/v1/inquiry`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      inquiryType: validatedFields.data.inquiryType,
      question: validatedFields.data.content,
    }),
  });

  const result = await response.json();

  console.log(result);
  if (response.status === 201) {
    return null;
  }

  return {
    message: result.message,
  };
}
