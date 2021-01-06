import React, { Fragment, KeyboardEvent, MouseEvent, useState } from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import { DotIconButton } from '../button/IconButton';
import { DotConfirmationDialog } from '../confirmation-dialog/ConfirmationDialog';
import { DotInlineEdit } from '../inline-edit/InlineEdit';

import './PhaseHeader.scss';

export enum CategoryType {
  plan = 'plan',
  code = 'code',
  build = 'build',
  test = 'test',
  deploy = 'deploy',
  monitor = 'monitor',
}

export interface PhaseHeaderProps {
  /** If true, the delete button will be displayed. */
  canDelete?: boolean;
  /** If true, the user will be able to edit the color and the label. */
  canEdit?: boolean;
  /** available category types to choose from */
  category?: CategoryType;
  /** Space delimited CSS classes to be attributed to the phase header */
  classes?: string;
  /** The index of the phase in phases array, needed to save updates to correct phase */
  'data-index'?: number;
  /** text displayed on the phase header */
  label: string;
  /** function that gets called when color category changes */
  onCategoryChange?: (category: CategoryType, index: number) => void;
  /** function that gets called when phase header is deleted */
  onDelete?: (event: MouseEvent | KeyboardEvent) => void;
  /** function that gets called when text label changes */
  onLabelChange?: (name: string, index: number) => Promise<string | null>;
}

/**
 * @experimental This component is still in development
 */
export const DotPhaseHeader = ({
  canEdit = false,
  canDelete = false,
  category = CategoryType.plan,
  classes = '',
  'data-index': dataIndex = 0,
  label,
  onCategoryChange = undefined,
  onDelete = undefined,
  onLabelChange = undefined,
}: PhaseHeaderProps) => {
  const [phaseColor, setPhaseColor] = useState(category);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [inlineEditing, updateInlineEditing] = useState(false);
  const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);

  const handleConfirm = (event: MouseEvent | KeyboardEvent) => {
    if (onDelete) {
      onDelete(event);
    }
    setDeleteDialogIsOpen(false);
  };

  const openColorPicker = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorSelect = (categoryColor: CategoryType) => {
    if (onCategoryChange) {
      onCategoryChange(categoryColor, dataIndex);
    }
    setPhaseColor(categoryColor);
    handleClose();
  };

  const handleLabelChange = async (name: string) => {
    if (onLabelChange) {
      return onLabelChange(name, dataIndex);
    }
    return null;
  };

  const handleEditStateChange = (editing: boolean) => {
    updateInlineEditing(editing);
  };

  return (
    <div
      className={`dot-phase-header ${
        inlineEditing ? 'editing' : ''
      } ${classes}`}
    >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        data-testid="phase-header-color-picker"
        className={`phase-color ${phaseColor} ${canEdit ? 'clickable' : ''}`}
        onClick={(event: MouseEvent<HTMLElement>) =>
          canEdit ? openColorPicker(event) : null
        }
      />
      <Menu
        anchorEl={anchorEl}
        classes={{ list: 'phase-color-picker' }}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        {Object.values(CategoryType).map((phase, index) => {
          return (
            <MenuItem
              classes={{ root: 'phase-color-option' }}
              key={index}
              onClick={() => (canEdit ? handleColorSelect(phase) : null)}
            >
              <i className={phase} />
              {phase}
            </MenuItem>
          );
        })}
      </Menu>
      <div className="phase-content">
        <div className="phase-label">
          <DotInlineEdit
            name="phase header"
            onEditStateChange={handleEditStateChange}
            onLabelChange={handleLabelChange}
            required
            data-testid={`phase-edit-${dataIndex}`}
            value={label}
          />
        </div>
      </div>
      {canDelete && (
        <Fragment>
          <DotConfirmationDialog
            data-testid={`phase-header-delete-dialog-${dataIndex}`}
            message={
              <div>
                <p>This will erase all content in this phase.</p>
                <p>This cannot be undone.</p>
              </div>
            }
            onCancel={() => setDeleteDialogIsOpen(false)}
            onConfirm={(event) => handleConfirm(event)}
            title={`Delete phase "${label}"?`}
            showDialog={deleteDialogIsOpen}
            submitBtnProps={{
              label: 'Delete phase',
              type: 'destructive',
            }}
          />
          <DotIconButton
            classes={canEdit ? 'clickable delete-btn' : 'delete-btn'}
            data-testid={`phase-icon-delete-${dataIndex}`}
            iconId="delete"
            iconSize="small"
            onClick={() => setDeleteDialogIsOpen(true)}
            titleTooltip="Delete phase"
          />
        </Fragment>
      )}
    </div>
  );
};

export default DotPhaseHeader;
