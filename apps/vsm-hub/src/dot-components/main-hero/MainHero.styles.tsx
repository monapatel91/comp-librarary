import React from 'react';
import styled, { css } from 'styled-components';
import { MainHeroProps } from './MainHero';
import { DotActionToolbar, themeVariables } from '@digital-ai/dot-components';

export const rootClassName = 'dot-main-hero';
export const imageRootClassName = 'dot-hero-image';
export const actionToolbarRootClassName = 'dot-hero-action-toolbar';

export const DotHeroBackground = ({
  actionToolbarContent,
  children,
  className,
}: MainHeroProps) => {
  return (
    <div className={`${imageRootClassName} ${className}`}>
      {actionToolbarContent ? (
        <DotActionToolbar className={actionToolbarRootClassName}>
          {actionToolbarContent}
        </DotActionToolbar>
      ) : null}
      {children}
    </div>
  );
};

export const StyledMainHero = styled(DotHeroBackground)`
  ${({
    theme,
    height,
    marginBottom,
    leftBackgroundImage,
    rightBackgroundImage,
  }) => css`
    &.${rootClassName} {
      position: relative;
      margin-bottom: -200px;
      height: 200px;
      background-color: ${theme.palette.grey[50]};
      margin-bottom: ${marginBottom}px;
      background-size: 300px auto, 300px auto;
      .hero-message-container {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        z-index: ${themeVariables.levelSecond};
        transform: translate(-50%, -50%);
        .hero-message-title {
          color: ${theme.palette.success[500]};
        }
        .hero-message-message {
          margin: ${theme.spacing(0, 2, 2, 0)};
        }
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
      ${theme.breakpoints.up('md')} {
        height: ${height}px;
        background-repeat: no-repeat;
        background-position: left -172px bottom 0px, right 100px bottom 0px;
        background-image: url('${leftBackgroundImage}'),
          url('${rightBackgroundImage}');
        .hero-message-container {
          left: 25%;
          max-width: 300px;
        }
      }
    }
    .dot-action-toolbar {
      box-shadow: ${theme.shadows[1]};
      background-color: ${theme.palette.grey[50]};
      .MuiInputBase-root {
        margin-bottom: 0;
      }
    }
    .dot-breadcrumbs {
      margin: 0;
    }
  `}
`;
