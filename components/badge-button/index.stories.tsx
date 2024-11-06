import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BadgeButton as _Component } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/BadgeButton',
  component: _Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof _Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BadgeButton: Story = {
  args: {
    children: '텍스트',
  },
};
