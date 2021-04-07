import React, { ReactNode } from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import {
  StyledProgressionBoardDrawer,
  StyledDotDrawer,
  rootClassName,
} from './ProgressionBoardDrawer.styles';
import { DrawerPaperProps } from '../../components';

const DRAWER_MIN_WIDTH = 320;

export interface ProgressionBoardDrawerProps extends CommonProps {
  /* Component's children */
  children: ReactNode;
  /** Props applied to the drawer's Paper element. */
  drawerPaperProps?: DrawerPaperProps;
  /* Flag which indicates whether drawer is opened */
  isDrawerOpened: boolean;
  /* Width of the drawer in pixels. If not set, default value is assumed. */
  width?: number;
}

export const ProgressionBoardDrawer = ({
  className,
  'data-testid': dataTestId,
  drawerPaperProps,
  isDrawerOpened,
  width = DRAWER_MIN_WIDTH,
  children,
}: ProgressionBoardDrawerProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const getDrawerWidth = (isOpened: boolean): string =>
    isOpened
      ? `${width > DRAWER_MIN_WIDTH ? width : DRAWER_MIN_WIDTH}px`
      : '0px';

  return (
    <StyledProgressionBoardDrawer
      className={rootClasses}
      data-testid={dataTestId}
    >
      <StyledDotDrawer
        open={isDrawerOpened}
        width={getDrawerWidth(isDrawerOpened)}
        PaperProps={drawerPaperProps}
        variant="permanent"
      >
        {children}
      </StyledDotDrawer>
    </StyledProgressionBoardDrawer>
  );
};
