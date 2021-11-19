import React, { ReactNode } from 'react';
import { Button } from '@material-ui/core';
import {
  DotButton,
  DotIcon,
  DotLink,
  DotTypography,
} from '@digital-ai/dot-components';
import { CustomThemeProvider } from './ProductThemeProvider';

interface CustomButtonProps {
  children: string | ReactNode;
}

export const CustomButton = ({ children }: CustomButtonProps) => {
  return (
    <DotButton
      disableRipple={true}
      size="small"
      startIcon={<DotIcon iconId="add-outlined" />}
    >
      {children}
    </DotButton>
  );
};

export const ProductButtons = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <DotTypography variant="h1">Default Button(s)</DotTypography>
        <div style={{ padding: '10px 20px' }}>
          <DotTypography variant="h3">Material UI Button</DotTypography>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <pre>
            <code>{`
            <Button>Hello World</Button>
          `}</code>
          </pre>

          <DotTypography variant="h3">Dot Component Button</DotTypography>
          <DotButton>Hello World</DotButton>
          <pre>
            <code>{`
            <DotButton>Hello World</DotButton>
          `}</code>
          </pre>
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <DotTypography variant="h1">Product Specific Wrapper</DotTypography>
        <DotTypography variant="body1">
          This is an example of how a product specific wrapper component can be
          created with its own set of props and defaults. When used with a
          product specific ThemeProvider the standard dot-component styles can
          be overridden. For more details on how to create a custom
          ThemeProvider please see the{' '}
          <DotLink
            href="https://github.com/digital-ai/dot-components/wiki/Product-Specific-Component-&-ThemeProvider"
            target="_blank"
          >
            documentation
          </DotLink>
          .
        </DotTypography>

        <div style={{ padding: '10px 20px' }}>
          <pre>
            <code>{`
          export const CustomButton = ({ children }) => {
            return (
              <DotButton
                disableRipple={true}
                size="small"
                startIcon={<DotIcon iconId="add-outlined" />}
              >
                {children}
              </DotButton>
            );
          };
          `}</code>
          </pre>
        </div>

        <div style={{ padding: '10px 20px' }}>
          <CustomThemeProvider theme="light">
            <DotTypography variant="h3">Custom Button - Light</DotTypography>
            <CustomButton>Hello World</CustomButton>
          </CustomThemeProvider>
          <pre>
            <code>{`
          <CustomThemeProvider theme="light">
            <DotTypography variant="h3">Custom Button - Light</DotTypography>
            <CustomButton>Hello World</CustomButton>
          </CustomThemeProvider>
          `}</code>
          </pre>
        </div>
        <div style={{ padding: '10px 20px' }}>
          <CustomThemeProvider theme="dark">
            <DotTypography variant="h3">Custom Button - Dark</DotTypography>
            <CustomButton>Hello World</CustomButton>
          </CustomThemeProvider>
          <pre>
            <code>{`
          <CustomThemeProvider theme="dark">
            <DotTypography variant="h3">Custom Button - Dark</DotTypography>
            <CustomButton>Hello World</CustomButton>
          </CustomThemeProvider>
          `}</code>
          </pre>
        </div>
      </div>
    </>
  );
};
