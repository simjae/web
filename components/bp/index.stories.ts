import type { Meta, StoryObj } from '@storybook/react';
import { BP as _BP } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/BP',
  component: _BP,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: { control: 'number' },
    size: { control: 'select', options: ['large', 'medium', 'small', 'list'] },
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof _BP>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BP: Story = {
  args: {
    value: 11233,
    size: 'large',
  },
};
