'use server';
import { type IPolicyItemResponse } from '@/types/api';

export async function getTerms({ pageParam }: any) {
  const response = await fetch(`${process.env.API_HOST}/api/v1/policy/type?type=TERMS`);
  const result: IPolicyItemResponse = await response.json();

  return result.data!.policies;
}
