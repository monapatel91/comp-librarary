import React, { ReactNode } from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { ApplicationDetails } from '../ProgressionBoardInterfaces';
import { AvatarProps, DotTypography } from '../../../components';
import { DrawerItem } from '../DrawerItem';
import { DrawerItemSkeleton } from '../DrawerItemSkeleton';
import { ScServerList, ScServerListItem } from './SCServerList';
import { rootClassName, StyledApplicationEdit } from './ApplicationEdit.styles';
import { getSCServerListItems } from '../progression/applicationHelper';
import { ticketSystems } from './data/ticketSystems';

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
  const listItems = getSCServerListItems(sourceControls);

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

  const renderSourceControls = (
    scServerListItems: Array<ScServerListItem>
  ): ReactNode => (
    <ScServerList
      applicationName={applicationName}
      basePayloadUrl={basePayloadUrl}
      data-testid={`${dataTestId}-sc-server-list`}
      listItems={scServerListItems}
    />
  );

  const renderTicketSystem = (): ReactNode => {
    const { id, title } = ticketSystem;
    let avatarProps: AvatarProps;
    if (id in ticketSystems) {
      const ticketSystemInfoRecord = ticketSystems[id];
      avatarProps = {
        alt: ticketSystemInfoRecord.label,
        type: 'image',
        imageSrc: ticketSystemInfoRecord.base64,
      };
    } else {
      avatarProps = {
        alt: title,
        iconId: 'task',
        type: 'icon',
      };
    }
    return (
      <DrawerItem
        avatarProps={avatarProps}
        className="ticket-system"
        contentText={title}
        data-testid={`${dataTestId}-ts-item`}
        key={id}
      />
    );
  };

  const renderTicketSystemSkeleton = (): ReactNode => (
    <DrawerItemSkeleton data-testid={`${dataTestId}-ts-skeleton`} />
  );

  const renderApplicationName = (): ReactNode => {
    if (applicationName) {
      const avatarProps: AvatarProps = {
        alt: 'Application name',
        iconId: 'package',
        type: 'icon',
      };
      return (
        <DrawerItem
          avatarProps={avatarProps}
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
      {listItems.length > 0
        ? renderSourceControls(listItems)
        : renderScSkeletons(2)}
      <DotTypography className="ticket-system-label" variant="h4">
        Ticketing system
      </DotTypography>
      {ticketSystem ? renderTicketSystem() : renderTicketSystemSkeleton()}
    </StyledApplicationEdit>
  );
};
