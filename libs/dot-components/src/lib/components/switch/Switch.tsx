import React, { ChangeEvent, Ref } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  rootClassName as formRootClassName,
  StyledFormControlLabel,
} from '../form-controls/FormControlLabel.styles';
import { rootClassName, StyledSwitch } from './Switch.styles';

export type SwitchColor = 'default' | 'primary' | 'secondary';
export type SwitchSize = 'medium' | 'small';
export type SwitchLabelPlacement = 'bottom' | 'end' | 'start' | 'top';

export interface SwitchProps extends CommonProps {
  /** accessibility label */
  ariaLabel?: string;
  /** determines the default state of the switch */
  checked?: boolean;
  /** color options available 'default', 'primary', 'secondary' */
  color?: SwitchColor;
  /** if true makes the switch disabled */
  disabled?: boolean;
  /** id to identify the element */
  id?: string;
  /** pass a ref to the input element */
  inputRef?: Ref<HTMLInputElement>;
  /** text displayed next to the switch */
  label?: string;
  /** label placement options available 'bottom', 'end', 'start', 'top' */
  labelPlacement?: SwitchLabelPlacement;
  /** A function that should be executed when the value of the switch changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** controls the size of the switch 'medium', 'small' */
  size?: SwitchSize;
}

export const DotSwitch = ({
  ariaLabel,
  checked,
  className,
  color = 'primary',
  'data-testid': dataTestId,
  disabled = false,
  id,
  inputRef,
  label,
  labelPlacement = 'end',
  onChange,
  size = 'medium',
}: SwitchProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <StyledFormControlLabel
      className={formRootClassName}
      labelPlacement={labelPlacement}
      control={
        <StyledSwitch
          classes={{ root: rootClasses }}
          checked={checked}
          color={color}
          data-testid={dataTestId}
          disabled={disabled}
          id={id}
          inputRef={inputRef}
          inputProps={{ 'aria-label': ariaLabel ? ariaLabel : label }}
          onChange={handleChange}
          size={size}
        />
      }
      label={label}
    />
  );
};
