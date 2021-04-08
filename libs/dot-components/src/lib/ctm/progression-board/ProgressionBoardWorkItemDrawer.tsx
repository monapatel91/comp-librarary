import React, { ReactNode } from 'react';
import { Divider, Tooltip } from '@material-ui/core';
import { CommonProps } from '../../components/CommonProps';
import {
  AvatarProps,
  DotAvatar,
  DotAvatarGroup,
  DotIconButton,
  DotSkeleton,
  DotTypography,
  DrawerPaperProps,
} from '../../components';
import { ProgressionBoardDrawer } from './ProgressionBoardDrawer';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import {
  WorkItemDetailsType,
  WorkItemType,
} from './ProgressionBoardInterfaces';
import {
  rootClassName,
  StyledTooltipContent,
  StyledProgressionBoardWorkItemDrawer,
} from './ProgressionBoardWorkItemDrawer.styles';

export interface ProgressionBoardDrawerProps extends CommonProps {
  /* Callback function which executes upon drawer being closed */
  onClose: () => void;
  /** Props applied to the drawer's Paper element. */
  drawerPaperProps?: DrawerPaperProps;
  /* Width of the drawer in pixels. If not set, default value is assumed. */
  width?: number;
  /* Basic workitem's data which is loaded when progression board is displayed */
  workItem: WorkItemType;
  /* Detail data about workitem which are fetched asynchronously */
  workItemDetails?: WorkItemDetailsType;
}

export const DotProgressionBoardWorkItemDrawer = ({
  className,
  'data-testid': dataTestId,
  drawerPaperProps,
  onClose,
  width,
  workItem,
  workItemDetails = null,
}: ProgressionBoardDrawerProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const wiTypeIconRootClasses = useStylesWithRootClass(
    rootClassName,
    'work-item-type-circle',
    ...(workItem
      ? [workItem.value_goal, workItem.isEmphasized ? 'emphasized' : '']
      : [])
  );

  const isDrawerOpened = !!(workItem && workItem._id);

  const onDrawerClose = (): void => onClose();

  const onSourceOpenButtonClick = (url: string) => (): Window =>
    window.open(url, '_blank');

  const areItemDetailsAvailable = workItemDetails?.id === workItem?._id;

  const isSourceSystemDataDefined =
    workItemDetails &&
    workItemDetails.sourceSystemName &&
    workItemDetails.sourceSystemUrl;

  const generateTextBlockSkeleton = (numberOfRows: number): ReactNode[] => {
    if (!Number.isFinite(numberOfRows) || numberOfRows <= 0) return null;
    return [...Array(numberOfRows)].map((_, index: number) => (
      <DotSkeleton variant="text" key={index} />
    ));
  };

  const renderWorkItemDescription = (): ReactNode => {
    return areItemDetailsAvailable ? (
      <DotTypography variant="body1">
        {workItemDetails.description ? (
          workItemDetails.description
        ) : (
          <em>No description defined</em>
        )}
      </DotTypography>
    ) : (
      <>{generateTextBlockSkeleton(15)}</>
    );
  };

  const renderOwnerAvatar = (): ReactNode => {
    const owners = workItemDetails?.owner || [];
    if (!areItemDetailsAvailable) {
      return <DotSkeleton variant="circular" width="40px" height="40px" />;
    }
    if (owners.length <= 1) {
      return (
        <DotAvatar
          alt="Owner Avatar"
          className="owner-avatar"
          data-testid={`${dataTestId}-owner-avatar`}
        />
      );
    } else {
      const avatars: Array<AvatarProps> = owners.map((owner) => ({
        alt: 'avatar alt text',
        'data-testid': 'test-avatar',
        text: owner,
        type: 'text',
      }));
      return (
        <Tooltip
          data-testid={`${dataTestId}-owner-group-tooltip`}
          title={
            <StyledTooltipContent variant="body2">
              {owners.join(', ')}
            </StyledTooltipContent>
          }
        >
          <div>
            <DotAvatarGroup
              avatars={avatars}
              data-testid={`${dataTestId}-owner-avatar-group`}
              max={3}
            />
          </div>
        </Tooltip>
      );
    }
  };

  const renderOwner = (): ReactNode => {
    const owners = workItemDetails?.owner || [];
    if (!areItemDetailsAvailable) {
      return <DotSkeleton width="150px" />;
    }
    // If one owner - render name, if multiple do not display anything (avatar group will handle it)
    return owners.length > 0 ? (
      owners.length === 1 ? (
        <span title={owners[0]}>{owners[0]}</span>
      ) : null
    ) : (
      <em>No owner defined</em>
    );
  };

  const renderSourceIcon = (): ReactNode =>
    areItemDetailsAvailable ? (
      <DotAvatar
        alt="Source Icon"
        type="icon"
        data-testid={`${dataTestId}-source-avatar-icon`}
        className="source-avatar-icon"
        iconId="branch"
      />
    ) : (
      <DotSkeleton variant="circular" width="40px" height="40px" />
    );

  const renderSourceText = (): ReactNode =>
    areItemDetailsAvailable ? (
      isSourceSystemDataDefined ? (
        <>
          Open in{' '}
          <span title={workItemDetails.sourceSystemName}>
            {workItemDetails.sourceSystemName}
          </span>
        </>
      ) : (
        <em>No source system defined</em>
      )
    ) : (
      <DotSkeleton width="150px" />
    );

  const renderSourceOpenButton = (): ReactNode =>
    areItemDetailsAvailable ? (
      isSourceSystemDataDefined && (
        <DotIconButton
          className="source-open-btn"
          data-testid={`${dataTestId}-source-open-icon-button`}
          iconId="open-new-tab"
          titleTooltip="Open in a new tab"
          onClick={onSourceOpenButtonClick(workItemDetails.sourceSystemUrl)}
        />
      )
    ) : (
      <DotSkeleton variant="circular" width="16px" height="16px" />
    );

  const renderDrawerContent = (): ReactNode => {
    if (workItem) {
      const { isSplit } = workItem;
      return (
        <>
          <div className="drawer-header">
            <DotAvatar
              alt="Workitem Type"
              className={wiTypeIconRootClasses}
              data-testid={`${dataTestId}-type-circle`}
              iconId={isSplit ? 'circle-half-full' : 'circle'}
            />
            <DotTypography variant="h3" className="wi-external-key">
              <span title={workItem.external_key}>{workItem.external_key}</span>
            </DotTypography>
            <DotIconButton
              data-testid={`${dataTestId}-close-icon`}
              iconId="close"
              titleTooltip="Click to close"
              onClick={onDrawerClose}
            />
          </div>
          <div className="drawer-content">
            <DotTypography variant="h3" className="drawer-content-title">
              {workItem.title}
            </DotTypography>
            <DotTypography variant="h4">Description</DotTypography>
            <div className="drawer-content-description">
              {renderWorkItemDescription()}
            </div>
            <Divider className="content-divider" />
            <DotTypography variant="h4" className="drawer-content-owner-title">
              Owner
            </DotTypography>
            <div className="drawer-content-owner">
              {renderOwnerAvatar()}
              <DotTypography variant="body1" className="owner-name">
                {renderOwner()}
              </DotTypography>
            </div>
            <DotTypography variant="h4" className="drawer-content-source-title">
              Open in source system
            </DotTypography>
            <div className="drawer-content-source">
              {renderSourceIcon()}
              <DotTypography variant="body1" className="source-body">
                {renderSourceText()}
              </DotTypography>
              {renderSourceOpenButton()}
            </div>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <StyledProgressionBoardWorkItemDrawer
      className={rootClasses}
      data-testid={dataTestId}
    >
      <ProgressionBoardDrawer
        isDrawerOpened={isDrawerOpened}
        drawerPaperProps={drawerPaperProps}
        width={width}
      >
        {renderDrawerContent()}
      </ProgressionBoardDrawer>
    </StyledProgressionBoardWorkItemDrawer>
  );
};
