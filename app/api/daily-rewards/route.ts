import { IUserAttendanceRewardResponse } from '@/types/api';

import { getToken } from '@/auth';

export async function POST(request: Request) {
  const jwt = getToken();
  const apiResponse = await fetch(`${process.env.API_HOST}/api/v1/user-attendance-reward/reward`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  const result: IUserAttendanceRewardResponse = await apiResponse.json();
  if (result.message === 'success') {
    console.log(result);
    return Response.json(
      {
        rewards: result.data?.rewards.map((r) => ({
          reward: r.rewardAmount,
          multiple: r.rewardCount,
        })),
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
