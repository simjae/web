import type { Meta, StoryObj } from '@storybook/react';
import { BlockPickCategory as _BlockPickCategory } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/BlockPickCategory',
  component: _BlockPickCategory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: { control: { type: 'select', options: ['time-limit', 'free', 'prize', 'survival'] } },
    isActive: { control: 'boolean' },
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof _BlockPickCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BlockPickCategory: Story = {
  args: {
    type: 'time-limit',
    isActive: true,
  },
};
