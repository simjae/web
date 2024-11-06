import React from 'react';
import { Pick } from '@/components/pick';

interface Props {
  activeStep: number;
  backgroundImageUrl: string;
  length: number;
  isLastStep: boolean;
  selectedBlocks: number[];
  blocks: { pickCount: 1 | 2 | 3 | 4 | 5 | 6 | 7; selected?: boolean }[];
  exceedCount: number; // 탈락 기준
  onBlockSelect: (idx: number) => void;
}

const BlockGrid: React.FC<Props> = (props) => {
  return (
    <div className="relative pb-[100%]">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
        src={props.backgroundImageUrl}
        alt=""
      />
    </div>
  );
};

export { BlockGrid };
