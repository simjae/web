import { useState, useEffect, use, useRef } from 'react';
import { context } from './context';
import { LoaderCircle as LoaderCircleIcon } from 'lucide-react';
import Grid from './_grid';

export default function Board() {
  const [isLoading, setIsLoading] = useState(true);
  const { isLastStep, steps, blocks, setBlocks, selectedBlocks, currentSelectedBlock } = use(context);
  const [data, setData] = useState<any[]>([]);
  const [latestSelectedBlock, setLatestSelectedBlock] = useState<any[]>([]);

  useEffect(() => {
    if (!isLastStep) return setIsLoading(false);
    let diff = false;
    for (let i = 0; i < steps.length - 1; i++) {
      if (currentSelectedBlock[i] !== latestSelectedBlock[i]) {
        diff = true;
        break;
      }
    }
    if (!diff) return;

    setIsLoading(true);
    // 여기에 서버에서 선택된 블록 가져오기
    new Promise((resolve) => {
      if (currentSelectedBlock[0] === 1) {
        resolve([{}, {}, {}, { pickCount: 3 }, {}, {}, {}, {}, {}, {}, {}, { pickCount: 1 }, {}, {}, {}, {}]);
      } else {
        resolve([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
      }
    }).then((data: any) => {
      setData(data);
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [latestSelectedBlock, isLastStep, selectedBlocks, currentSelectedBlock, steps]);

  useEffect(() => {
    if (!isLastStep) return setIsLoading(false);

    block: for (const selectedBlock of selectedBlocks) {
      const d = data[selectedBlock[selectedBlock.length - 1]];
      if (d.selected) {
        continue;
      }

      for (let i = 0; i < currentSelectedBlock.length; i++) {
        if (selectedBlock[i] !== currentSelectedBlock[i]) {
          continue block;
        }
      }

      d.selected = true;
      d.pickCount = d.pickCount ? d.pickCount + 1 : 1;
    }
    setBlocks(data);
  }, [data, selectedBlocks]);

  useEffect(() => {
    setLatestSelectedBlock([...currentSelectedBlock]);
  }, [currentSelectedBlock]);

  if (isLoading) {
    return (
      <div className="absolute bg-[#000000]/40 inset-0 flex items-center justify-center rounded-[8px]">
        <LoaderCircleIcon width={68} height={68} className="animate-spin ease-out text-primary" strokeWidth={2.5} />
      </div>
    );
  }

  return <Grid blocks={blocks} />;
}
