import { Button } from '@/components/button';
import { Drawer, DrawerContent } from '@/components/drawer';

export default function AlertConfirmDialog({ open, onOpenChange }: any) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-gradient-180 from-[#2E2E67] to-[#0B0F23]">
        <h2 className="text-base font-medium text-center">알림설정</h2>
        <p className="mt-4 text-lg font-bold text-white text-center">
          Check Point를 놓치지 않도록
          <br />
          <span className="text-[#FFC937]">알림을 반드시 설정</span> 해주세요.
        </p>
        <p className="mt-4 text-[13px] text-white/70 font-medium text-center">
          새로운 블록픽 시작과 당첨자 발표 및 다양한 혜택 등<br />
          알림설정을 하면 먼저 소식을 받아 볼 수 있어요.
        </p>
        <div className="mt-8 pb-10 flex justify-center">
          <Button>알림 ON</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
