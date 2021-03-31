import React, { MouseEvent, ReactNode } from 'react';
import { Typography, Collapse } from '@material-ui/core';
import { DotIconButton } from '@digital-ai/dot-components';
import {
  StyledMessage,
  headerClassName,
  mainContentClassName,
  rootClassName,
} from './Message.styles';

export type MessageStatus = 'error' | 'info' | 'success';

export interface MessageProps {
  actions?: ReactNode;
  onClose?: (event: MouseEvent<HTMLButtonElement>, isOpen: boolean) => void;
  open?: boolean;
  status?: MessageStatus;
  statusCode?: number | string | null;
  startIcon?: ReactNode;
  subheader?: string | null;
  title: string;
}

export const DotMessage = ({
  actions,
  onClose,
  open,
  statusCode,
  status = 'info',
  startIcon,
  subheader,
  title,
}: MessageProps) => {
  const handleOnClose = (event: MouseEvent<HTMLButtonElement>) => {
    onClose && onClose(event, false);
  };

  return (
    <Collapse in={open}>
      <StyledMessage
        elevation={0}
        square
        classes={{
          root: `${rootClassName} ${status}`,
        }}
      >
        <div className={mainContentClassName}>
          {startIcon}
          <div className={headerClassName}>
            <Typography component="h3" variant="h3">
              {title} {statusCode && `: ${statusCode}`}
            </Typography>
            <Typography component="p" variant="body2">
              {subheader}
            </Typography>
          </div>
        </div>
        <div>
          {actions}
          {onClose && <DotIconButton onClick={handleOnClose} iconId="close" />}
        </div>
      </StyledMessage>
    </Collapse>
  );
};
