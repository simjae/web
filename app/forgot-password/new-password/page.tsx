import { Suspense } from 'react';
import Form from './_form';

export default function Page() {
  return (
    <Suspense>
      <Form />
    </Suspense>
  );
}
