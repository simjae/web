import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PlayButton as _PlayButton } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/PlayButton',
  component: _PlayButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    option: { control: 'select', options: ['shadow', 'outline'] },
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof _PlayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PlayButton: Story = {
  args: {
    option: 'shadow',
    disabled: false,
    children: '버튼',
  },
};
