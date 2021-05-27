import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotTypography, TypographyProps } from './Typography';

export default {
  title: 'Components/Typography',
  component: DotTypography,
  argTypes: {
    'data-testid': { defaultValue: 'typography-test-id' },
    variant: { defaultValue: 'h1' },
    children: { defaultValue: 'No tpyos please!' },
  },
} as Meta;

export const Default: Story<TypographyProps> = (args) => (
  <DotTypography {...args} />
);
