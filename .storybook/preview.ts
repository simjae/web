import type { Preview } from '@storybook/react';

import '../app/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'basic',
      values: [
        {
          name: 'basic',
          value: '#020824',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
