import React from 'react';
import { Alert } from '@material-ui/lab';
import { CommonProps } from '../CommonProps';
import { rootClassName, StyledSnackbar } from './DotSnackbar.styles';
import { addAutoHideDuration } from './dotSnackbarHelper';

type Severity = 'error' | 'warning' | 'info' | 'success';
type ActionButton = React.ReactNode;
export interface DotSnackbarProps extends CommonProps {
  /** An alert level, indicating the importance of the message. */
  severity: Severity;
  /** A callback to handle closing the alert. */
  onClose?: () => void;
  /** The message the user sees once the alert displays */
  children: React.ReactNode;
  /** Boolean value to switch between opening and closing the alert. */
  open: boolean;
  /** Property used for creating a custom action button. */
  action?: ActionButton;
}

const ariaLabel = {
  success: 'success',
  info: 'info',
  error: 'error',
  warning: 'warning',
};

function checkForConflictingEventHandlers({
  action,
  onClose,
}: Pick<DotSnackbarProps, 'onClose' | 'action'>): void {
  if (action && onClose) {
    console.error(
      'You have passed two event handlers for action buttons. Please pick one.'
    );
  }
}

export const DotSnackbar = ({
  open,
  onClose,
  severity,
  children,
  action,
}: DotSnackbarProps) => {
  const autoHideDuration = addAutoHideDuration(severity);
  checkForConflictingEventHandlers({ onClose, action });

  return (
    <StyledSnackbar
      onClose={onClose}
      severity={severity}
      classes={{ root: rootClassName }}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={autoHideDuration}
    >
      <Alert severity={severity} onClose={onClose} action={action}>
        <span aria-label={ariaLabel[severity]}>{children}</span>
      </Alert>
    </StyledSnackbar>
  );
};
