import React, { ReactNode } from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import {
  ApplicationDetails,
  SCServer,
  SourceControl,
} from '../ProgressionBoardInterfaces';
import { DotTypography } from '../../../components';
import { DrawerItem } from '../DrawerItem';
import { DrawerItemSkeleton } from '../DrawerItemSkeleton';
import { ScServerList } from './SCServerList';
import { rootClassName, StyledApplicationEdit } from './ApplicationEdit.styles';

export interface ApplicationEditProps extends CommonProps {
  appDetails: ApplicationDetails;
}

export const ApplicationEdit = ({
  appDetails,
  className,
  'data-testid': dataTestId,
}: ApplicationEditProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const { applicationName, basePayloadUrl, ticketSystem, sourceControls } =
    appDetails || {};

  const renderScSkeletons = (numberOfSkeletons: number): Array<ReactNode> => {
    return [...Array(numberOfSkeletons)].map((_, index: number) => (
      <DrawerItemSkeleton
        className="source-control-skeleton"
        data-testid={`${dataTestId}-sc-server-${index}`}
        displayIconSkeleton={true}
        key={index}
      />
    ));
  };

  const renderSourceControls = (): ReactNode => {
    const servers: Array<SCServer> = [];
    sourceControls?.forEach((sourceControl: SourceControl) =>
      servers.push(...sourceControl.servers)
    );
    if (servers.length > 0) {
      return (
        <ScServerList
          applicationName={applicationName}
          basePayloadUrl={basePayloadUrl}
          data-testid={`${dataTestId}-sc-server-list`}
          servers={servers}
        />
      );
    }
    return renderScSkeletons(2);
  };

  const renderTicketSystem = (): ReactNode => {
    if (ticketSystem) {
      const { id, title } = ticketSystem;
      return (
        <DrawerItem
          avatarAltText={title}
          avatarIcon="task"
          className="ticket-system"
          contentText={title}
          data-testid={`${dataTestId}-ts-item`}
          key={id}
        />
      );
    }
    return <DrawerItemSkeleton data-testid={`${dataTestId}-ts-skeleton`} />;
  };

  const renderApplicationName = (): ReactNode => {
    if (applicationName) {
      return (
        <DrawerItem
          avatarAltText="Application name"
          avatarIcon="package"
          className="app-name"
          contentText={applicationName}
          data-testid={`${dataTestId}-app-name-item`}
        />
      );
    }
    return (
      <DrawerItemSkeleton
        className="app-name-skeleton"
        data-testid={`${dataTestId}-app-name-skeleton`}
      />
    );
  };

  return (
    <StyledApplicationEdit className={rootClasses} data-testid={dataTestId}>
      <DotTypography variant="h4">Application name</DotTypography>
      {renderApplicationName()}
      <DotTypography className="source-control-label" variant="h4">
        Source control
      </DotTypography>
      {renderSourceControls()}
      <DotTypography className="ticket-system-label" variant="h4">
        Ticketing system
      </DotTypography>
      {renderTicketSystem()}
    </StyledApplicationEdit>
  );
};
