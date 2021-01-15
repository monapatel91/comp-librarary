import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotButton, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: DotButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    label: {
      name: 'Display Text',
      defaultValue: 'Button',
    },
    children: {
      defaultValue: 'Button',
    },
    iconId: {
      defaultValue: '',
    },
    type: {
      defaultValue: 'primary',
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <DotButton {...args} />;
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
