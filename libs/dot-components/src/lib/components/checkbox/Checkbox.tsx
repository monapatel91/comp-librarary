import React, { ChangeEvent, useState } from 'react';
import { CommonProps } from '../CommonProps';
import {
  StyledFormControlLabel,
  rootClassName as formRootClassName,
} from '../form-controls/FormControlLabel.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

import { StyledCheckbox, rootClassName } from './Checkbox.styles';

export type CheckboxSize = 'medium' | 'small';
export type CheckboxLabelPlacement = 'bottom' | 'end' | 'start';

/* eslint-disable-next-line */
export interface CheckboxProps extends CommonProps {
  ariaLabel?: string;
  checked?: boolean;
  dataTestId?: string;
  disabled?: boolean;
  id?: string;
  indeterminate?: boolean;
  label?: string;
  labelPlacement?: CheckboxLabelPlacement;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  required?: boolean;
  size?: CheckboxSize;
}

export function DotCheckbox({
  ariaLabel,
  checked,
  className,
  dataTestId,
  disabled,
  id,
  indeterminate,
  label,
  labelPlacement,
  onChange,
  required,
  size = 'medium',
}: CheckboxProps) {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const [isChecked, setChecked] = useState(checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // if (!radioGroup) {
    setChecked(!isChecked);
    // }
    onChange && onChange(event, event.target.checked);
  };

  return (
    <StyledFormControlLabel
      className={formRootClassName}
      labelPlacement={labelPlacement}
      control={
        <StyledCheckbox
          classes={{ root: rootClasses }}
          checked={isChecked}
          color="primary"
          data-testid={dataTestId}
          disabled={disabled}
          id={id}
          indeterminate={indeterminate}
          inputProps={{ 'aria-label': ariaLabel ? ariaLabel : label }}
          onChange={handleChange}
          required={required}
          size={size}
        />
      }
      label={label}
    />
  );
}

export default DotCheckbox;
