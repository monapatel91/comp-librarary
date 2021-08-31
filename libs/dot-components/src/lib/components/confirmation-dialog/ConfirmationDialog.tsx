import React, { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  DialogButtonProps,
  DotDialog,
  SubmitButtonProps,
} from '../dialog/Dialog';

export interface ConfirmationDialogProps extends CommonProps {
  /** Cancel button properties */
  cancelButtonProps?: DialogButtonProps;
  /** The dialog message */
  message?: ReactNode;
  /** The callback to be executed when the action is cancelled */
  onCancel?: (event: KeyboardEvent | MouseEvent) => void;
  /** The callback to be executed when the action is confirmed */
  onSubmit?: (event: MouseEvent | KeyboardEvent) => void;
  /** If true the dialog will be visible */
  open: boolean;
  /** Submit button properties */
  submitButtonProps?: SubmitButtonProps;
  /** The dialog title */
  title?: ReactNode;
}

export const DotConfirmationDialog = ({
  ariaLabel,
  cancelButtonProps,
  className,
  'data-testid': dataTestId,
  message = '',
  onCancel,
  onSubmit,
  submitButtonProps,
  open,
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
      ariaLabel={ariaLabel}
      cancelButtonProps={cancelButtonProps}
      className={rootClasses}
      data-testid={dataTestId}
      onCancel={onCancel}
      onSubmit={onSubmit}
      open={open}
      submitButtonProps={submitButtonProps}
      title={title}
    >
      {message}
    </DotDialog>
  );
};
