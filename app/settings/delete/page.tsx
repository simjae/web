'use client';
import { deleteAction } from './actions';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/button';

export default function Page() {
  const [state, _deleteAction] = useFormState<any, any>(deleteAction, {});

  return (
    <div className="mx-5 mt-10">
      <h2 className="text-lg font-bold text-white text-center">
        계정을 <span className="text-accent">삭제</span>합니다
      </h2>
      <ul className="list-disc pl-4">
        <li>계정을 삭제하면 뭐시기</li>
      </ul>
      <form className="mt-3" method="DELETE" action={_deleteAction}>
        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      삭제합니다
    </Button>
  );
}
