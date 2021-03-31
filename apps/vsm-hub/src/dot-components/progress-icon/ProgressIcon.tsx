import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { DotAvatar } from '@digital-ai/dot-components';
import {
  StyledProgressIcon,
  progressClassName,
  rootClassName,
} from './ProgressIcon.styles';
import { MessageStatus } from '../message/Message';

export interface ProgressIconProps {
  iconId?: string;
  processing?: boolean;
  status?: MessageStatus;
}

export const DotProgressIcon = ({
  iconId = 'info-solid',
  processing = true,
  status = 'info',
}: ProgressIconProps) => {
  return (
    <StyledProgressIcon className={`${rootClassName}  ${status}`}>
      <DotAvatar alt="progress" iconId={iconId} />
      {processing && (
        <CircularProgress classes={{ root: `${progressClassName}` }} />
      )}
    </StyledProgressIcon>
  );
};
