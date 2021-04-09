import React, {
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { DotButton } from '../button/Button';
import { DotIconButton } from '../button/IconButton';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDialog } from './Dialog.styles';
import { DotTypography } from '../typography/Typography';

export interface DialogButtonProps extends CommonProps {
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** The text displayed on the button */
  label?: string;
  /** The icon to display on the button */
  startIcon?: string;
}

export interface SubmitButtonProps extends DialogButtonProps {
  /** The type of button to be used */
  type: 'primary' | 'destructive';
}

export interface DialogProps extends CommonProps {
  /** props passed down to the cancel button */
  cancelButtonProps?: DialogButtonProps;
  /** components or string that is displayed in the dialog body */
  children?: ReactNode;
  /** boolean that toggles visibility of close icon on top right of dialog header*/
  closeIconVisible?: boolean;
  /** The callback to be executed when the action is cancelled */
  onCancel?: (event: KeyboardEvent | MouseEvent) => void;
  /** The callback to be executed when the action is submitted */
  onSubmit?: (event: KeyboardEvent | MouseEvent) => void;
  /** if true, the dialog is visible to the user */
  open: boolean;
  /** boolean if true then the dialog will not close*/
  closeOnClickAway?: boolean;
  /** props passed down to the submit button */
  submitButtonProps?: SubmitButtonProps;
  /** dialog heading */
  title: ReactNode;
}

export const DotDialog = ({
  cancelButtonProps,
  className,
  'data-testid': dataTestId,
  children,
  closeIconVisible,
  closeOnClickAway = true,
  onCancel,
  onSubmit,
  open,
  submitButtonProps,
  title,
}: DialogProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const cancelDisabled = cancelButtonProps?.disabled || false,
    cancelLabel = cancelButtonProps?.label || 'Cancel',
    cancelStartIcon = cancelButtonProps?.startIcon || null;

  const submitDisabled = submitButtonProps?.disabled || false,
    submitLabel = submitButtonProps?.label || 'OK',
    submitStartIcon = submitButtonProps?.startIcon || null,
    submitType = submitButtonProps?.type || 'primary';

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleCancel = (event: KeyboardEvent | MouseEvent) => {
    if (onCancel) {
      onCancel(event);
    }

    handleClose();
  };

  const handleClickAway = (event: KeyboardEvent | MouseEvent) => {
    if (closeOnClickAway) {
      handleCancel(event);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event: KeyboardEvent | MouseEvent) => {
    if (onSubmit) {
      onSubmit(event);
    }

    handleClose();
  };

  const onKeyPress = (event: KeyboardEvent): void => {
    const inputWrapper = event.target;

    if (event.key === 'Enter') {
      handleSubmit(event);
      (inputWrapper as HTMLElement).blur();
    }
  };

  return (
    <div onKeyDown={(event) => onKeyPress(event)}>
      <StyledDialog
        classes={{ root: rootClasses }}
        data-testid={dataTestId}
        open={isOpen}
        onClose={handleClickAway}
        aria-labelledby="MuiDialogTitle-root"
      >
        <DialogTitle disableTypography={true}>
          <DotTypography variant="h2">{title}</DotTypography>
          {closeIconVisible && (
            <DotIconButton iconId="close" onClick={handleCancel} size="small" />
          )}
        </DialogTitle>
        <DialogContent classes={{ root: `dot-dialog-content` }}>
          {children}
        </DialogContent>
        <DialogActions classes={{ root: `dot-dialog-actions` }}>
          <DotButton
            className="cancel-button"
            disabled={cancelDisabled}
            startIcon={cancelStartIcon}
            onClick={handleCancel}
            type="text"
          >
            {cancelLabel}
          </DotButton>
          <DotButton
            disabled={submitDisabled}
            startIcon={submitStartIcon}
            onClick={handleSubmit}
            type={submitType}
          >
            {submitLabel}
          </DotButton>
        </DialogActions>
      </StyledDialog>
    </div>
  );
};
