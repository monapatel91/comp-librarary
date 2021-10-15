import React, { FormEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledFormContainer } from './Form.styles';

export interface FormProps extends CommonProps {
  /** The content for the Form. **/
  children: ReactNode;
  /** Callback function when form is submitted **/
  onSubmit: (event: FormEvent) => void;
}

export const DotForm = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  onSubmit,
}: FormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <form
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      noValidate
      onSubmit={onSubmit}
    >
      <StyledFormContainer>{children}</StyledFormContainer>
    </form>
  );
};
