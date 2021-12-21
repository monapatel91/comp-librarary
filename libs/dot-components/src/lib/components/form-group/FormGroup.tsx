import React, { ReactNode, Ref } from 'react';
import { CommonProps } from '../CommonProps';
import { rootClassName } from '../form-controls/FormControl.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { StyledFormGroup } from './FormGroup.styles';

export interface FormGroupProps extends CommonProps {
  /** The text for the button. Button text should be in sentence case. */
  children: ReactNode;
  /**
   * id to identify the element, also used to create label "for" and helper text id attribute
   * values while it's optional, it is considered required for accessiblity best practice.
   */
  id?: string;
  /** pass a ref to the input element */
  inputRef?: Ref<HTMLInputElement>;
  /** changes layout to be horizontal if true */
  row?: boolean;
}

export function DotFormGroup({
  ariaLabel,
  className,
  children,
  'data-testid': dataTestId,
  id,
  inputRef,
  row,
}: FormGroupProps) {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledFormGroup
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      role="group"
      row={row}
    >
      {children}
    </StyledFormGroup>
  );
}
