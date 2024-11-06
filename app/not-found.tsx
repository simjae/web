import Image from 'next/image';
import BackgroundImage from './notfound-background.png';
import Logo from './notfound-logo.png';
import { Button } from '@/components/button';

export default function NotFound() {
  return (
    <div
      className="h-full flex flex-col justify-between"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="grow flex flex-col items-center justify-center">
        <Image width={98} height={93} className="mix-blend-luminosity" src={Logo} alt="" />
        <h2 className="mt-9 text-white text-[24px] font-bold">잠시 연결이 불안해요</h2>
        <p className="mt-5">잠시 후 다시 시도해 보세요.</p>
      </div>

      <div className="pb-5 flex justify-center">
        <Button size="large">다시시도</Button>
      </div>
    </div>
  );
}
