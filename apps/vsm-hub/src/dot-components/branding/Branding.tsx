import { Typography } from '@material-ui/core';
import React from 'react';
import { StyledBranding, rootClassName } from './Branding.styles';
import { ReactComponent as LogoD } from '../../assets/svg/logo_d.svg';
export interface BrandingProps {
  svg?: JSX.Element;
  title?: string;
}

export const DotBranding = ({ svg, title }: BrandingProps) => {
  return (
    <StyledBranding className={rootClassName}>
      <LogoD />
      {title && (
        <Typography component="h3" variant="h3">
          {title}
        </Typography>
      )}
    </StyledBranding>
  );
};
