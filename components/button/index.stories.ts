import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button as _Button } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: _Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    disabled: { control: 'boolean' },
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof _Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Button: Story = {
  args: {
    variant: 'primary',
    children: '버튼',
  },
};
