'use client';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogClose } from '@/components/dialog';
import { Button } from '@/components/button';

export default function SuccessDialog({ isOpen }: { isOpen: boolean }) {
  const router = useRouter();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        router.replace('/help/faq');
      }}
    >
      <DialogContent className="min-w-[270px]">
        <h2 className="text-[18px] font-medium text-center">1:1 문의</h2>
        <p className="mt-3 text-white text-sm font-bold text-center">
          <span className="text-accent">문의 내용</span>이 등록 되었습니다.
          <br />
          검토 후 빠르게 답변 드리겠습니다.
        </p>
        <div className="mt-4 flex justify-center">
          <DialogClose asChild>
            <Button>확인</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
