import React from 'react';
import { CommonProps } from '../CommonProps';
import { rootClassName, <%=styledName%> } from './<%=normalizedName%>.styles'
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface <%=propsName%> extends CommonProps {
  // component props go here
}

export const <%=componentName%> = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
}: <%=propsName%>) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <<%=styledName%>
      aria-label={ariaLabel}
      className={rootClasses}
      // uncomment `classes` and remove `className` if using MUI Component
      // classes={{ root: rootClasses }}
      data-testid={dataTestId} />
  );
};
