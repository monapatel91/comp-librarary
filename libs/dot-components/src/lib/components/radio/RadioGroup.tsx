import React, { useState, ChangeEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledRadioGroup } from './RadioGroup.styles';
import { RadioButtonProps, DotRadioButton } from './RadioButton';
import { FormControl, FormHelperText, FormLabel } from '@material-ui/core';
import { SwitchProps } from '../switch/Switch';

export interface RadioGroupProps extends SwitchProps {
  error?: boolean;
  helperText?: string;
  groupLabel?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  name?: string;
  radioButtons?: RadioButtonProps[];
  value?: string;
}

export function DotRadioGroup({
  ariaLabel,
  className,
  color = 'primary',
  'data-testid': dataTestId,
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
  const [_value, setValue] = useState(value);

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
            value={value}
            selected={_value}
            size={size}
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
