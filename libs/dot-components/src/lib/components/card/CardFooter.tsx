import React from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDiv } from './CardFooter.styles';

export interface CardFooterProps extends CommonProps {
  children: JSX.Element | string;
}

export const DotCardFooter = ({
  children,
  className,
  'data-testid': dataTestId,
}: CardFooterProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledDiv className={rootClasses} data-testid={dataTestId}>
      {children}
    </StyledDiv>
  );
};
