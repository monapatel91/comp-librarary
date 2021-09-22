import React, { ReactNode } from 'react';
import { DotButton } from '../button/Button';
import { ActionItem } from './Menu';

export const renderActionItemButton = (actionItem: ActionItem): ReactNode => {
  const { icon, text, onClick, disableRipple = false } = actionItem;
  return (
    <DotButton
      disableRipple={disableRipple}
      fullWidth={true}
      onClick={onClick}
      startIcon={icon}
      type="text"
    >
      {text}
    </DotButton>
  );
};
