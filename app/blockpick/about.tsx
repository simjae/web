'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Dialog } from '@/components/dialog';
import AlertConfirmDialog from './_alert-confirm-dialog';
import { Layers3 as Layers3Icon } from 'lucide-react';

const AboutDialog = dynamic(() => import('./_about-dialog'));
export default function About() {
  const [showAbout, setShowAbout] = useState<boolean>(false);

  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  return (
    <div className="mt-3 flex justify-center">
      <button onClick={() => setShowConfirm(true)}>알림설정보기</button>
      <button
        className="px-2 py-1 flex items-center gap-1 text-[11px] bg-[#391762]/80 border border-[#4A296A] rounded-[3px]"
        disabled={showAbout}
        onClick={() => setShowAbout(true)}
      >
        <Layers3Icon className="text-white" width={14} height={14} />
        블록픽?
      </button>
      <Dialog open={showAbout} onOpenChange={setShowAbout}>
        <AboutDialog />
      </Dialog>
      <AlertConfirmDialog open={showConfirm} onOpenChange={setShowConfirm} />
    </div>
  );
}
