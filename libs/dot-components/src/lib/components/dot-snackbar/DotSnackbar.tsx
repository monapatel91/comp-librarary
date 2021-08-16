import React, { ReactNode } from 'react';
import { Alert } from '@material-ui/lab';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledSnackbar } from './DotSnackbar.styles';
import { addAutoHideDuration } from './dotSnackbarHelper';

type Severity = 'error' | 'warning' | 'info' | 'success';
type ActionButton = ReactNode;
export interface DotSnackbarProps extends CommonProps {
  /** An alert level, indicating the importance of the message. */
  severity: Severity;
  /** A callback to handle closing the alert. */
  onClose?: () => void;
  /** The message the user sees once the alert displays */
  children: ReactNode;
  /** Boolean value to switch between opening and closing the alert. */
  open: boolean;
  /** Property used for creating a custom action button. */
  action?: ActionButton;
  width?: string;
}

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
  className,
  width,
}: DotSnackbarProps) => {
  const autoHideDuration = addAutoHideDuration(severity);
  checkForConflictingEventHandlers({ onClose, action });
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={autoHideDuration}
      classes={{ root: rootClasses }}
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
