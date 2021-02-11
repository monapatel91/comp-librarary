import { FormHelperText, FormLabel } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { SwitchProps } from 'react-router-dom';
import DotCheckbox, { CheckboxSize, CheckboxProps } from '../checkbox/Checkbox';
import { CommonProps } from '../CommonProps';
import {
  endAdornmentClassName,
  groupLabelClassName,
  placementClassName,
  startAdornmentClassName,
  StyledFormControl,
  rootClassName,
} from '../form-controls/FormControl.stytles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { StyledFormGroup } from './FormGroup.styles';

export interface FormGroupProps extends CommonProps {
  children?: JSX.Element | JSX.Element[];
  /** The default input element value. Use when the component is not controlled or has a value. */
  defaultValue?: boolean;
  /** if true makes all radio buttons disabled */
  disableGroup?: boolean;
  /** Icon placed before the children. */
  endIcon?: JSX.Element;
  /** If true, the label should be displayed in an error state. */
  error?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** The label of the radio button group. */
  groupLabel?: string;
  /**
   * The name used to reference the value of the control. If you don't provide this
   * prop, it falls back to a randomly generated name.
   */
  labelPlacement?;
  name?: string;
  /** Array of RadioButtonProps used to create the radio buttons */
  useIntermediate?: boolean;
  checkboxes?: CheckboxProps[];
  switches?: SwitchProps;
  /** Icon placed before the children. */
  startIcon?: JSX.Element;
  size?: CheckboxSize;
}

export function DotFormGroup({
  className,
  checkboxes,
  children,
  disableGroup,
  endIcon,
  error,
  groupLabel,
  helperText,
  useIntermediate,
  labelPlacement,
  startIcon,
  size = 'medium',
}: FormGroupProps) {
  const placement = `${placementClassName}${labelPlacement}`;
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    placement
  );
  const renderChekboxes = checkboxes
    ? checkboxes.map(({ label, disabled }) => {
        return (
          <DotCheckbox
            disabled={disabled || disableGroup}
            label={label}
            labelPlacement={labelPlacement}
            size={size}
          />
        );
      })
    : null;

  // const renderSwitches = checkboxes
  //   ? checkboxes.map(({ label, disabled }) => {
  //       return (
  //         <DotCheckbox
  //           disabled={disabled || disableGroup}
  //           label={label}
  //           labelPlacement={labelPlacement}
  //           size={size}
  //         />
  //       );
  //     })
  //   : null;

  return (
    <StyledFormControl
      classes={{ root: rootClasses }}
      disabled={disableGroup}
      error={error}
      component="fieldset"
    >
      {groupLabel && (
        <FormLabel component="legend">
          {startIcon && (
            <span className={startAdornmentClassName}>{startIcon}</span>
          )}
          <span className={groupLabelClassName}>{groupLabel} </span>
          {endIcon && <span className={endAdornmentClassName}>{endIcon}</span>}
        </FormLabel>
      )}
      <StyledFormGroup>
        {useIntermediate && <DotCheckbox indeterminate label="test" />}
        {renderChekboxes}
        {children}
      </StyledFormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
}

export default DotFormGroup;
