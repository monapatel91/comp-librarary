import React, { useState, ChangeEvent, ReactNode } from 'react';
import { FormHelperText, FormLabel } from '@material-ui/core';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  endAdornmentClassName,
  groupLabelClassName,
  startAdornmentClassName,
  StyledFormControl,
  placementClassName,
  rootClassName,
} from '../form-controls/FormControl.styles';
import {
  RadioButtonBaseProps,
  DotRadioButton,
  RadioButtonProps,
} from './RadioButton';
import { groupClassName, StyledRadioGroup } from './RadioGroup.styles';

export interface RadioGroupBaseProps extends RadioButtonBaseProps {
  /** accessibility label */
  ariaLabel?: string;
  /** if true makes all radio buttons disabled */
  disableGroup?: boolean;
  /** Icon placed before the children. */
  endIcon?: ReactNode;
  /** If true, the label should be displayed in an error state. */
  error?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** The label of the radio button group. */
  groupLabel?: string;
  /** if true user is required to select an option */
  required?: boolean;
  /** changes layout to be horizontal if true */
  row?: boolean;
  /** Icon placed before the children. */
  startIcon?: ReactNode;
}

export interface RadioGroupProps extends RadioGroupBaseProps {
  /** The default input element value. Use when the component is not controlled or has a value. */
  defaultValue?: string;
  /** A function that should be executed when the value of the radio button changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Array of RadioButtonProps used to create the radio buttons */
  options: RadioButtonProps[];
}

export const DotRadioGroup = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  defaultValue,
  disableGroup,
  endIcon,
  error,
  helperText,
  groupLabel,
  name,
  labelPlacement = 'end',
  onChange,
  value,
  options,
  startIcon,
  required,
  row,
  size = 'medium',
}: RadioGroupProps) => {
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
    onChange && onChange(event, event.target.value);
  };

  const renderOptions = options
    ? options.map(({ label, value, disabled }) => {
        return (
          <DotRadioButton
            key={value}
            checked={selectedValue === value}
            disabled={disabled || disableGroup}
            label={label}
            labelPlacement={labelPlacement}
            size={size}
            value={value}
          />
        );
      })
    : null;

  return (
    <div>
      <StyledFormControl
        classes={{ root: rootClasses }}
        error={error}
        component="fieldset"
        required={required}
      >
        {groupLabel && (
          <FormLabel component="legend">
            {startIcon && (
              <span className={startAdornmentClassName}>{startIcon}</span>
            )}
            <span className={groupLabelClassName}>{groupLabel}</span>
            {endIcon && (
              <span className={endAdornmentClassName}>{endIcon}</span>
            )}
          </FormLabel>
        )}
        <StyledRadioGroup
          aria-label={ariaLabel}
          className={groupClassName}
          data-testid={dataTestId}
          defaultValue={defaultValue}
          name={name}
          onChange={handleChange}
          row={row}
          value={selectedValue}
        >
          {renderOptions}
        </StyledRadioGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </StyledFormControl>
    </div>
  );
};
