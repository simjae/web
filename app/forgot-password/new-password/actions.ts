'use server';

export async function setPassword(prevState: any, formData: FormData) {
  const password = formData.get('password');
  const passwordConfirm = formData.get('confirm-password');

  console.log(password, passwordConfirm, Number.parseInt(formData.get('id') as string));
  if (password !== passwordConfirm) {
    return {
      message: '비밀번호가 서로 다릅니다. 다시 확인해 주세요.',
    };
  }

  const response = await fetch(`${process.env.API_HOST}/api/v1/user/password`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      emailVerificationId: Number.parseInt(formData.get('id') as string),
      newPassword: password,
    }),
  });

  const result = await response.json();

  console.dir(result, { depth: null });
  return null;
}
