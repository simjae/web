'use server';
import { type INotificationResponse } from '@/types/api';

export async function getAnnouncements({ pageParam }: any) {
  const response = await fetch(`${process.env.API_HOST}/api/v1/notification?page=${pageParam}&take=5`);
  const result: INotificationResponse = await response.json();

  return {
    page: pageParam,
    totalCount: result.data!.totalCount,
    perPage: result.data!.take,
    data: result.data!.notifications,
  };
}
