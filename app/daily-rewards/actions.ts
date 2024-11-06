'use server';
import { type IUserAttendanceRewardListResponse } from '@/types/api';

import { getToken } from '@/auth';

export async function getRewards() {
  const jwt = getToken();
  const response = await fetch(`${process.env.API_HOST}/api/v1/user-attendance-reward`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const result: IUserAttendanceRewardListResponse = await response.json();
  return result.data?.attendanceRewards.map((r) => ({
    id: r.id,
    day: r.days,
    status: r.isReceived ? 'claimed' : r.isActive ? 'available' : 'unavailable',
    rewards: r.rewards.map((reward) => ({
      type: reward.rewardGoods,
      amount: reward.rewardAmount,
      multiple: reward.rewardCount,
    })),
  }));
}
