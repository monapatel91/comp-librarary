import React from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import {
  rootClassName,
  StyledPBAppFormDrawerContent,
} from './PBAppFormDrawerContent.styles';
import {
  ApplicationAPI,
  ApplicationFormOutput,
} from '../ProgressionBoardInterfaces';
import { ApplicationDrawerHeader } from './ApplicationDrawerHeader';
import { ApplicationForm } from './ApplicationForm';

export interface PBAppFormDrawerContentProps extends CommonProps {
  /* Progression's application data coming from the API */
  apiData: ApplicationAPI;
  /* Callback function which executes upon drawer being closed */
  onDrawerClose: () => void;
  /* Callback function which will be called when form's 'Cancel' button is clicked */
  onFormCancel: () => void;
  /* Callback function which executes upon new application form submission */
  onFormSubmit: (applicationFormData: ApplicationFormOutput) => void;
}

export const DotPBAppFormDrawerContent = ({
  apiData,
  className,
  'data-testid': dataTestId,
  onDrawerClose,
  onFormCancel,
  onFormSubmit,
}: PBAppFormDrawerContentProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledPBAppFormDrawerContent
      className={rootClasses}
      data-testid={dataTestId}
    >
      <ApplicationDrawerHeader
        data-testid={dataTestId}
        headerTitle="Add application"
        onDrawerClose={onDrawerClose}
      />
      <div className="drawer-content">
        <ApplicationForm
          applicationNames={apiData.applicationNames}
          basePayloadUrl={apiData?.basePayloadUrl}
          sourceControls={apiData?.sourceControls}
          ticketSystems={apiData?.ticketSystems}
          onFormCancel={onFormCancel}
          onFormSubmit={onFormSubmit}
        />
      </div>
    </StyledPBAppFormDrawerContent>
  );
};
