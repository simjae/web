import React from 'react';
import { twMerge } from 'tailwind-merge';

const LinkButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...rest }, ref) => {
    return <button ref={ref} className={twMerge('text-[12px] text-[#CCC5F1] underline', className)} {...rest} />;
  },
);

LinkButton.displayName = 'LinkButton';

export { LinkButton };
