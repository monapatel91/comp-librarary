import { FormHelperText, FormLabel } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import {
  endAdornmentClassName,
  groupLabelClassName,
  placementClassName,
  startAdornmentClassName,
  StyledFormControl,
  rootClassName,
} from '../form-controls/FormControl.stytles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  StyledCheckboxGroup,
  rootClassName as checkboxRootClassName,
  checkboxListClassName,
  checkboxListItemClassName,
} from './CheckboxGroup.styles';
import { RadioGroupBaseProps } from '../radio/RadioGroup';
import { RadioButtonProps } from '../radio/RadioButton';
import DotFormGroup from '../form-group/FromGroup';
import { DotCheckbox, CheckboxProps } from '../checkbox/Checkbox';

export interface CheckboxGroupProps extends RadioGroupBaseProps {
  /** if true use parent for selecting/deselecting all */
  selectAll?: boolean;
  /** A function that should be executed when the value of the radio buttom changes */
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    value: CheckboxProps[]
  ) => void;
}

export function DotCheckboxGroup({
  className,
  disableGroup,
  endIcon,
  error,
  groupLabel,
  helperText,
  labelPlacement,
  onChange,
  options,
  selectAll = false,
  required = false,
  row = false,
  startIcon,
  size = 'medium',
}: CheckboxGroupProps) {
  const placement = `${placementClassName}${labelPlacement}`;
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    checkboxRootClassName,
    className,
    placement
  );
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    data: RadioButtonProps
  ) => {
    const newOptions = event.target.checked
      ? [...selectedOptions, data]
      : selectedOptions.filter((option) => option.value !== event.target.value);
    setSelectedOptions(newOptions);

    setAllChecked(newOptions.length === options.length);
    onChange(event, newOptions);
  };

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOptions(event.target.checked ? options : []);
    setAllChecked(event.target.checked);
  };

  const renderOptions = options
    ? options.map(({ label, disabled, value }) => {
        return (
          <li className={checkboxListItemClassName}>
            <DotCheckbox
              checked={
                selectedOptions.find(
                  (option) => option && option.value === value
                ) || allChecked
              }
              disabled={disabled || disableGroup}
              label={label}
              labelPlacement={labelPlacement}
              onChange={(event) => handleChange(event, { label, value })}
              size={size}
              value={value}
            />
          </li>
        );
      })
    : null;

  return (
    <StyledCheckboxGroup>
      <StyledFormControl
        classes={{ root: rootClasses }}
        disabled={disableGroup}
        error={error}
        component="fieldset"
        required={required}
      >
        {groupLabel && (
          <FormLabel component="legend">
            {startIcon && (
              <span className={startAdornmentClassName}>{startIcon}</span>
            )}
            <span className={groupLabelClassName}>{groupLabel} </span>
            {endIcon && (
              <span className={endAdornmentClassName}>{endIcon}</span>
            )}
          </FormLabel>
        )}
        {selectAll && (
          <DotCheckbox
            checked={selectedOptions.length === 4}
            indeterminate={
              selectedOptions.length > 0 &&
              selectedOptions.length < options.length
            }
            label="Select all"
            onChange={handleSelectAll}
            value="all"
          />
        )}
        <ul className={checkboxListClassName}>
          <DotFormGroup row={row}>{renderOptions}</DotFormGroup>
        </ul>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </StyledFormControl>
    </StyledCheckboxGroup>
  );
}

export default DotCheckboxGroup;
