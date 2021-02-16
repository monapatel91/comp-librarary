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
import DotFormGroup from '../form-group/FromGroup';
import { DotCheckbox, CheckboxProps } from '../checkbox/Checkbox';

export interface CheckboxGroupProps extends RadioGroupBaseProps {
  /** Array of CheckboxProps to set by default */
  defaultValues?: CheckboxProps[];
  /** A function that should be executed when the value of the radio buttom changes */
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    value: CheckboxProps[]
  ) => void;
  /** Array of CheckboxProps used to create the checkboxes */
  options: CheckboxProps[];
  /** if true use parent for selecting/deselecting all */
  selectAllLabel?: string;
  showSelectAll?: boolean;
}

export function DotCheckboxGroup({
  ariaLabel,
  className,
  defaultValues = [],
  disableGroup,
  endIcon,
  error,
  groupLabel,
  helperText,
  name,
  labelPlacement,
  onChange,
  options,
  showSelectAll = false,
  required = false,
  row = false,
  selectAllLabel = 'Select All',
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
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);
  const [allChecked, setAllChecked] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    data: CheckboxProps
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
          <DotCheckbox
            className={checkboxListItemClassName}
            checked={
              selectedOptions.some(
                (option) => option && option.value === value
              ) || allChecked
            }
            disabled={disabled || disableGroup}
            name={name}
            label={label}
            labelPlacement={labelPlacement}
            onChange={(event) => handleChange(event, { label, value })}
            size={size}
            value={value}
          />
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
        {showSelectAll && (
          <DotCheckbox
            checked={selectedOptions.length === 4}
            indeterminate={
              selectedOptions.length > 0 &&
              selectedOptions.length < options.length
            }
            name={`${name}-select-all`}
            label={selectAllLabel}
            onChange={handleSelectAll}
            size={size}
            value="select-all"
          />
        )}
        <DotFormGroup
          aria-label={ariaLabel}
          className={checkboxListClassName}
          row={row}
        >
          {renderOptions}
        </DotFormGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </StyledFormControl>
    </StyledCheckboxGroup>
  );
}

export default DotCheckboxGroup;
