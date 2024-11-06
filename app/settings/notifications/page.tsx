import dynamic from 'next/dynamic';
import { Toggle } from '@/components/toggle';

const AlertDialog = dynamic(() => import('./_alert-dialog'));
export default function NotificationSettingPage() {
  return (
    <div className="mt-12 flex flex-col gap-4 px-5">
      <div className="flex flex-col gap-4">
        <div className="pl-7 pr-5 py-4 flex bg-[#231D4C] justify-between rounded-[12px]">
          <p className="text-base font-medium text-white">푸시알림</p>
          <Toggle />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="pl-7 pr-5 py-4 flex bg-[#231D4C] justify-between rounded-[12px]">
          <p className="text-base font-medium text-white">마케팅 정보 알림</p>
          <Toggle />
        </div>
      </div>
      <AlertDialog />
    </div>
  );
}
