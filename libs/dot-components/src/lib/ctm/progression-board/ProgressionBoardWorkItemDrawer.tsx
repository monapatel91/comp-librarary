import React from 'react';
import { Divider } from '@material-ui/core';
import { CommonProps } from '../../components/CommonProps';
import {
  DotAvatar,
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
      ? [
          workItem.value_goal,
          workItem.isSplit ? 'split' : '',
          workItem.isEmphasized ? 'emphasized' : '',
        ]
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

  const generateTextBlockSkeleton = (numberOfRows: number): JSX.Element[] => {
    if (!Number.isFinite(numberOfRows) || numberOfRows <= 0) return null;
    return [...Array(numberOfRows)].map((_, index: number) => (
      <DotSkeleton variant="text" key={index} />
    ));
  };

  const renderWorkItemDescription = (): JSX.Element => {
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

  const renderOwnerAvatar = (): JSX.Element =>
    areItemDetailsAvailable ? (
      <DotAvatar
        alt="Owner Avatar"
        className="owner-avatar"
        data-testid={`${dataTestId}-owner-avatar`}
      />
    ) : (
      <DotSkeleton variant="circular" width="40px" height="40px" />
    );

  const renderOwner = (): JSX.Element =>
    areItemDetailsAvailable ? (
      workItemDetails.owner ? (
        <span title={workItemDetails.owner}>{workItemDetails.owner}</span>
      ) : (
        <em>No owner defined</em>
      )
    ) : (
      <DotSkeleton width="150px" />
    );

  const renderSourceIcon = (): JSX.Element =>
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

  const renderSourceText = (): JSX.Element =>
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

  const renderSourceOpenButton = (): JSX.Element =>
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

  const renderDrawerContent = (): JSX.Element => {
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
