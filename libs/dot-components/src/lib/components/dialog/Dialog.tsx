import React, { KeyboardEvent, MouseEvent } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { ButtonProps, ButtonType, DotButton } from '../button/Button';
import { DotIconButton } from '../button/IconButton';
import './Dialog.scss';

export interface DialogButtonProps {
  /** Space delimited CSS classes to be attributed to the button */
  classes?: string;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** The text displayed on the button */
  label?: string;
  /** The icon to display on the button */
  iconId?: string;
  /** The type of button to be used */
  type?: ButtonType;
}

export interface DialogProps {
  /** props passed down to the cancel button */
  cancelButtonProps?: DialogButtonProps;
  /** Space delimited CSS classes to be attributed to the button */
  classes?: string;
  /** components or string that is displayed in the dialog body */
  children?: string | JSX.Element[] | JSX.Element;
  /** if true, automatically focuses the submit button */
  focusSubmitButton?: boolean;
  /** The callback to be executed when the action is cancelled */
  onCancel: (event: unknown) => void;
  /** The callback to be executed when the action is submitted */
  onSubmit: (event: KeyboardEvent | MouseEvent) => void;
  /** if true, the dialog is visible to the user */
  open: boolean;
  /** props passed down to the submit button */
  submitButtonProps?: DialogButtonProps;
  /** dialog heading */
  title: string | JSX.Element;
}

/**
 * @experimental This component is still in development
 */
export const DotDialog = ({
  cancelButtonProps,
  classes,
  children,
  focusSubmitButton = false,
  onCancel,
  onSubmit,
  open,
  submitButtonProps,
  title,
}: DialogProps) => {
  const handleClose = (event: unknown) => {
    onCancel(event);
  };

  const cancelButtonPropsWithDefaults: ButtonProps = {
    label: 'Cancel',
    type: 'text',
    onClick: handleClose,
    ...cancelButtonProps,
  };

  const submitButtonPropsWithDefaults: ButtonProps = {
    label: 'OK',
    type: 'primary',
    onClick: onSubmit,
    ...submitButtonProps,
  };

  const onKeyPress = (event: KeyboardEvent): void => {
    const inputWrapper = event.target;

    if (event.key === 'Enter') {
      onSubmit(event);
      (inputWrapper as HTMLElement).blur();
    }
  };

  return (
    <div onKeyDown={(event) => onKeyPress(event)}>
      <Dialog
        classes={{ root: `dot-dialog with-close-button ${classes}` }}
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
      >
        <DialogTitle>
          <div className="dialog-title">{title}</div>
          <DotIconButton iconId="close" onClick={handleClose} />
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <DotButton
            className="cancel-button"
            {...cancelButtonPropsWithDefaults}
          />
          <DotButton {...submitButtonPropsWithDefaults} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DotDialog;
