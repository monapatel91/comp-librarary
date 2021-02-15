import React, { ChangeEvent } from 'react';
import { CommonProps } from '../CommonProps';
import {
  StyledFormControlLabel,
  rootClassName as formRootClassName,
} from '../form-controls/FormControlLabel.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

import { StyledCheckbox, rootClassName } from './Checkbox.styles';
import { RadioButtonProps } from '../radio/RadioButton';
export type CheckboxSize = 'medium' | 'small';
export type CheckboxLabelPlacement = 'bottom' | 'end' | 'start';

/* eslint-disable-next-line */
export interface CheckboxProps extends RadioButtonProps {
  indeterminate?: boolean;
}

export function DotCheckbox({
  checked,
  className,
  'data-testid': dataTestId,
  disabled,
  id,
  indeterminate,
  label,
  labelPlacement,
  name,
  onChange,
  size = 'medium',
  value,
}: CheckboxProps) {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    formRootClassName,
    className
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event, event.target.value);
  };

  return (
    <StyledFormControlLabel
      className={rootClasses}
      labelPlacement={labelPlacement}
      control={
        <StyledCheckbox
          classes={{ root: rootClasses }}
          checked={checked}
          color="primary"
          data-testid={dataTestId}
          disabled={disabled}
          id={id}
          indeterminate={indeterminate}
          name={name}
          onChange={handleChange}
          size={size}
          value={value}
        />
      }
      label={label}
    />
  );
}

export default DotCheckbox;
