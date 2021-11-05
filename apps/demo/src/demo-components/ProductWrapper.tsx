import React, { ReactNode } from 'react';
import { darken } from '@material-ui/core';
import {
  DotButton,
  DotIcon,
  DotThemeProvider,
  DotTypography,
  lightColors,
} from '@digital-ai/dot-components';
import styled, { css } from 'styled-components';

const StyledAgilityButton = styled(DotButton)`
  ${({ theme }) => css`
    background-color: ${lightColors.agilityGreen};

    &:hover,
    &:focus {
      background-color: ${darken(lightColors.agilityGreen, 0.2)};
    }
  `}
`;

interface AgilityButtonProps {
  children: string | ReactNode;
}

export const AgilityButton = ({ children }: AgilityButtonProps) => {
  return (
    <StyledAgilityButton
      disableRipple={true}
      size="small"
      startIcon={<DotIcon iconId="add-outlined" />}
    >
      {children}
    </StyledAgilityButton>
  );
};

export const ProductButtons = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <DotTypography variant="h3">Dot Button</DotTypography>
        <DotButton>Hello World</DotButton>
      </div>
      <div style={{ padding: '20px' }}>
        <DotThemeProvider>
          <DotTypography variant="h3">Agility Button</DotTypography>
          <AgilityButton>Hello World</AgilityButton>
        </DotThemeProvider>
      </div>
    </>
  );
};
