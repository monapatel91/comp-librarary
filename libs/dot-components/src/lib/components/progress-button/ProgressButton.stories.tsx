import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DotProgressButton, ProgressButtonProps } from './ProgressButton';

export default {
  title: 'Experimental/ProgressButton',
  component: DotProgressButton,
  argTypes: {
    dataTestId: {
      defaultValue: 'progress-button-test-id',
    },
    disabled: { defaultValue: false },
    disableRipple: { defaultValue: false },
    fullWidth: { defaultValue: false },
    isSubmit: { defaultValue: false },
    size: { defaultValue: 'medium' },
    title: { defaultValue: 'Progress Button' },
    type: { defaultValue: 'primary' },
  },
} as Meta;

export const Default: Story<ProgressButtonProps> = (args) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (): void => {
    setIsLoading(true);
    // Simulate async action
    setTimeout(() => {
      setIsLoading(false);
    }, 111500);
  };

  return (
    <DotProgressButton {...args} isLoading={isLoading} onClick={handleClick} />
  );
};
