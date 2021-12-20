import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { StyledBranding, rootClassName } from './Branding.styles';
import { ReactComponent as LogoD } from '../../assets/svg/logo_d.svg';
export interface BrandingProps {
  svg?: ReactNode;
  title?: string;
}

// TO-DO: svg isn't being used
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
