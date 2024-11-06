import { LoaderCircle as LoaderCircleIcon } from 'lucide-react';

export default function Loading() {
  return (
    <div className="h-full flex items-center justify-center">
      <LoaderCircleIcon width={68} height={68} className="animate-spin ease-out text-primary" strokeWidth={2.5} />
    </div>
  );
}
