'use client';
import getBlockNo from '@/utils/get-block-no';
import idb from '@/utils/idb';
import cryptor from '@/utils/cryptor';

import { useState, useCallback, useContext, Suspense, Fragment } from 'react';
import dynamic from 'next/dynamic';
import { context } from './context';
import Board from './_board';
import { BadgeButton } from '@/components/badge-button';
import { PlayButton } from '@/components/play-button';

const ConfirmDialog = dynamic(() => import('./_confirm-dialog'));
const CheckInfoDialog = dynamic(() => import('./_check-info-dialog'));
export default function Main() {
  const { blockpick, currentStep, openedDialogType, setOpenedDialogType, currentSelectedBlock, steps } =
    useContext(context);

  const setRandomBlocks = useCallback(() => {
    const selectedBlocks = steps.map((step: any) => Math.floor(Math.random() * Math.pow(step.length, 2)));

    // const params = new URLSearchParams(searchParams.toString());
    // params.set('current-block', selectedBlocks.join(','));
    // router.push(`${pathname}?${params.toString()}`);
  }, [steps]);

  const isLastStep = currentStep >= steps.length;
  return (
    <div>
      {currentStep >= steps.length ? (
        <p className="text-[21px] text-white text-center font-bold">
          <span className="text-accent">블록</span>을 선택해주세요
        </p>
      ) : (
        <p className="text-[21px] text-white text-center font-bold">
          <span className="text-accent">{currentStep}차 구역</span>을 선택해주세요
        </p>
      )}

      <div className="mt-7 relative ">
        <div className="relative flex items-center justify-center">
          {steps.map((step: any, idx: number) => (
            <Fragment key={`shadow-${idx}`}>
              {idx < currentStep ? (
                <div className="w-[30px] h-[30px] rounded-full shadow-[0_0_6px_6px_rgba(148,147,255,0.4)]" />
              ) : (
                <div className="w-[30px] h-[30px]" />
              )}
              {idx < steps.length - 1 && (
                <hr
                  className={`border-none w-[45px] h-[1px] ${idx < currentStep - 1 && 'shadow-[0_0_6px_6px_rgba(148,147,255,0.4)]'}`}
                />
              )}
            </Fragment>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          {steps.map((step: any, idx: number) => (
            <Fragment key={`step-${idx}`}>
              {idx < currentStep ? (
                <button className="w-[30px] h-[30px] bg-[#3B3B7A] border-[0.7px] border-[#A09FF8] rounded-full flex items-center justify-center">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_962_47504"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="15"
                    >
                      <g clipPath="url(#clip0_962_47504)">
                        <path
                          d="M7 15L0 11.5959V3.40411L7 0L14 3.40411V11.5959L7 15ZM12.7278 4.78768L7.63344 7.26244V13.3084L12.7224 10.8336V4.78768H12.7278ZM1.27224 4.78768V10.8284L6.3612 13.3084V7.26244L1.27224 4.78768ZM7 1.38357L2.05598 3.78524L7 6.18691L11.944 3.78524L7 1.38357Z"
                          fill="#9A9ACC"
                        />
                      </g>
                    </mask>
                    <g mask="url(#mask0_962_47504)">
                      <rect x="-1" width="16" height="16" fill="#A09FF8" />
                    </g>
                    <defs>
                      <clipPath id="clip0_962_47504">
                        <rect width="14" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              ) : (
                <button className="w-[30px] h-[30px] bg-[#23234E] border border-[#31316D] rounded-full" />
              )}
              {idx < steps.length - 1 && (
                <hr
                  className={`border-none w-[45px] h-[1px] ${idx < currentStep - 1 ? 'bg-[#A09FF8]' : 'bg-[#31316D]'}`}
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mt-7 mx-5 relative pb-[100%]">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
          src={steps[currentStep - 1].backgroundImageUrl}
          alt=""
        />
        <Board />
      </div>

      {typeof currentSelectedBlock[steps.length - 1] === 'number' && (
        <div className="mt-6 flex justify-center">
          <div className="px-6 py-4.5 bg-[#121238] rounded-[8px] flex items-center">
            <p className="px-2 py-0.5 border border-[#2E2E67] rounded-[4px] text-sm text-white font-black">
              {Number(getBlockNo(currentSelectedBlock, steps)).toLocaleString()}
            </p>
            <p className="ml-1 text-[13px]">BLOCK</p>
            <BadgeButton className="ml-2" onClick={setRandomBlocks}>
              random
            </BadgeButton>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-center">
        {isLastStep ? (
          <PlayButton
            option="shadow"
            disabled={typeof currentSelectedBlock[steps.length - 1] !== 'number'}
            onClick={() => {
              setOpenedDialogType('confirm');
            }}
          >
            PICK!
          </PlayButton>
        ) : (
          <PlayButton option="shadow">PICK ZONE</PlayButton>
        )}
      </div>

      {openedDialogType === 'confirm' && <ConfirmDialog onClose={() => setOpenedDialogType('')} />}

      {openedDialogType === 'check-info' && <CheckInfoDialog onClose={() => setOpenedDialogType('')} />}
    </div>
  );
}
