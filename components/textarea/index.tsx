import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={twMerge(
        'flex resize-none min-h-[80px] w-full rounded-[10px] border border-[#474777] bg-[#2E2E67] p-4 text-[13px] placeholder:text-[#4C4C8E] outline-none focus:border-[#C0C0FF] focus:bg-[#4E4E8F] disabled:cursor-not-allowed disabled:bg-[#34345A] disabled:border-[#34345A]',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
