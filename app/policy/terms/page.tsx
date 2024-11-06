import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getTerms } from './actions';
import Terms from './_terms';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['terms'],
    queryFn: getTerms,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Terms />
    </HydrationBoundary>
  );
}
