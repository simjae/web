import { Button } from '@/components/button';
import { Dialog, DialogContent } from '@/components/dialog';

export default function AlertDialog() {
  return (
    <Dialog open>
      <DialogContent>
        <h2 className="text-lg font-medium text-center">알림설정</h2>
        <p className="mt-2.5 text-white text-sm font-bold text-center">
          디바이스의 설정 기능에서
          <br />
          알림 상태를 변경할 수 있습니다.
          <br />
          설정으로 이동해 변경 하시겠습니까?
        </p>

        <div className="mt-3 flex flex-col gap-2">
          <Button>이동</Button>
          <Button variant="tertiary">취소</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
