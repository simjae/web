import { createStore } from 'zustand';

interface BlockPickProps {
  activeStep: number;
  steps: {
    length: number;
    backgroundImageUrl: string;
  }[];
}

interface BlockPickState extends BlockPickProps {}

const createBlockPickStore = (initProps?: Partial<BlockPickProps>) => {
  const DEFAULT_PROPS: BlockPickProps = {
    activeStep: 1,
    steps: [],
  };

  return createStore<BlockPickState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
  }));
};

export { createBlockPickStore };
