import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BlockGrid as _Component } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/BlockGrid',
  component: _Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundImageUrl: { control: 'text' },
    length: { control: 'number' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof _Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BlockGrid: Story = {
  args: {
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1713793812520-cc09fb00d44e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    length: 4,
    selectedBlocks: [],
    activeStep: 1,
    blocks: [],
    exceedCount: 3,
    onBlockSelect: () => [],
    isLastStep: true,
  },
  render: (props) => {
    const [selectedBlocks, setSelectedBlocks] = useState<number[]>([]);

    return (
      <div className="w-[350px]">
        <_Component
          {...props}
          selectedBlocks={selectedBlocks}
          activeStep={1}
          onBlockSelect={(idx) => setSelectedBlocks([idx])}
        />
      </div>
    );
  },
};
