import React from 'react';
import { addDecorator } from '@storybook/react';

import { DotThemeProvider } from '../src/lib/theme-provider/ThemeProvider';

export const withTheme = (Story) => {
  return (
    <DotThemeProvider>
      <Story />
    </DotThemeProvider>
  );
};
addDecorator(withTheme);

export const parameters = {
  options: {
    storySort: {
      order: ['Introduction', 'Change Log', 'Components', 'Experimental'],
    },
  },
};
