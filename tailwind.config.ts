import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}', // 개발일때만 적용되도록
  ],
  theme: {
    fontFamily: {
      sans: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    },
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1080px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      accent: '#F19CAD',
      primary: '#ADA2E2',
      disabled: '#56568E',
    },
    extend: {
      fontSize: {
        h1: [
          '32px',
          {
            fontWeight: 700,
          },
        ],
        h2: [
          '28px',
          {
            fontWeight: 700,
          },
        ],
        h3: [
          '27px',
          {
            fontWeight: 700,
          },
        ],
        h4: [
          '24px',
          {
            fontWeight: 500,
          },
        ],
        h5: [
          '24px',
          {
            fontWeight: 400,
          },
        ],
        h6: [
          '21px',
          {
            fontWeight: 700,
          },
        ],
        base: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
        lg: '1.125rem',
      },
      backgroundImage: {
        'gradient-180': 'linear-gradient(180deg, var(--tw-gradient-stops))',
      },
      spacing: {
        4.5: '1.125rem',
      },
      keyframes: {
        pickClicked: {
          '0%': { bottom: '0' },
          '50%': { bottom: '-10px' },
          '100%': { bottom: '0' },
        },
        mainBounce: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        coinUpDown: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        blockPickFadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bpSlideUp: {
          '0%': { transform: 'translateY(0)' },
          '1%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
      maxWidth: {
        'dialog-max': 'calc(100% - 2rem)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
