import React from 'react';
import { number, select, text } from '@storybook/addon-knobs';
import {
  progressColorOptions,
  DotProgress,
  progressVariantOptions,
} from './Progress';

export default {
  component: DotProgress,
  title: 'Atoms',
};

export const progress = () => {
  const sbColorOptions = {
    Inherit: 'inherit',
    Primary: 'primary',
    Secondary: 'secondary',
  };
  const sbVariantOptions = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
    Static: 'static',
  };

  let groupId = 'Options';
  const color = select(
    'Color',
    sbColorOptions,
    'primary',
    groupId
  ) as progressColorOptions;
  const size = number(
    'Size',
    40,
    { range: true, min: 15, max: 100, step: 1 },
    groupId
  );
  const thickness = number(
    'Size',
    3.6,
    { range: true, min: 1, max: 10, step: 0.5 },
    'Thickness'
  );
  const title = text('Tooltip', 'Loading Data...', groupId);
  const variant = select(
    'Variant',
    sbVariantOptions,
    'indeterminate',
    groupId
  ) as progressVariantOptions;

  groupId = 'Static Options';
  const value = number(
    'Value',
    20,
    { range: true, min: 0, max: 100, step: 1 },
    groupId
  );

  return (
    <DotProgress
      color={color}
      size={size}
      thickness={thickness}
      title={title}
      value={value}
      variant={variant}
    />
  );
};
