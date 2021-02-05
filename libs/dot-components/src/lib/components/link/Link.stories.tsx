import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotLink, LinkProps } from './Link';

export default {
  title: 'Components/Link',
  component: DotLink,
  argTypes: {
    text: { defaultValue: 'Sample Link' },
  },
} as Meta;

export const Default: Story<LinkProps> = (args) => <DotLink {...args} />;
