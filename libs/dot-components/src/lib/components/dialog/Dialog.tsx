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
import { BaseButtonProps } from '../BaseButtonProps';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDialog } from './Dialog.styles';
import { DotTypography } from '../typography/Typography';

export interface DialogButtonProps extends BaseButtonProps {
  /** Icon placed after the children. */
  endIcon?: ReactNode;
  /** The text displayed on the button */
  label?: string;
  /** The icon to display on the button */
  startIcon?: ReactNode;
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
  /** boolean if true then the dialog will not close*/
  closeOnClickAway?: boolean;
  /** boolean that toggles existence of primary action button */
  hasPrimaryAction?: boolean;
  /** The callback to be executed when the action is cancelled */
  onCancel?: (event: KeyboardEvent | MouseEvent) => void;
  /** The callback to be executed when the action is submitted */
  onSubmit?: (event: KeyboardEvent | MouseEvent) => void;
  /** if true, the dialog is visible to the user */
  open: boolean;
  /** props passed down to the submit button */
  submitButtonProps?: SubmitButtonProps;
  /** dialog heading */
  title: ReactNode;
}

export const DotDialog = ({
  ariaLabel,
  cancelButtonProps,
  className,
  'data-testid': dataTestId,
  children,
  closeIconVisible,
  closeOnClickAway = true,
  hasPrimaryAction = true,
  onCancel,
  onSubmit,
  open,
  submitButtonProps,
  title,
}: DialogProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const cancelClasses = useStylesWithRootClass(
    cancelButtonProps?.className,
    'cancel-button'
  );
  const [isOpen, setIsOpen] = useState<boolean>(open);

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

  return (
    <StyledDialog
      aria-label={ariaLabel}
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
          autoFocus={cancelButtonProps?.autoFocus}
          className={cancelClasses}
          data-testid={cancelButtonProps?.['data-testid']}
          disabled={cancelButtonProps?.disabled}
          disableRipple={cancelButtonProps?.disableRipple}
          endIcon={cancelButtonProps?.endIcon}
          startIcon={cancelButtonProps?.startIcon}
          onClick={handleCancel}
          titleTooltip={cancelButtonProps?.titleTooltip}
          type="text"
        >
          {cancelButtonProps?.label || 'Cancel'}
        </DotButton>
        {hasPrimaryAction && (
          <DotButton
            autoFocus={submitButtonProps?.autoFocus}
            className={submitButtonProps?.className}
            data-testid={submitButtonProps?.['data-testid']}
            disabled={submitButtonProps?.disabled}
            disableRipple={submitButtonProps?.disableRipple}
            endIcon={submitButtonProps?.endIcon}
            startIcon={submitButtonProps?.startIcon}
            onClick={handleSubmit}
            titleTooltip={submitButtonProps?.titleTooltip}
            type={submitButtonProps?.type || 'primary'}
          >
            {submitButtonProps?.label || 'OK'}
          </DotButton>
        )}
      </DialogActions>
    </StyledDialog>
  );
};
