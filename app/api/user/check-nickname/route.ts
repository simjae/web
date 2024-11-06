import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const nickname = searchParams.get('nickname');

  const apiResponse = await fetch(`${process.env.API_HOST}/api/v1/user/check-nickname`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      nickname,
    }),
  });

  const result = await apiResponse.json();
  if (result.code === 0) {
    return Response.json(
      {},
      {
        status: 200,
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
