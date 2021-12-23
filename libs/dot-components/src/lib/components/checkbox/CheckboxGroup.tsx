import React, { ChangeEvent, useEffect, useState } from 'react';
import { FormHelperText, FormLabel } from '@mui/material';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  endAdornmentClassName,
  groupLabelClassName,
  rootClassName,
  startAdornmentClassName,
  StyledFormControl,
} from '../form-controls/FormControl.styles';
import { DotFormGroup } from '../form-group/FormGroup';
import { RadioGroupBaseProps } from '../radio/RadioGroup';
import { CheckboxProps, DotCheckbox } from './Checkbox';
import {
  checkboxListClassName,
  checkboxListItemClassName,
  rootClassName as checkboxRootClassName,
  StyledCheckboxGroup,
  wrapperClassName,
} from './CheckboxGroup.styles';

// TO-DO: make sure form control label is still good
// https://next.material-ui.com/guides/migration-v4/#formcontrollabel
export interface CheckboxGroupProps extends RadioGroupBaseProps {
  /** Array of CheckboxProps to set by default */
  defaultValue?: CheckboxProps[];
  /** A function that should be executed when the value of the checkbox changes */
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    value: CheckboxProps[]
  ) => void;
  /** Array of CheckboxProps used to create the checkboxes */
  options: CheckboxProps[];
  /** select all label */
  selectAllLabel?: string;
  /** if true use parent for selecting/deselecting all */
  showSelectAll?: boolean;
}

// Have this outside of component to avoid having different
// reference for the array and thus generate infinite loop
// in use effect hook
const DEFAULT_VALUES: CheckboxProps[] = [];

export function DotCheckboxGroup({
  ariaLabel,
  ariaLabelledby,
  className,
  'data-testid': dataTestId,
  defaultValue = DEFAULT_VALUES,
  disabled: groupDisabled,
  endIcon,
  error,
  helperText,
  id,
  inputRef,
  label: groupLabel,
  labelPlacement,
  name,
  onChange,
  options,
  required = false,
  row = false,
  selectAllLabel = 'Select All',
  showSelectAll = false,
  size = 'medium',
  startIcon,
}: CheckboxGroupProps) {
  const placement = `dot-${labelPlacement}`;
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    checkboxRootClassName,
    className,
    placement
  );
  const [selectedOptions, setSelectedOptions] = useState(defaultValue);
  const [allChecked, setAllChecked] = useState(false);

  /* This will ensure that state can be updated from the outside */
  useEffect(() => {
    // Change only if new value is passed in
    if (defaultValue !== DEFAULT_VALUES) {
      setSelectedOptions(defaultValue);
    }
  }, [defaultValue]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    const newOptions = event.target.checked
      ? [...selectedOptions, data]
      : selectedOptions.filter((option) => option.value !== event.target.value);
    setSelectedOptions(newOptions);

    setAllChecked(newOptions.length === options.length);
    onChange && onChange(event, newOptions);
  };

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    const _selectedOptions = event.target.checked ? options : [];
    setSelectedOptions(_selectedOptions);
    setAllChecked(event.target.checked);
    onChange && onChange(event, _selectedOptions);
  };

  const renderOptions = options
    ? options.map(({ value, label, disabled }) => {
        return (
          <DotCheckbox
            ariaLabelledby={ariaLabelledby}
            checked={
              selectedOptions.some(
                (option) => option && option.value === value
              ) || allChecked
            }
            className={checkboxListItemClassName}
            disabled={disabled || groupDisabled}
            id={id}
            inputRef={inputRef}
            key={value}
            label={label}
            labelPlacement={labelPlacement}
            name={name}
            onChange={(event) => handleChange(event, { label, value })}
            size={size}
            value={value}
          />
        );
      })
    : null;

  return (
    <StyledCheckboxGroup
      aria-label={ariaLabel}
      className={wrapperClassName}
      data-testid={dataTestId}
    >
      <StyledFormControl
        classes={{ root: rootClasses }}
        component="fieldset"
        disabled={groupDisabled}
        error={error}
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
        {showSelectAll && (
          <DotCheckbox
            checked={selectedOptions.length === options.length}
            disabled={groupDisabled}
            indeterminate={
              selectedOptions.length > 0 &&
              selectedOptions.length < options.length
            }
            label={selectAllLabel}
            name={name ? `${name}-select-all` : 'dot-select-all'}
            onChange={handleSelectAll}
            size={size}
            value="select-all"
          />
        )}
        <DotFormGroup className={checkboxListClassName} row={row}>
          {renderOptions}
        </DotFormGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </StyledFormControl>
    </StyledCheckboxGroup>
  );
}
