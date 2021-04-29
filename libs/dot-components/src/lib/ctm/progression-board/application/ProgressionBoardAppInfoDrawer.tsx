import React from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import {
  rootClassName,
  StyledProgressionBoardAppInfoDrawer,
} from './ProgressionBoardAppInfoDrawer.styles';
import { ApplicationDetails } from '../ProgressionBoardInterfaces';
import { DrawerPaperProps } from '../../../components';
import { ProgressionBoardDrawer } from '../ProgressionBoardDrawer';
import { ApplicationDrawerHeader } from './ApplicationDrawerHeader';
import { ApplicationEdit } from './ApplicationEdit';

export interface ProgressionBoardAppInfoDrawerProps extends CommonProps {
  /* Progression's application data coming from the API */
  appDetails: ApplicationDetails;
  /** Props applied to the drawer's Paper element. */
  drawerPaperProps?: DrawerPaperProps;
  /* Flag which indicates whether drawer is opened */
  isDrawerOpened: boolean;
  /* Callback function which executes upon drawer being closed */
  onDrawerClose: () => void;
}

const DRAWER_WIDTH = 300;

export const DotProgressionBoardAppInfoDrawer = ({
  appDetails,
  className,
  'data-testid': dataTestId,
  drawerPaperProps,
  isDrawerOpened,
  onDrawerClose,
}: ProgressionBoardAppInfoDrawerProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledProgressionBoardAppInfoDrawer
      className={rootClasses}
      data-testid={dataTestId}
    >
      <ProgressionBoardDrawer
        drawerPaperProps={drawerPaperProps}
        isDrawerOpened={isDrawerOpened}
        width={DRAWER_WIDTH}
      >
        <ApplicationDrawerHeader
          data-testid={dataTestId}
          headerTitle="Application Details"
          onDrawerClose={onDrawerClose}
        />
        <ApplicationEdit
          data-testid={`${dataTestId}-app-edit`}
          appDetails={appDetails}
        />
      </ProgressionBoardDrawer>
    </StyledProgressionBoardAppInfoDrawer>
  );
};
