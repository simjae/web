import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Detail from './_detail';

export default async function AnnouncementPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['announcements', id],
    queryFn: async () => {
      const response = await fetch(`${process.env.API_HOST}/api/v1/notification`);
      const result = await response.json();
      return result.data.notifications.find((n: any) => n.id === id);
    },
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="grow h-full px-5 py-12">
        <Detail />
      </div>
    </HydrationBoundary>
  );
}
