import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import { DotDrawer, DrawerAnchor, DrawerVariant } from './Drawer';

export default {
  component: DotDrawer,
  title: 'Drawer',
};

export const drawer = () => {
  const anchorOptions = {
    Bottom: 'bottom',
    Left: 'left',
    Right: 'right',
    Top: 'top',
  };
  const variantOptions = {
    Permanent: 'permanent',
    Persistent: 'persistent',
    Temporary: 'temporary',
  };
  const groupId = 'Options';
  const anchor = select(
    'Postion',
    anchorOptions,
    'right',
    groupId
  ) as DrawerAnchor;
  const open = boolean('Is Open?', true, groupId);
  const variant = select(
    'Variant',
    variantOptions,
    'temporary',
    groupId
  ) as DrawerVariant;
  const children = text('Content', 'I am Batman', groupId);

  return (
    <DotDrawer
      anchor={anchor}
      children={children}
      onClose={action('onClose')}
      open={open}
      variant={variant}
    />
  );
};
