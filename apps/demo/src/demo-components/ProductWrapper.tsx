import React, { ReactNode } from 'react';
import { DotButton, DotIcon, DotTypography } from '@digital-ai/dot-components';
import { AgilityThemeProvider } from './ProductThemeProvider';

interface AgilityButtonProps {
  children: string | ReactNode;
}

export const AgilityButton = ({ children }: AgilityButtonProps) => {
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
        <DotTypography variant="h3">Dot Button</DotTypography>
        <DotButton>Hello World</DotButton>
        <pre>
          <code>{`
          <>
            <DotTypography variant="h3">Dot Button</DotTypography>
            <DotButton>Hello World</DotButton>
          </>
          `}</code>
        </pre>
      </div>
      <div style={{ padding: '20px' }}>
        <AgilityThemeProvider>
          <DotTypography variant="h3">Agility Button</DotTypography>
          <AgilityButton>Hello World</AgilityButton>
        </AgilityThemeProvider>
        <pre>
          <code>{`
          interface AgilityButtonProps {
            children: string | ReactNode;
          }

          export const AgilityButton = ({ children }: AgilityButtonProps) => {
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

          <AgilityThemeProvider>
            <DotTypography variant="h3">Agility Button</DotTypography>
            <AgilityButton>Hello World</AgilityButton>
          </AgilityThemeProvider>
          `}</code>
        </pre>
      </div>
    </>
  );
};
