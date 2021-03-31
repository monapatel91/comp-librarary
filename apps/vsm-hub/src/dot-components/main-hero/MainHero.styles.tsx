import React from 'react';
import styled, { css } from 'styled-components';
import { MainHeroProps } from './MainHero';
import { DotActionToolbar } from '@digital-ai/dot-components';

export const rootClassName = 'dot-main-hero';
export const imageRootClassName = 'dot-hero-image';
export const actionToolbarRootClassName = 'dot-hero-action-toolbar';

export const StyledHeroImage = styled.div`
  ${({ theme }) => css`
    &.${imageRootClassName} {
    }
  `}
`;

export const DotHeroBackground = ({
  actionToolbarContent,
  children,
  className,
}: MainHeroProps) => {
  return (
    <>
      <StyledHeroImage className={`${imageRootClassName} ${className}`}>
        {actionToolbarContent ? (
          <DotActionToolbar className={actionToolbarRootClassName}>
            {actionToolbarContent}
          </DotActionToolbar>
        ) : null}
        {children}
      </StyledHeroImage>
    </>
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
      ${theme.breakpoints.up('md')} {
        height: ${height}px;
        margin-bottom: ${marginBottom}px;
        background-size: 500px auto, 425px auto;
        background-repeat: no-repeat;
        background-position: left -172px bottom 0px, right 172px bottom 0px;
        background-image: url('${leftBackgroundImage}'),
          url('${rightBackgroundImage}');
      }
      .hero-message-container {
        display: none;
        position: absolute;
        top: 50%;
        left: 25%;
        max-width: 300px;
        transform: translate(-50%, -50%);
        .hero-message-title {
          color: ${theme.palette.success[500]};
        }
        .hero-message-message {
          margin: ${theme.spacing(0, 2, 2, 0)};
        }
        ${theme.breakpoints.up('md')} {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
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
