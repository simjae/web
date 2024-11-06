import React from 'react';
import BackgroundImgae from '../../background.png';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function layout({ children }: { children: React.ReactNode }) {
  const user = await auth();

  if (!user) {
    return redirect('/login');
  }

  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `url(${BackgroundImgae.src})`,
        backgroundSize: 'cover',
      }}
    >
      {children}
    </div>
  );
}
