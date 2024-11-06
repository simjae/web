import type { Meta, StoryObj } from '@storybook/react';
import { Drawer as _Component, DrawerContent } from './index';
import { useArgs } from '@storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Drawer',
  // component: _Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    open: { control: 'boolean' },
  },
  args: {
    open: true,
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof _Component>;

export default meta;
type Story = StoryObj<{
  open: boolean;
}>;

export const Drawer: Story = {
  render: (props) => {
    const [, updateArgs] = useArgs();

    return (
      <_Component
        open={props.open}
        onOpenChange={(open) => {
          updateArgs({ open });
        }}
      >
        <DrawerContent>
          <h2 className="text-base text-center">문의유형</h2>
          <ul className="mt-2 px-3 divide-y divide-[#121238]/50">
            <li className="py-4 text-center text-white">계정 관련 문의</li>
            <li className="py-4 text-center text-white">블록픽 관련 문의</li>
            <li className="py-4 text-center text-white">서비스 이용 문의</li>
            <li className="py-4 text-center text-white">기타</li>
          </ul>
        </DrawerContent>
      </_Component>
    );
  },
};
