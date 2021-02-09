import React, { useState, ChangeEvent } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  rootClassName,
  groupLabelClassName,
  StyledRadioGroup,
  StyledFormControl,
  endAdornmentClassName,
  startAdornmentClassName,
  placementClassName,
} from './RadioGroup.styles';
import {
  RadioButtonBaseProps,
  DotRadioButton,
  RadioButtonProps,
} from './RadioButton';
import { FormHelperText, FormLabel } from '@material-ui/core';

export interface RadioGroupProps extends RadioButtonBaseProps {
  /** The default input element value. Use when the component is not controlled or has a value. */
  defaultValue?: string;
  /** if true makes all radio buttons disabled */
  disableGroup?: boolean;
  /** Icon placed before the children. */
  endIcon?: JSX.Element;
  /** If true, the label should be displayed in an error state. */
  error?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** The label of the radio button group. */
  groupLabel?: string;
  /** A function that should be executed when the value of the radio buttom changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  /**
   * The name used to reference the value of the control. If you don't provide this
   * prop, it falls back to a randomly generated name.
   */
  name?: string;
  /** Array of RadioButtonProps used to create the radio buttons */
  radioButtons?: RadioButtonProps[];
  /** Icon placed before the children. */
  startIcon?: JSX.Element;
}

export function DotRadioGroup({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  defaultValue,
  disableGroup = false,
  endIcon,
  error = false,
  helperText,
  groupLabel,
  name,
  labelPlacement = 'end',
  onChange,
  value,
  radioButtons,
  startIcon,
  size = 'medium',
}: RadioGroupProps) {
  const placement = `${placementClassName}${labelPlacement}`;
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    placement
  );
  const [_value, setValue] = useState(value ? value : defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event, event.target.value);
  };

  const renderRadioButtons = radioButtons
    ? radioButtons.map(({ label, value, disabled }) => {
        return (
          <DotRadioButton
            disabled={disabled || disableGroup}
            label={label}
            labelPlacement={labelPlacement}
            selectedValue={_value}
            size={size}
            value={value}
          />
        );
      })
    : null;

  return (
    <StyledFormControl
      classes={{ root: rootClasses }}
      error={error}
      component="fieldset"
    >
      {groupLabel && (
        <FormLabel component="legend">
          {startIcon && (
            <span className={startAdornmentClassName}>{startIcon}</span>
          )}
          <span className={groupLabelClassName}>{groupLabel} </span>
          {endIcon && <span className={endAdornmentClassName}>{endIcon}</span>}
        </FormLabel>
      )}
      <StyledRadioGroup
        aria-label={ariaLabel}
        data-testid={dataTestId}
        defaultValue={defaultValue}
        name={name}
        onChange={handleChange}
        value={_value}
      >
        {renderRadioButtons}
      </StyledRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
}

export default DotRadioGroup;
