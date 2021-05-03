import React, { ReactNode } from 'react';
import { DrawerPaperProps } from '../../../components';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import {
  rootClassName,
  StyledProgressionBoardAppFormDrawer,
} from './ProgressionBoardAppFormDrawer.styles';
import { ProgressionBoardDrawer } from '../ProgressionBoardDrawer';
import {
  ApplicationAPI,
  ApplicationFormOutput,
} from '../ProgressionBoardInterfaces';
import { ApplicationDrawerHeader } from './ApplicationDrawerHeader';
import { ApplicationForm } from './ApplicationForm';

export interface PBAppDrawerProps extends CommonProps {
  /* Progression's application data coming from the API */
  apiData: ApplicationAPI;
  /** Props applied to the drawer's Paper element. */
  drawerPaperProps?: DrawerPaperProps;
  /* Flag which indicates whether drawer is opened */
  isDrawerOpened: boolean;
  /* Callback function which executes upon drawer being closed */
  onDrawerClose: () => void;
  /* Callback function which will be called when form's 'Cancel' button is clicked */
  onFormCancel: () => void;
  /* Callback function which executes upon new application form submission */
  onFormSubmit: (applicationFormData: ApplicationFormOutput) => void;
  /* Width of the drawer in pixels. If not set, default value is assumed. */
  width?: number;
}

export const DotProgressionBoardAppFormDrawer = ({
  apiData,
  className,
  'data-testid': dataTestId,
  drawerPaperProps,
  isDrawerOpened,
  onDrawerClose,
  onFormCancel,
  onFormSubmit,
  width,
}: PBAppDrawerProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const renderDrawerContent = (): ReactNode => {
    return (
      <>
        <ApplicationDrawerHeader
          data-testid={dataTestId}
          headerTitle="Add application"
          onDrawerClose={onDrawerClose}
        />
        <div className="drawer-content">
          <ApplicationForm
            basePayloadUrl={apiData?.basePayloadUrl}
            sourceControls={apiData?.sourceControls}
            ticketSystems={apiData?.ticketSystems}
            onFormCancel={onFormCancel}
            onFormSubmit={onFormSubmit}
          />
        </div>
      </>
    );
  };

  return (
    <StyledProgressionBoardAppFormDrawer
      className={rootClasses}
      data-testid={dataTestId}
    >
      <ProgressionBoardDrawer
        drawerPaperProps={drawerPaperProps}
        isDrawerOpened={isDrawerOpened}
        width={width}
      >
        {renderDrawerContent()}
      </ProgressionBoardDrawer>
    </StyledProgressionBoardAppFormDrawer>
  );
};
