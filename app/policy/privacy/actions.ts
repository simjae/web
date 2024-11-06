'use server';
import { type IPolicyItemResponse } from '@/types/api';

export async function getPrivacy({ pageParam }: any) {
  const response = await fetch(`${process.env.API_HOST}/api/v1/policy/type?type=PRIVACY`);
  const result: IPolicyItemResponse = await response.json();

  return result.data!.policies;
}
