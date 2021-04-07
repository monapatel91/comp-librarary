import React, {
  Fragment,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useState,
} from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledRow } from './Row.styles';
import { DotButton } from '../button/Button';
import { DotConfirmationDialog } from '../confirmation-dialog/ConfirmationDialog';
import { DotIcon } from '../icon/Icon';

export interface RowProps extends CommonProps {
  /** If true, the delete button will be displayed. */
  canDelete?: boolean;
  /** If true, the edit button will be displayed. */
  canEdit?: boolean;
  /** The title of the delete confirmation dialog */
  deleteTitle?: string;
  /** The body for the delete confirmation dialog, accepts HTML */
  deleteBodyText?: ReactNode;
  /** The text of the delete confirmation dialog button  */
  deleteButtonText?: string;
  /** The text of the  */
  displayText: string;
  /** The icon to display on the button */
  iconId?: string;
  /** Callback event when delete confirmed */
  onDelete?: (event: unknown) => void;
  /** Callback event when editing */
  onEdit?: (event: unknown) => void;
  /** Space delimited CSS classes to be attributed to the row */
  rowClasses?: string;
  /** unique ID, usually matching what is used in the database */
  uid?: string;
}

/**
 * This component has the ability to display an icon, some text and a couple action buttons.
 *
 * @experimental This component is still in development
 */
export const DotRow = ({
  canDelete = false,
  canEdit = false,
  className,
  'data-testid': dataTestId,
  deleteTitle = 'Please confirm',
  deleteBodyText = '',
  deleteButtonText = 'Confirm',
  displayText,
  iconId = '',
  onDelete,
  onEdit,
  rowClasses,
  uid,
}: RowProps) => {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    rowClasses
  );
  const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);

  const handleConfirm = (event: MouseEvent | KeyboardEvent) => {
    if (onDelete) {
      onDelete(event);
    }
    setDeleteDialogIsOpen(false);
  };

  return (
    <StyledRow className={rootClasses} data-testid={dataTestId} data-uid={uid}>
      {iconId && <DotIcon data-testid="row-icon" iconId={iconId} />}
      <span className="text">{displayText}</span>
      <div className="row-actions">
        {canEdit && (
          <DotButton
            data-testid={uid}
            children="Edit"
            onClick={(event) => onEdit && onEdit(event)}
            startIcon={<DotIcon data-testid="icon" iconId="edit" />}
            type="text"
          />
        )}
        {canDelete && (
          <Fragment>
            <DotConfirmationDialog
              message={deleteBodyText}
              onCancel={() => setDeleteDialogIsOpen(false)}
              onConfirm={(event) => handleConfirm(event)}
              title={deleteTitle}
              showDialog={deleteDialogIsOpen}
              submitBtnProps={{
                children: deleteButtonText,
                type: 'destructive',
              }}
            />
            <DotButton
              data-testid={uid}
              children="Delete"
              onClick={() => setDeleteDialogIsOpen(true)}
              startIcon={<DotIcon data-testid="icon" iconId="delete" />}
              type="text"
            />
          </Fragment>
        )}
      </div>
    </StyledRow>
  );
};
