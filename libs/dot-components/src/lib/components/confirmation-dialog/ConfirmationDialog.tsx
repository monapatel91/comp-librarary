import React, { KeyboardEvent, MouseEvent } from 'react';
import { DialogButtonProps, DotDialog } from '../dialog/Dialog';

import './ConfirmationDialog.scss';

export interface ConfirmationDialogProps {
  /** Cancel button properties */
  cancelBtnProps?: DialogButtonProps;
  /** data attribute passed through for testing purposes ONLY */
  'data-testid'?: string;
  /** The dialog message */
  message?: string | JSX.Element;
  /** The callback to be executed when the action is cancelled */
  onCancel?: () => void;
  /** The callback to be executed when the action is confirmed */
  onConfirm?: (event: MouseEvent | KeyboardEvent) => void;
  /** If true the dialog will be visible */
  showDialog: boolean;
  /** Submit button properties */
  submitBtnProps?: DialogButtonProps;
  /** The dialog title */
  title?: string | JSX.Element;
}

/**
 * @experimental This component is still in development
 */
export const DotConfirmationDialog = ({
  cancelBtnProps,
  'data-testid': dataTestId = '',
  message = '',
  onCancel = undefined,
  onConfirm = undefined,
  submitBtnProps,
  showDialog,
  title = '',
}: ConfirmationDialogProps) => {
  if (message === '' && title === '') {
    title = 'Please confirm';
  }

  return (
    <DotDialog
      cancelButtonProps={cancelBtnProps}
      classes="dot-confirmation-dialog"
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

export default DotConfirmationDialog;
