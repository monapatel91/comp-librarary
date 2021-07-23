import React, { ChangeEvent, ReactNode, useState } from 'react';
import { FormHelperText, FormLabel } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  endAdornmentClassName,
  groupLabelClassName,
  placementClassName,
  rootClassName,
  startAdornmentClassName,
  StyledFormControl,
} from '../form-controls/FormControl.styles';
import {
  checkboxListClassName,
  checkboxListItemClassName,
  rootClassName as checkboxRootClassName,
  StyledCheckboxGroup,
  wrapperClassName,
} from './CheckboxGroup.styles';
import { DotFormGroup } from '../form-group/FormGroup';
import { CheckboxProps, DotCheckbox } from '../checkbox/Checkbox';

export interface CheckboxGroupProps extends CommonFormFieldProps {
  /** Array of CheckboxProps to set by default */
  defaultValue?: CheckboxProps[];
  /** Icon placed before the children. */
  endIcon?: ReactNode;
  /** If true, the label should be displayed in an error state. */
  error?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** A function that should be executed when the value of the checkbox changes */
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    value: CheckboxProps[]
  ) => void;
  /** Array of CheckboxProps used to create the checkboxes */
  options: CheckboxProps[];
  /** changes layout to be horizontal if true */
  row?: boolean;
  /** select all label */
  selectAllLabel?: string;
  /** if true use parent for selecting/deselecting all */
  showSelectAll?: boolean;
  /** Icon placed before the children. */
  startIcon?: ReactNode;
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
  defaultValues = DEFAULT_VALUES,
  disableGroup,
  endIcon,
  error,
  helperText,
  id,
  inputRef,
  label,
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
  const groupDisabled = disabled;
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
    if (defaultValues !== DEFAULT_VALUES) {
      setSelectedOptions(defaultValues);
    }
  }, [defaultValues]);

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
    ? options.map(({ label, disabled, value }) => {
        return (
          <DotCheckbox
            checked={
              selectedOptions.some(
                (option) => option && option.value === value
              ) || allChecked
            }
            className={checkboxListItemClassName}
            disabled={disabled || disableGroup}
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
        disabled={disableGroup}
        error={error}
        required={required}
      >
        {label && (
          <FormLabel component="legend">
            {startIcon && (
              <span className={startAdornmentClassName}>{startIcon}</span>
            )}
            <span className={groupLabelClassName}>{label}</span>
            {endIcon && (
              <span className={endAdornmentClassName}>{endIcon}</span>
            )}
          </FormLabel>
        )}
        {showSelectAll && (
          <DotCheckbox
            checked={selectedOptions.length === options.length}
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
