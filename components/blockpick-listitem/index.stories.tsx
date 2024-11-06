import type { Meta, StoryObj } from '@storybook/react';
import { BlockPickListItem as _BlockPickListItem } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/BlockPickListItem',
  component: _BlockPickListItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout

    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    category: { control: 'select', options: ['time-limit', 'free', 'prize', 'survival'] },
    thumbnailImageUrl: { control: 'text' },
    bp: { control: 'number' },
  },
} satisfies Meta<typeof _BlockPickListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BlockPickListItem: Story = {
  args: {
    id: 1,
    thumbnailImageUrl:
      'https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bp: 1000,
    additional: '',
    category: 'time-limit',
    isEnded: false,
  },
  render: (props) => {
    return (
      <div className="w-full max-w-[335px]">
        <_BlockPickListItem {...props} />
      </div>
    );
  },
};
