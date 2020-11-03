import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import { ButtonType, DotButton, sbButtonTypeOptions } from './Button';

export default {
  component: DotButton,
  title: 'Atoms',
};

export const button = () => {
  const iconOptions = {
    None: '',
    Add: 'add_circle_outline',
    Save: 'save',
    Delete: 'delete',
  };

  const groupId = 'Options';
  const typeValue = select(
    'Type',
    sbButtonTypeOptions,
    'primary',
    groupId
  ) as ButtonType;
  const disabled = boolean('Disabled', false, groupId);
  const displayText = text('Text', 'Button', groupId);
  const iconValue = select('Icon', iconOptions, undefined, groupId);
  const tooltip = text('Tooltip (title)', '', groupId);

  return (
    <DotButton
      disabled={disabled}
      displayText={displayText}
      iconId={iconValue}
      onClick={action('click')}
      titleTooltip={tooltip}
      type={typeValue}
    />
  );
};
