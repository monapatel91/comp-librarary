import React, { useState, ChangeEvent } from 'react';
import { FormHelperText, FormLabel, RadioGroup } from '@material-ui/core';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  endAdornmentClassName,
  groupLabelClassName,
  startAdornmentClassName,
  StyledFormControl,
  placementClassName,
  rootClassName,
} from './RadioGroup.styles';
import {
  RadioButtonBaseProps,
  DotRadioButton,
  RadioButtonProps,
} from './RadioButton';

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
  const [selectedValue, setSelectedValue] = useState(
    value ? value : defaultValue
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    onChange(event, event.target.value);
  };

  const renderRadioButtons = radioButtons
    ? radioButtons.map(({ label, value, disabled }) => {
        return (
          <DotRadioButton
            checked={selectedValue === value}
            disabled={disabled || disableGroup}
            label={label}
            labelPlacement={labelPlacement}
            onChange={handleChange}
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
          <span className={groupLabelClassName}>{groupLabel}</span>
          {endIcon && <span className={endAdornmentClassName}>{endIcon}</span>}
        </FormLabel>
      )}
      <RadioGroup
        aria-label={ariaLabel}
        data-testid={dataTestId}
        defaultValue={defaultValue}
        name={name}
        onChange={handleChange}
        value={selectedValue}
      >
        {renderRadioButtons}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
}

export default DotRadioGroup;
