import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { IconFontSize, sbFontSizeOptions } from '../icon/Icon';
import { DotIconButton, IconButtonColor, IconButtonSize } from './IconButton';

export default {
  component: DotIconButton,
  title: 'Atoms',
};

export const iconButton = () => {
  const sbIconButtonColors = {
    Default: 'default',
    Inherit: 'inherit',
    Primary: 'primary',
    Secondary: 'secondary',
  };

  const sbIconButtonSizes = {
    Small: 'small',
    Medium: 'medium',
  };

  const color = select(
    'Color',
    sbIconButtonColors,
    'primary'
  ) as IconButtonColor;

  const iconSize = select(
    'Icon Size',
    sbFontSizeOptions,
    'default'
  ) as IconFontSize;

  const buttonSize = select(
    'Button Size',
    sbIconButtonSizes,
    'small'
  ) as IconButtonSize;

  const disabled = boolean('Disabled', false);
  const iconValue = text('Icon', 'script');
  const tooltip = text('Tooltip', 'Hello World');

  return (
    <DotIconButton
      color={color}
      disabled={disabled}
      iconButtonSize={buttonSize}
      iconId={iconValue}
      iconSize={iconSize}
      onClick={action('click')}
      titleTooltip={tooltip}
    />
  );
};
