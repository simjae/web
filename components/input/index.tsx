import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type, className, ...props }, ref) => {
  return (
    <input
      type={type}
      className={twMerge(
        'bg-[#2E2E67] px-4 py-2.5 text-[13px] leading-[18px] placeholder-[#4C4C8E] outline-none border border-[#474777] rounded-[10px] focus:bg-[#4E4E8F] focus:border-[#C0C0FF] invalid:border-[#E36A6A] invalid:text-[#E36A6A] disabled:text-[#56568E] disabled:bg-[#34345A] disabled:border-[#34345A]',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
