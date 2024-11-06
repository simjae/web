'use server';
import { redirect } from 'next/navigation';
import { getToken, clearToken } from '@/auth';

export async function deleteAction() {
  const jwt = getToken();

  const response = await fetch(`${process.env.API_HOST}/api/v1/user/withdraw`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'content-type': 'application/json',
    },
  });

  const result = await response.json();

  console.log(result);

  clearToken();
  redirect('/');
}
