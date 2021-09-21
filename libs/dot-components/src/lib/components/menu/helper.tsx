import React, { ReactNode } from 'react';
import { DotButton } from '@digital-ai/dot-components';
import { ActionItem } from './Menu';

export const renderActionItemButton = (actionItem: ActionItem): ReactNode => {
  const { icon, text, onClick } = actionItem;
  return (
    <div className="action-item">
      <DotButton
        fullWidth={true}
        onClick={onClick}
        startIcon={icon}
        type="text"
      >
        {text}
      </DotButton>
    </div>
  );
};
