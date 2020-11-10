import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { DotSwitch, SwitchColor } from './Switch';

export default {
  component: DotSwitch,
  title: 'Switch',
};

export const Switch = () => {
  const colorOptions = {
    Default: 'default',
    Primary: 'primary',
    Secondary: 'secondary',
  };

  const groupId = 'Options';
  const ariaLabel = text('Aria Label', 'Accessibility for the win', groupId);
  const checked = boolean('Checked', false, groupId);
  const color = select(
    'Color',
    colorOptions,
    'primary',
    groupId
  ) as SwitchColor;
  const disabled = boolean('Disabled', false, groupId);
  const label = text('Label', 'Sample Label', groupId);

  return (
    <DotSwitch
      ariaLabel={ariaLabel}
      checked={checked}
      color={color}
      disabled={disabled}
      label={label}
    />
  );
};
