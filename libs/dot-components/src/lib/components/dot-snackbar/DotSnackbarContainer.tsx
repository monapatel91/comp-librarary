import React from 'react';
import {
  StyledDotSnackbarContainer,
  rootClassName,
} from './DotSnackbarContainer.styles';
import { DotSnackbar } from './DotSnackbar';
import { useDotSnackbarContext } from './DotSnackbarProvider';

type Severity = 'error' | 'warning' | 'info' | 'success';

export const DotSnackbarContainer = React.memo(
  (): React.ReactElement => {
    const { alerts, removeMessage } = useDotSnackbarContext();

    function handleClose(id: string): () => void {
      return () => {
        removeMessage(id);
      };
    }

    return (
      <StyledDotSnackbarContainer className={rootClassName}>
        <div
          data-testid="dot-snackbar-container"
          className="dot-snackbar-container"
        >
          {alerts
            .slice()
            .reverse()
            .map((alert) => {
              return (
                <DotSnackbar
                  key={alert.id}
                  severity={alert.severity as Severity}
                  onClose={handleClose(alert.id)}
                  open={alert.open}
                >
                  {alert.message}
                </DotSnackbar>
              );
            })}
        </div>
      </StyledDotSnackbarContainer>
    );
  }
);
