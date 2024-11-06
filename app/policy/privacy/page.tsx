import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getPrivacy } from './actions';
import Privacy from './_privacy';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['privacy'],
    queryFn: getPrivacy,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Privacy />
    </HydrationBoundary>
  );
}
