import React, { useState, ChangeEvent } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledRadioGroup } from './RadioGroup.styles';
import { RadioButtonProps, DotRadioButton } from './RadioButton';
import { FormControl, FormHelperText, FormLabel } from '@material-ui/core';
import { SwitchProps } from '../switch/Switch';

export interface RadioGroupProps extends SwitchProps {
  /** The default input element value. Use when the component is not controlled or has a value. */
  defaultValue?: string;
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
  /** Value of the selected radio button.  */
  value?: string;
}

export function DotRadioGroup({
  ariaLabel,
  className,
  color = 'primary',
  'data-testid': dataTestId,
  defaultValue,
  disabled = false,
  error = false,
  helperText = null,
  groupLabel,
  name,
  labelPlacement,
  onChange,
  value,
  radioButtons,
  size,
}: RadioGroupProps) {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const [_value, setValue] = useState(value ? value : defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event, event.target.value);
  };

  const renderRadioButtons = radioButtons
    ? radioButtons.map(({ label, value }) => {
        return (
          <DotRadioButton
            color={color}
            disabled={disabled}
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
    <FormControl error={error} component="fieldset">
      {groupLabel && <FormLabel component="legend">{groupLabel}</FormLabel>}
      <StyledRadioGroup
        aria-label={ariaLabel}
        classes={{ root: rootClasses }}
        data-testid={dataTestId}
        defaultValue={defaultValue}
        name={name}
        onChange={handleChange}
        value={_value}
      >
        {renderRadioButtons}
      </StyledRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

export default DotRadioGroup;
