import React from 'react';
import { CommonProps } from '../CommonProps';
import { rootClassName } from '../form-controls/FormControl.stytles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { StyledFormGroup } from './FormGroup.styles';

export interface FormGroupProps extends CommonProps {
  /** The text for the button. Button text should be in sentence case. */
  children: JSX.Element | JSX.Element[];
  /** changes layout to be horizontal if true */
  row?: boolean;
}

export function DotFormGroup({
  className,
  children,
  row = false,
}: FormGroupProps) {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledFormGroup classes={{ root: rootClasses }} row={row}>
      {children}
    </StyledFormGroup>
  );
}

export default DotFormGroup;
