import React, { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDiv } from './CardFooter.styles';

export interface CardFooterProps extends CommonProps {
  /** The content for the CardFooter.*/
  children: ReactNode;
}

export const DotCardFooter = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
}: CardFooterProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledDiv
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
    >
      {children}
    </StyledDiv>
  );
};
