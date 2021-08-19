import React, { ReactNode } from 'react';
import {
  StyledSnackbarContainer,
  rootClassName,
} from './SnackbarContainer.styles';
import { DotSnackbar, SnackbarSeverity } from './Snackbar';
import { useDotSnackbarContext } from './SnackbarProvider';

export const DotSnackbarContainer = (): ReactNode => {
  const { alerts, removeMessage } = useDotSnackbarContext();

  function handleClose(id: string): () => void {
    return () => {
      removeMessage(id);
    };
  }

  return (
    <StyledSnackbarContainer className={rootClassName}>
      <div data-testid={rootClassName} className={rootClassName}>
        {alerts
          .slice()
          .reverse()
          .map((alert) => {
            return (
              <DotSnackbar
                key={alert.id}
                severity={alert.severity as SnackbarSeverity}
                onClose={handleClose(alert.id)}
                open={alert.open}
              >
                {alert.message}
              </DotSnackbar>
            );
          })}
      </div>
    </StyledSnackbarContainer>
  );
};
