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
  children: string;
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
    children: 'Cancel',
    type: 'text',
    onClick: handleClose,
    ...cancelButtonProps,
  };

  const submitButtonPropsWithDefaults: ButtonProps = {
    children: 'OK',
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
        classes={{ root: `dot-dialog ${classes}` }}
        open={open}
        onClose={handleClose}
        aria-labelledby="MuiDialogTitle-root"
      >
        <DialogTitle disableTypography={true}>
          <h2>{title}</h2>
          <DotIconButton iconId="close" onClick={handleClose} size="small" />
        </DialogTitle>
        <DialogContent classes={{ root: `dot-dialog-content` }}>
          {children}
        </DialogContent>
        <DialogActions classes={{ root: `dot-dialog-actions` }}>
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
