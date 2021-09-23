import React, { ReactNode } from 'react';
import { DotButton } from '../button/Button';

export interface ActionItem {
  disableRipple?: boolean;
  icon: ReactNode;
  onClick: () => void;
  text: string;
}

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
