import React, { FormEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledForm } from './Form.styles';

export interface FormProps extends CommonProps {
  children: ReactNode;
  onSubmit: (event: FormEvent) => void;
}

export const DotForm = ({
  children,
  className,
  'data-testid': dataTestId,
  onSubmit,
}: FormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledForm
      className={rootClasses}
      data-testid={dataTestId}
      noValidate
      onSubmit={onSubmit}
    >
      {children}
    </StyledForm>
  );
};
