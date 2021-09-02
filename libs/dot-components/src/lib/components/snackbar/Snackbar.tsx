import React, { ReactNode } from 'react';
import { Alert } from '@material-ui/lab';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledSnackbar } from './Snackbar.styles';
import { addAutoHideDuration } from './SnackbarHelper';

export type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';

export interface SnackbarProps extends CommonProps {
  /** Property used for creating a custom action button. */
  action?: ReactNode;
  /** The message the user sees once the alert displays */
  children: ReactNode;
  /** A callback to handle closing the alert. */
  onClose?: () => void;
  /** Boolean value to switch between opening and closing the alert. */
  open: boolean;
  /** An alert level, indicating the importance of the message. */
  severity: SnackbarSeverity;
  width?: string;
}

function checkForConflictingEventHandlers({
  action,
  onClose,
}: Pick<SnackbarProps, 'onClose' | 'action'>): void {
  if (action && onClose) {
    console.error(
      'You have passed two event handlers for action buttons. Please pick one.'
    );
  }
}

export const DotSnackbar = ({
  action,
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  onClose,
  open,
  severity,
  width,
}: SnackbarProps) => {
  const autoHideDuration = addAutoHideDuration(severity);
  checkForConflictingEventHandlers({ onClose, action });
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      aria-label={ariaLabel}
      autoHideDuration={autoHideDuration}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      onClose={onClose}
      open={open}
      severity={severity}
    >
      <Alert
        action={action}
        onClose={onClose}
        severity={severity}
        style={{ width: width }}
      >
        <span aria-label={severity}>{children}</span>
      </Alert>
    </StyledSnackbar>
  );
};
