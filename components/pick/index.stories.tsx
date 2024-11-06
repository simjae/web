import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Pick as _Component } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Pick',
  component: _Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    count: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, -1] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof _Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Pick: Story = {
  args: {
    count: 1,
  },
  render: (props) => (
    <div className="w-[50px]">
      <_Component {...props} />
    </div>
  ),
};
