import React, { ReactNode } from 'react';
import { DotButton } from '@digital-ai/dot-components';
import { Typography } from '@mui/material';
import { StyledMainHero, rootClassName } from './MainHero.styles';

export interface MainHeroProps {
  actionToolbarContent?: ReactNode;
  children?: ReactNode;
  className?: string;
  ctaAction?: () => void;
  ctaLabel?: string;
  height?: number;
  leftBackgroundImage?: string;
  marginBottom?: number;
  message?: string;
  rightBackgroundImage?: string;
  title?: string;
  useCta?: boolean;
}

export const DotMainHero = ({
  actionToolbarContent,
  children,
  height = 400,
  marginBottom = -320,
  leftBackgroundImage = '',
  rightBackgroundImage = '',
  title,
  message,
  ctaLabel,
  useCta = true,
  ctaAction,
}: MainHeroProps) => {
  return (
    <StyledMainHero
      actionToolbarContent={actionToolbarContent}
      marginBottom={marginBottom}
      leftBackgroundImage={leftBackgroundImage}
      rightBackgroundImage={rightBackgroundImage}
      height={height}
      className={rootClassName}
    >
      {useCta && (
        <div className="hero-message-container">
          <Typography
            component="h1"
            variant="h4"
            className="hero-message-title"
          >
            {title}
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            className="hero-message-message"
          >
            {message}
          </Typography>
          <DotButton onClick={ctaAction}>{ctaLabel}</DotButton>
        </div>
      )}
      {children}
    </StyledMainHero>
  );
};
