import Me from './_me';
export default function Page() {
  return (
    <div>
      <ul className="flex">
        <li className="shrink-0 border-b-2 border-[#231D4C] w-[20px]" />

        <li className="py-3 grow flex justify-center text-sm font-semibold text-white border-b-[3px] border-[#4A418B]">
          내 참여 내역
        </li>
        <li className="pt-3 grow text-center text-sm border-b-2 border-[#231D4C]">전체 현황</li>
        <li className="shrink-0 border-b-2 border-[#231D4C] w-[20px]" />
      </ul>
      <Me />
      <ul className="mt-4 mx-5 ps-4 text-[11px] font-light list-disc">
        <li>모든 참여 내역은 블록체인에 기록되며, 메인넷에서 직접 확인할 수 있습니다.</li>
        <li>Check 하기 전까지 참여 정보는 암호화 되고, 오직 본인만 알 수 있습니다.</li>
        <li>Check 하지 않은 참여 정보는 무효 처리됩니다. 꼭 Check 해주세요!</li>
      </ul>
    </div>
  );
}
