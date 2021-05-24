import React from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import {
  rootClassName,
  StyledPBAppInfoDrawerContent,
} from './PBAppInfoDrawerContent.styles';
import { ApplicationDetails } from '../ProgressionBoardInterfaces';
import { ApplicationDrawerHeader } from './ApplicationDrawerHeader';
import { ApplicationEdit } from './ApplicationEdit';

export interface PBAppInfoDrawerContentProps extends CommonProps {
  /* Progression's application data coming from the API */
  appDetails: ApplicationDetails;
  /* Callback function which executes upon drawer being closed */
  onDrawerClose: () => void;
}

export const DotPBAppInfoDrawerContent = ({
  appDetails,
  className,
  'data-testid': dataTestId,
  onDrawerClose,
}: PBAppInfoDrawerContentProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledPBAppInfoDrawerContent
      className={rootClasses}
      data-testid={dataTestId}
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
    </StyledPBAppInfoDrawerContent>
  );
};
