import React from 'react';
import UserContext from '@/contexts/user-context';
import { context } from './context';
import { Pick } from '@/components/pick';

interface Props {
  blocks: { pickCount: 1 | 2 | 3 | 4 | 5 | 6 | 7; selected?: boolean }[];
}

export default function Grid(props: Props) {
  const user = React.use(UserContext);
  const { blockpick, isLastStep, currentStep, currentSelectedBlock, steps, onBlockSelect } = React.use(context);

  // const blocks = React.useMemo(() => {
  //
  //   return [];
  // }, [currentSelectedBlock]);

  return (
    <ul
      className="absolute inset-0 w-full h-full grid gap-[1px]"
      style={{
        gridTemplateColumns: `repeat(${steps[currentStep - 1].size}, 1fr)`,
      }}
    >
      {new Array(steps[currentStep - 1].size ** 2).fill(null).map((v, idx) => (
        <li key={`grid-${idx}`} className="relative bg-[#231844]/60 pb-[100%] rounded-[8px]">
          <button
            className="absolute inset-0 appearance-none w-full h-full flex items-center justify-center"
            disabled={props.blocks[idx]?.pickCount >= blockpick.exceedCount || props.blocks[idx]?.selected}
            onClick={onBlockSelect.bind(null, idx)}
          >
            {isLastStep ? (
              <>
                {currentSelectedBlock[currentStep - 1] === idx ? (
                  <Pick
                    className="animate-[pickClicked_100ms_ease-in-out]"
                    // @ts-ignore
                    count={(props.blocks[idx]?.pickCount || 0) + 1}
                    isCurrent
                    isSelected={props.blocks[idx].selected}
                  />
                ) : (
                  props.blocks[idx]?.pickCount > 0 && (
                    <Pick
                      count={props.blocks[idx].pickCount >= blockpick.exceedCount ? -1 : props.blocks[idx].pickCount}
                      profileImageUrl={user!.profileImageUrl}
                      isSelected={props.blocks[idx]?.selected}
                    />
                  )
                )}
              </>
            ) : (
              <>
                <div className="relative left-0 right-0 -bottom-[3px] w-[32px] h-[31px] bg-[#735EB0] rounded-full opacity-80" />
                <span
                  className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[32px] h-[31px] text-lg font-black text-[#533D8E] bg-[linear-gradient(180deg,#B5AAD6_0%,#F4F1FF_46%,#FFFFFF_100%)] rounded-full flex items-center justify-center  opacity-80"
                  style={{
                    WebkitTextStroke: '0.4px #D6CBF8',
                    textShadow: ' 0px 2px 3px #0F0A1D99',
                  }}
                >
                  {idx + 1}
                </span>
              </>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
