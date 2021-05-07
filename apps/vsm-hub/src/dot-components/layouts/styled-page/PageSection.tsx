import React, { ReactNode, ReactNodeArray } from 'react';
import { StyledPageSection, rootClassName } from './StyledPage.styles';
export interface PageSectionProps {
  children: ReactNode | ReactNodeArray;
}
export const VsmHubPageSection = ({ children }) => {
  return (
    <StyledPageSection className={rootClassName}>{children}</StyledPageSection>
  );
};
