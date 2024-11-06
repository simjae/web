'use client';
import Link from 'next/link';
import { Dialog, DialogClose, DialogContent } from '@/components/dialog';
import { Button } from '@/components/button';

type Props = {
  open: boolean;
  onOpenChange: any;
};

export default function LoginDialog(props: Props) {
  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent className="px-4.5 py-5">
        <h2 className="text-lg font-medium text-center">로그인</h2>
        <p className="mt-1.5 text-white text-sm font-bold whitespace-nowrap">
          <span className="text-accent">블록픽 참여</span>를 위해 로그인이 필요합니다.
        </p>
        <div className="mt-3 flex flex-col items-center gap-2">
          <Button asChild>
            <Link href="/login" className="text-center">
              로그인하기
            </Link>
          </Button>
          <DialogClose asChild>
            <Button variant="tertiary">블록픽 참여 안하기</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
