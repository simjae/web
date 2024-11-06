import { type IFaqResponse } from '@/types/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import List from './_list';
import ContactUsButton from './_contact-us-button';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['faq'],
    queryFn: async () => {
      const response = await fetch(`${process.env.API_HOST}/api/v1/faq?page=1`);
      const result: IFaqResponse = await response.json();

      return result.data?.faqs.map((item) => ({
        id: item.id,
        question: item.question,
        answer: item.answer,
      }));
    },
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="pb-4 grow">
        <div className="mt-10 flex justify-center">
          <h2 className="px-12 py-3 border border-[#2E2E67] rounded-[50px]">자주하는 질문</h2>
        </div>

        <List />

        <ContactUsButton />
      </div>
    </HydrationBoundary>
  );
}
