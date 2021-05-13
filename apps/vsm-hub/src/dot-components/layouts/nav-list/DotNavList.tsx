import React, { ReactNode, ReactNodeArray } from 'react';
import { useMediaQuery, Theme } from '@material-ui/core';
import {
  DotAppToolbar,
  DotSidebar,
  SidebarProps,
  AppToolbarProps,
} from '@digital-ai/dot-components';
import {
  StyledDotNavList,
  rootClassName,
  mainContentClassName,
} from './DotNavList.styles';
import { useNavListContext } from 'apps/vsm-hub/src/context/NavigationContext';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export interface NavListProps {
  appToolbar?: AppToolbarProps;
  navbar?: SidebarProps;
  children?: ReactNode | ReactNodeArray;
  navBreakpoint?: Breakpoint;
}

export const DotNavList = ({
  navBreakpoint = 'md',
  children,
  appToolbar,
  navbar,
}: NavListProps) => {
  const targetBreakpoint = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up(navBreakpoint)
  );
  return (
    <>
      <DotAppToolbar
        borderColor="#649A3D"
        mainMenu={!targetBreakpoint ? <DotSidebar {...navbar} /> : undefined}
        {...appToolbar}
      />
      <StyledDotNavList className={rootClassName}>
        {targetBreakpoint && <DotSidebar {...navbar} />}
        <section className={mainContentClassName}>{children}</section>
      </StyledDotNavList>
    </>
  );
};
