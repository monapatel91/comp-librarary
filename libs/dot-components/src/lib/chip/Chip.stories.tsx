import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import { ChipColor, ChipSize, ChipVariant, DotChip } from './Chip';

export default {
  component: DotChip,
  title: 'Chip',
};

export const chip = () => {
  const colorOptions = {
    Default: 'default',
    Primary: 'primary',
    Secondary: 'secondary',
  };
  const sizeOptions = {
    Medium: 'medium',
    Small: 'small',
  };
  const variantOptions = {
    Default: 'default',
    Outlined: 'outlined',
  };
  const groupId = 'Options';
  const clickable = boolean('Clickable', true, groupId);
  const color = select('Color', colorOptions, 'default', groupId) as ChipColor;
  const deletable = boolean('Deletable', true, groupId);
  const disabled = boolean('Disabled', false, groupId);
  const avatar = boolean('Display Avatar', true, groupId);
  const icon = text('Icon ID', 'home', groupId);
  const label = text('Label', 'Hello World', groupId);
  const size = select('Size', sizeOptions, 'medium', groupId) as ChipSize;
  const variant = select(
    'Variant',
    variantOptions,
    'outlined',
    groupId
  ) as ChipVariant;

  return (
    <DotChip
      avatar={avatar}
      clickable={clickable}
      color={color}
      deletable={deletable}
      disabled={disabled}
      iconId={icon}
      label={label}
      onClick={action('Click')}
      onDelete={action('Delete')}
      size={size}
      variant={variant}
    />
  );
};
