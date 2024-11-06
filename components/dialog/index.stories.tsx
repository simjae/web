import type { Meta, StoryObj } from '@storybook/react';
import { Dialog as _Component, DialogHead, DialogContent } from './index';
import { useArgs } from '@storybook/preview-api';
import { Button } from '../button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Dialog',
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

export const Basic: Story = {
  render: (props) => {
    const [, updateArgs] = useArgs();

    return (
      <_Component
        open={props.open}
        onOpenChange={(open) => {
          updateArgs({ open });
        }}
      >
        <DialogContent>
          <h2 className="text-lg text-center">알림설정</h2>
          <p className="mt-3 text-sm font-bold text-white text-center">
            디바이스의 설정 기능에서
            <br />
            알림 상태를 변경할 수 있습니다.
            <br />
            설정으로 이동해 변경 하시겠습니까?
          </p>
          <Button className="mt-3">이동</Button>
          <Button className="mt-2" variant="tertiary">
            취소
          </Button>
        </DialogContent>
      </_Component>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Head: Story = {
  render: (props) => {
    const [, updateArgs] = useArgs();

    return (
      <_Component
        open={props.open}
        onOpenChange={(open) => {
          updateArgs({ open });
        }}
      >
        <DialogContent>
          <DialogHead className="bg-white rounded-[15px]">
            <div className="w-[84px] h-[84px]">그림</div>
          </DialogHead>
          <div className="mx-3">
            <h2 className="text-lg text-center">보너스 미션</h2>
            <p className="text-[20px] font-bold text-white text-center">행운블록 응모권 1장</p>
            <Button className="mt-3">확인</Button>
          </div>
        </DialogContent>
      </_Component>
    );
  },
};
