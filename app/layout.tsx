import type { Metadata, Viewport } from 'next';
import 'pretendard/dist/web/variable/pretendardvariable.css';
import './globals.css';

import { auth } from '@/auth';
import Footer from './_footer';
import Providers from './providers';
import UserProvider from './_user-provider';

export const viewport: Viewport = {
  themeColor: '#020824',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: '블록픽',
  description:
    '블록픽은 참가자가 블록을 선택하고, 마지막까지 단 1인이 선택한 블록이 우승하는 새로운 개념의 소수결 이벤트입니다.',
  openGraph: {
    title: '블록픽',
    description:
      '블록픽은 참가자가 블록을 선택하고, 마지막까지 단 1인이 선택한 블록이 우승하는 새로운 개념의 소수결 이벤트입니다.',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth();

  return (
    <html lang="ko">
      <body>
        <div className="h-full mx-auto container flex">
          <div className="grow hidden lg:block">
            <div className="mt-[500px]">
              <div className="fixed">
                <p className="text-[24px]">
                  단 1인만 <span className="text-white">선택한 블록이 우승</span>하는
                  <br />
                  행운의 주인공이 되어보세요!
                </p>

                <div className="mt-12 p-8 rounded-[27px] bg-[#32316B]/50">QR코드</div>
              </div>
            </div>
          </div>
          <div className="grow shrink hidden lg:block max-w-[176px]" />
          <main className="h-full mx-auto relative flex-1 flex flex-col max-w-[530px]">
            <div className="grow bg-[#020824]">
              <UserProvider user={user || null}>
                <Providers>{children}</Providers>
              </UserProvider>
            </div>
            <Footer currentTab="home" />
          </main>
        </div>
      </body>
    </html>
  );
}
