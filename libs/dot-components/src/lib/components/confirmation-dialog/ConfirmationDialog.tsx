import React, { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DialogButtonProps, DotDialog } from '../dialog/Dialog';

export interface ConfirmationDialogProps extends CommonProps {
  /** Cancel button properties */
  cancelBtnProps?: DialogButtonProps;
  /** The dialog message */
  message?: ReactNode;
  /** The callback to be executed when the action is cancelled */
  onCancel?: () => void;
  /** The callback to be executed when the action is confirmed */
  onConfirm?: (event: MouseEvent | KeyboardEvent) => void;
  /** If true the dialog will be visible */
  showDialog: boolean;
  /** Submit button properties */
  submitBtnProps?: DialogButtonProps;
  /** The dialog title */
  title?: ReactNode;
}

/**
 * @experimental This component is still in development
 */
export const DotConfirmationDialog = ({
  cancelBtnProps,
  className,
  'data-testid': dataTestId,
  message = '',
  onCancel = undefined,
  onConfirm = undefined,
  submitBtnProps,
  showDialog,
  title = '',
}: ConfirmationDialogProps) => {
  const rootClasses = useStylesWithRootClass(
    'dot-confirmation-dialog',
    className
  );
  if (message === '' && title === '') {
    title = 'Please confirm';
  }

  return (
    <DotDialog
      cancelButtonProps={cancelBtnProps}
      className={rootClasses}
      data-testid={dataTestId}
      onCancel={() => onCancel && onCancel()}
      onSubmit={(event) => onConfirm && onConfirm(event)}
      open={showDialog}
      submitButtonProps={submitBtnProps}
      title={title}
    >
      {message}
    </DotDialog>
  );
};
