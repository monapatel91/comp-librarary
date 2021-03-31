import React from 'react';
import { StyledPageSection, rootClassName } from './StyledPage.styles';
export interface PageSectionProps {
  children: React.ReactNode | React.ReactNodeArray;
}
export const VsmHubPageSection = ({ children }) => {
  return (
    <StyledPageSection className={rootClassName}>{children}</StyledPageSection>
  );
};
