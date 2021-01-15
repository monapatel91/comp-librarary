import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotButton, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: DotButton,
  argTypes: {
    children: {
      defaultValue: 'Button',
    },
    onClick: {
      action: 'clicked',
    },
    iconId: {
      defaultValue: '',
    },
    type: {
      defaultValue: 'primary',
    },
  },
} as Meta;

export const Verbose: Story<ButtonProps> = ({
  children,
  onClick,
  iconId,
  type,
}) => (
  <DotButton iconId={iconId} onClick={onClick} type={type}>
    {children}
  </DotButton>
);
