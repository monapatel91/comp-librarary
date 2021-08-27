import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotIcon, IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: DotIcon,
  argTypes: {
    iconId: { defaultValue: 'script' },
    fontSize: { defaultValue: 'medium' },
    title: { defaultValue: 'Hello World' },
  },
} as Meta;

export const Default: Story<IconProps> = (args) => <DotIcon {...args} />;
