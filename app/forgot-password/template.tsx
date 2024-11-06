import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-7 px-5">
      <div className="px-6 pt-8 pb-10 bg-[#231D4C]/50 rounded-[12px]">{children}</div>
    </div>
  );
}
