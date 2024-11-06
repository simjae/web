'use client';
import { createContext, useEffect, useCallback, useMemo } from 'react';
import React, { useState } from 'react';
import idb from '@/utils/idb';
import cryptor from '@/utils/cryptor';

export const context = createContext<any>(null);
export const ContextProvider = (props: { blockpick: any; children: React.ReactNode }) => {
  // const store = useRef(createBlockPickStore({ activeStep: props.activeStep, steps: props.steps })).current;
  const blockpick = props.blockpick;

  const [currentStep, setCurrentStep] = useState(1);
  const [currentSelectedBlock, setCurrentSelectedBlock] = useState<number[]>([]);
  const [blocks, setBlocks] = useState([]);
  const [selectedBlocks, setSelectedBlocks] = useState<any[]>([]);
  const [openedDialogType, setOpenedDialogType] = useState<string>('');

  const steps = useMemo(() => {
    const arr = [];
    if (blockpick.depth1SideSize) {
      arr.push({
        size: blockpick.depth1SideSize,
        backgroundImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      });
    }

    if (blockpick.depth2SideSize) {
      arr.push({
        size: blockpick.depth2SideSize,
        backgroundImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      });
    }

    if (blockpick.depth3SideSize) {
      arr.push({
        size: blockpick.depth3SideSize,
        backgroundImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      });
    }

    if (blockpick.depth4SideSize) {
      arr.push({
        size: blockpick.depth4SideSize,
        backgroundImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      });
    }

    return arr;
  }, [blockpick]);

  useEffect(() => {
    setTimeout(async () => {
      const result = await idb.getPicks(props.blockpick.id);
      const arr = [];
      for (const pick of result) {
        const str = await cryptor.decode(pick.key, pick.iv, pick.encrypted);
        const block = JSON.parse(str);

        arr.push(block);
      }
      setSelectedBlocks(arr);
    }, 0);
  }, [blockpick]);

  const onBlockSelect = useCallback(
    (idx: number) => {
      setCurrentSelectedBlock((prev) => {
        prev[currentStep - 1] = idx;
        return [...prev];
      });

      if (steps.length > currentStep) {
        setCurrentStep((prev) => prev + 1);
      }
    },
    [currentStep, steps, setCurrentStep, setCurrentSelectedBlock],
  );

  const confirm = useCallback(async () => {
    return new Promise(async (resolve, reject) => {
      // TODO 서버에서 픽 요청이 완료된 이후 다음 로직이 실행되어야함
      const { key, iv, encrypted } = await cryptor.encode(JSON.stringify(currentSelectedBlock));

      await idb.addPick({
        key,
        iv,
        blockpickId: blockpick.id,
        encrypted,
        pickId: 112,
      });
      setSelectedBlocks((prev) => [...prev, [...currentSelectedBlock]]);
      setCurrentSelectedBlock((prev) => prev.slice(0, -1));
      setOpenedDialogType('check-info');
      resolve(1);
    });
  }, [currentSelectedBlock]);

  return (
    <context.Provider
      value={{
        blockpick,
        currentStep,
        currentSelectedBlock,
        setCurrentSelectedBlock,
        steps,
        blocks,
        setBlocks,
        selectedBlocks,
        openedDialogType,
        setOpenedDialogType,
        confirm,
        isLastStep: currentStep >= steps.length,
        onBlockSelect,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
