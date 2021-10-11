import React from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDynamicForm } from './DynamicForm.styles';

export interface DynamicFormProps extends CommonProps {}

export const DynamicForm = ({
  className,
  'data-testid': dataTestId,
}: DynamicFormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledDynamicForm className={rootClasses} data-testid={dataTestId}>
      test
    </StyledDynamicForm>
  );
};
