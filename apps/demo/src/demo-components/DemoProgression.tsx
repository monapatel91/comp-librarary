import React, { CSSProperties, Fragment, ReactNode, useState } from 'react';
import styled from 'styled-components';
import {
  ApplicationDetails,
  DotButton,
  DotDialog,
  DotList,
  DotListItem,
  DotProgressionBoard,
  DotProgressionBoardAppFormDrawer,
  DotProgressionBoardAppInfoDrawer,
  DotProgressionBoardPhaseEditor,
  DotProgressionBoardWorkItemDrawer,
  DrawerPaperProps,
  EditablePhaseType,
  PhaseType,
  SelectedWorkItem,
} from '@digital-ai/dot-components';
import { pbWorkItemDetailsData } from '../demo-data/pbWorkItemDetailsData';
import { pbApplicationAPIData as apiData } from '../demo-data/pbApplicationApiData';
import { sampleEmptyPhases } from '../demo-data/pbEmptyPhasesData';
import { phasesData } from './DemoData';
import { pbAppDetailsData } from '../demo-data/pbAppDetailsData';
import { pbApplications } from '../demo-data/pbApplicationsData';

const rootClassName = 'demo-progression';
const dialogRootClassName = 'form-result-dialog';

const StyledDemoProgression = styled.div`
  &.${rootClassName} {
    height: 100%;
    display: flex;
    flex-direction: column;

    .progression {
      display: flex;
      height: 100%;
    }

    .progression-action {
      margin: 8px 0 8px 0;
    }

    .form-child-list {
      margin: 0 0 0 16px;
    }
  }
`;

const StyledDotDialog = styled(DotDialog)`
  &.${dialogRootClassName} {
    .form-child-list {
      margin: 0 0 0 16px;
    }

    .dot-dialog-content {
      min-width: 500px;
    }
  }
`;

export const ProgressionDemo = () => {
  const [selectedWorkItem, setSelectedWorkItem] = useState(null);
  const [workItemDetails, setWorkItemDetails] = useState(null);
  const [isAppDrawerOpened, setIsAppDrawerOpened] = useState<boolean>(false);
  const [appDetails, setAppDetails] = useState<ApplicationDetails>();
  const [isAppInfoDrawerOpened, setIsAppInfoDrawerOpened] = useState<boolean>(
    false
  );
  const [isInConfigureMode, setIsInConfigureMode] = useState<boolean>(false);
  const [isInEmptyPhasesMode, setIsInEmptyPhasesMode] = useState<boolean>(
    false
  );
  const [editablePhases, setEditablePhases] = useState<
    Array<EditablePhaseType>
  >(null);
  const [formResult, setFormResult] = useState(null);

  const drawerPaperProps: DrawerPaperProps = {
    style: {
      position: 'absolute',
    } as CSSProperties,
  };

  const DRAWER_WIDTH = 320;
  const DRAWER_OFFSET_FROM_BOARD = 30;
  const BASE_URL = 'http://localhost:8080';

  const onWorkItemChange = (workItem: SelectedWorkItem): void => {
    onApplicationDrawerClose();
    setSelectedWorkItem(workItem);
    /* Simulate async API call */
    setTimeout(() => {
      const detailsItem = pbWorkItemDetailsData.find(
        (item) => item.id === workItem._id
      );
      if (detailsItem) {
        setWorkItemDetails({
          ...detailsItem,
          sourceSystemUrl: `${detailsItem.sourceSystemUrl}${detailsItem.id}`,
        });
      }
    }, 1500);
  };

  const workItemSelection = {
    selectedWorkItem,
    onWorkItemChange,
    drawerOffsetFromBoard: DRAWER_OFFSET_FROM_BOARD,
    drawerWidth: DRAWER_WIDTH,
  };

  const onDrawerClose = (): void => setSelectedWorkItem(null);

  const onApplicationDrawerClose = (): void => setIsAppDrawerOpened(false);

  const onAppInfoDrawerClose = (): void => setIsAppInfoDrawerOpened(false);

  const onNewApplicationClick = (): void => {
    onDrawerClose();
    setIsAppDrawerOpened(true);
  };

  const onViewEmptyPhasesClick = (): void => setIsInEmptyPhasesMode(true);

  const onCancelEmptyPhasesMode = (): void => setIsInEmptyPhasesMode(false);

  const onConfigureClick = (): void => {
    setIsInConfigureMode((prevState) => !prevState);
    setEditablePhases(getEditablePhases());
  };

  const onApplicationSubmit = (applicationFormData) => {
    const { createAnother } = applicationFormData || {};
    // Close drawer (upon submission) if 'Create another' was NOT checked
    !createAnother && setIsAppDrawerOpened(false);
    setFormResult(applicationFormData);
  };

  const application = {
    apiData,
    isDrawerOpened: isAppDrawerOpened,
    onFormCancel: onApplicationDrawerClose,
    onFormSubmit: onApplicationSubmit,
    onDrawerClose: onApplicationDrawerClose,
  };

  const getEditablePhases = (): Array<EditablePhaseType> =>
    phasesData.map((phase: PhaseType) => ({
      name: phase.name,
    }));

  const onSaveButtonClick = (newPhases: Array<EditablePhaseType>): void => {
    const phases = newPhases.map((phase) => {
      const { isNew, ...rest } = phase;
      return {
        ...rest,
      };
    });
    setEditablePhases(phases);
  };

  const onConfigurationCancel = (): void => setIsInConfigureMode(false);

  const renderSourceControlListItems = (sourceControl): ReactNode =>
    sourceControl.servers.map((server) => (
      <DotListItem
        key={server.id}
        title="Source Control Server"
        text={server.title}
        iconId="server"
      />
    ));

  const renderTicketSystemListItems = (ticketSystem): ReactNode =>
    ticketSystem.servers.map((server) => (
      <DotListItem
        key={server.id}
        title="Source Control Server"
        text={server.title}
        iconId="server"
      />
    ));

  const renderFormResults = (): ReactNode => {
    if (!formResult) return null;
    const {
      applicationName,
      createAnother,
      sourceControls,
      ticketSystem,
    } = formResult;

    return (
      <StyledDotDialog
        className={dialogRootClassName}
        onCancel={() => setFormResult(null)}
        onSubmit={() => setFormResult(null)}
        open={true}
        title="Form Results"
      >
        <DotList>
          <>
            <DotListItem
              className="application-name"
              title="Application Name"
              text={applicationName}
              iconId="apps"
            />
            {sourceControls.map((sourceControl) => (
              <Fragment key={sourceControl.id}>
                <DotListItem
                  className="source-control"
                  title="Source Control"
                  key={sourceControl.id}
                  text={sourceControl.title}
                  iconId="branch"
                />
                <DotList className="form-child-list">
                  {renderSourceControlListItems(sourceControl)}
                </DotList>
              </Fragment>
            ))}
            <DotListItem
              className="ticket-system"
              title="Ticketing System"
              text={ticketSystem.title}
              iconId="task"
            />
            <DotList className="form-child-list">
              {renderTicketSystemListItems(ticketSystem)}
            </DotList>
            <DotListItem
              title="Create another"
              text={`Create another: ${createAnother}`}
              iconId="add"
            />
          </>
        </DotList>
      </StyledDotDialog>
    );
  };

  const onAppNameClick = (appName: string): void => {
    setAppDetails(null);
    setIsAppInfoDrawerOpened(true);
    /* Simulate async API call */
    setTimeout(() => {
      const currentAppDetails = pbAppDetailsData.find(
        (app) => app.applicationName === appName
      );
      if (currentAppDetails) {
        setAppDetails(currentAppDetails);
      }
    }, 1500);
  };

  const renderProgression = (): ReactNode => {
    if (isInConfigureMode) {
      return (
        <DotProgressionBoardPhaseEditor
          editablePhases={editablePhases}
          onCancel={onConfigurationCancel}
          onSave={onSaveButtonClick}
        />
      );
    }
    if (isInEmptyPhasesMode) {
      return (
        <>
          <div className="progression-action">
            <DotButton
              className="view-empty-phases-btn"
              onClick={onCancelEmptyPhasesMode}
            >
              Go Back
            </DotButton>
          </div>
          <div className="progression">
            <DotProgressionBoard
              className="progression-board"
              workItemSelection={workItemSelection}
              phases={sampleEmptyPhases}
              baseUrl={BASE_URL}
            />
          </div>
        </>
      );
    }
    return (
      <>
        <div className="progression-action">
          <DotButton
            className="new-application-btn"
            onClick={onNewApplicationClick}
          >
            New Application
          </DotButton>
          <DotButton
            className="view-empty-phases-btn"
            onClick={onViewEmptyPhasesClick}
          >
            View Empty Phases
          </DotButton>
          <DotButton className="edit-btn" onClick={onConfigureClick}>
            Configure
          </DotButton>
        </div>
        <div className="progression">
          <DotProgressionBoard
            className="progression-board"
            workItemSelection={workItemSelection}
            onAppNameClick={onAppNameClick}
            pbApplications={pbApplications}
            phases={phasesData}
            baseUrl={BASE_URL}
          />
          <DotProgressionBoardWorkItemDrawer
            onClose={onDrawerClose}
            width={DRAWER_WIDTH}
            workItem={selectedWorkItem}
            workItemDetails={workItemDetails}
            drawerPaperProps={drawerPaperProps}
          />
          <DotProgressionBoardAppFormDrawer
            drawerPaperProps={drawerPaperProps}
            {...application}
          />
          <DotProgressionBoardAppInfoDrawer
            appDetails={appDetails}
            drawerPaperProps={drawerPaperProps}
            isDrawerOpened={isAppInfoDrawerOpened}
            onDrawerClose={onAppInfoDrawerClose}
          />
        </div>
      </>
    );
  };

  return (
    <StyledDemoProgression className={rootClassName}>
      {renderProgression()}
      {renderFormResults()}
    </StyledDemoProgression>
  );
};
