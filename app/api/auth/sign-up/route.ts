import { type ISingupResponse } from '@/types/api';

export async function POST(request: Request) {
  const body = await request.json();

  const apiResponse = await fetch(`${process.env.API_HOST}/api/v1/auth/sign-up`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email: body.email,
      password: body.password,
      nickname: body.nickname,
      emailVerificationId: body.emailVerificationId,
    }),
  });

  const result: ISingupResponse = await apiResponse.json();
  if (result.message === 'success') {
    return Response.json(
      {},
      {
        status: 201,
      },
    );
  }

  return Response.json(
    {
      message: result.message,
    },
    {
      status: 400,
    },
  );
}
