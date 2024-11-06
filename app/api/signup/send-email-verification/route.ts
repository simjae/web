export async function POST(request: Request) {
  const body = await request.json();

  const apiResponse = await fetch(`${process.env.API_HOST}/api/v1/email-verification/send`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      verifyType: 'SIGN_UP',
      email: body.email,
    }),
  });

  const result = await apiResponse.json();
  if (result.message === 'success') {
    return Response.json(
      {
        id: result.data.emailVerificationId,
        expiredDate: new Date(Date.now() + result.data.remainingTime * 1000),
      },
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
