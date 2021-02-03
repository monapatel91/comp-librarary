import React, { KeyboardEvent, MouseEvent, useState } from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledInlineEdit } from './InlineEdit.styles';

import { DotIcon } from '../icon/Icon';
import { DotIconButton } from '../button/IconButton';
import { inputMarginOptions } from '../input-form-fields/InputFormFields.propTypes';

export interface InlineEditProps extends CommonProps {
  /** If true, the input will be focused automatically on load */
  autoFocus?: boolean;
  /** If true, the input will be disabled */
  disabled?: boolean;
  /** If true, the label will be displayed in an error state. */
  error?: boolean;
  /** If true, the input will take up the full width of its container */
  fullWidth?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** Adjusts vertical spacing of this and contained components. */
  margin?: inputMarginOptions;
  /** The name of input element */
  name: string;
  /** A function that should be executed when the value of the input changes */
  onChange?: (value: string) => void;
  /** A function that informs the parent of current editing state */
  onEditStateChange?: (editing: boolean) => void;
  /** A function that informs the parent when label is being updated */
  onLabelChange?: (name: string) => Promise<string | null>;
  /** If true, the input will be required and label will display accordingly */
  required: boolean;
  /** default value that is displayed on load */
  value?: string;
}

/**
 * @experimental This component is still in development
 */
export const DotInlineEdit = ({
  autoFocus,
  className,
  'data-testid': dataTestId,
  disabled = false,
  error = false,
  fullWidth = true,
  helperText,
  margin = 'dense',
  name,
  onEditStateChange = undefined,
  onLabelChange = undefined,
  required = false,
  value = '',
}: InlineEditProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const [editing, setEditing] = useState(false);
  const [originalValue, setOriginalValue] = useState('');
  const [inputValue, setInputValue] = useState(value);

  const handleClick = (event: MouseEvent<Element>) => {
    const inputElement = event.target as HTMLInputElement;

    // only fire if clicking on input element
    if (inputElement.type === 'text') {
      setOriginalValue(inputElement.value);
      setEditing(true);
      if (onEditStateChange) {
        onEditStateChange(true);
      }
    }
  };

  const onConfirm = async () => {
    if (onLabelChange) {
      const errorText = await onLabelChange(inputValue);
      if (errorText != null) {
        window.alert(errorText);
        return;
      }
    }
    setEditing(false);
    setInputValue(inputValue);
    if (onEditStateChange) {
      onEditStateChange(false);
    }
  };

  const onCancel = () => {
    setEditing(false);
    setInputValue(originalValue);
    if (onEditStateChange) {
      onEditStateChange(false);
    }
  };

  const onKeyPress = (event: KeyboardEvent): void => {
    const inputWrapper = event.target;

    switch (event.key) {
      case 'Enter':
        onConfirm();
        (inputWrapper as HTMLElement).blur();
        break;
      case 'Escape':
        onCancel();
        (inputWrapper as HTMLElement).blur();
        break;
    }
  };

  return (
    <StyledInlineEdit
      className={`${rootClasses} ${
        editing ? 'editing' : disabled ? 'disabled' : ''
      }`}
      data-testid={dataTestId}
      onClick={(event) => !disabled && handleClick(event)}
      onKeyDown={(event) => onKeyPress(event)}
    >
      <TextField
        aria-label={name}
        autoFocus={autoFocus}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        helperText={helperText}
        inputProps={{ 'data-testid': dataTestId }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <DotIcon iconId="edit" />
            </InputAdornment>
          ),
        }}
        margin={margin}
        multiline={false}
        name={name}
        onChange={(event) => setInputValue(event.target.value)}
        required={required}
        type="text"
        value={inputValue}
        variant="outlined"
      />
      {editing && (
        <div className="editing-actions">
          <DotIconButton
            data-testid="inline-edit-cancel"
            iconId="close"
            onClick={onCancel}
            size="small"
            titleTooltip="Cancel [esc]"
          />
          <DotIconButton
            data-testid="inline-edit-confirm"
            iconId="block"
            onClick={onConfirm}
            size="small"
            titleTooltip="Confirm [enter]"
          />
        </div>
      )}
    </StyledInlineEdit>
  );
};

export default DotInlineEdit;
