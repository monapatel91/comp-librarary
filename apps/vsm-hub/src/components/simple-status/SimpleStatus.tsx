import { DotIcon } from '@digital-ai/dot-components';
import { Typography } from '@mui/material';
import React from 'react';
import { StyledSimpleStatus, rootClassName } from './SimpleStatus.styles';

export type SimpleStatus = 'ready' | 'pending' | 'error' | null;

export interface SimpleStatusProps {
  label?: string;
  status?: SimpleStatus;
}

export const VsmHubSimpleStatus = ({
  status = null,
  label,
}: SimpleStatusProps) => {
  function getStatusIcon() {
    switch (status) {
      case 'ready':
        return 'check-solid';
      case 'pending':
        return 'pending-clock';
      case 'error':
        return 'error-solid';
      default:
        return null;
    }
  }

  return (
    <StyledSimpleStatus className={`${rootClassName} ${status ? status : ''}`}>
      {status && <DotIcon iconId={getStatusIcon()} />}
      {label && <Typography component="label">{label}</Typography>}
    </StyledSimpleStatus>
  );
};
