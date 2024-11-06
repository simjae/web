export async function POST(request: Request) {
  const body = await request.json();

  const apiResponse = await fetch(`${process.env.API_HOST}/api/v1/email-verification/verify`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      emailVerificationId: body.id,
      code: body.code,
    }),
  });

  const result = await apiResponse.json();
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
