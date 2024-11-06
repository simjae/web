import { Suspense, useMemo } from 'react';
import { ContextProvider } from './context';
import Main from './main';

export default async function Page() {
  const blockpick = {
    id: 1,
    title: 'normal 타이틀',
    content: 'normal 내용',
    exceedCount: 3, // 탈락 기준
    depth1SideSize: 4,
    depth2SideSize: 4,
    depth3SideSize: null,
    depth4SideSize: null,
    totalBlockCount: 256,
    openAt: '2024-06-12T14:49:57.000Z',
    startAt: '2024-06-12T15:00:00.000Z',
    endAt: '2024-12-12T14:50:18.000Z',
    status: 'START',
    createdAt: '2024-06-12T05:50:39.987Z',
  };

  return (
    <ContextProvider blockpick={blockpick}>
      <Main />
    </ContextProvider>
  );
}
