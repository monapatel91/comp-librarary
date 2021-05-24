import React, { CSSProperties, ReactNode, useReducer } from 'react';
import {
  ApplicationFormOutput,
  DotButton,
  DotProgressionBoard,
  DotPBAppFormDrawerContent,
  DotPBAppInfoDrawerContent,
  DotProgressionBoardDrawer,
  DotProgressionBoardPhaseEditor,
  DotPBWorkItemDrawerContent,
  DrawerPaperProps,
  EditablePhaseType,
  PhaseType,
  SelectedWorkItem,
  WorkItemDetailsType,
} from '@digital-ai/dot-components';
import {
  progressionInitState,
  progressionReducer,
} from '../../demo-progression/reducers/progressionReducer';
import { pbWorkItemDetailsData } from '../../demo-progression/data/pbWorkItemDetailsData';
import { pbApplicationAPIData as apiData } from '../../demo-progression/data/pbApplicationApiData';
import { sampleEmptyPhases } from '../../demo-progression/data/pbEmptyPhasesData';
import { phasesData } from '../DemoData';
import { pbAppDetailsData } from '../../demo-progression/data/pbAppDetailsData';
import { pbApplications } from '../../demo-progression/data/pbApplicationsData';
import { rootClassName, StyledDemoProgression } from './DemoProgression.styles';
import {
  clearApplicationDetails,
  clearFormResult,
  clearSelectedWorkItem,
  closeApplicationDetailsDrawer,
  closeEmptyPhasesMode,
  closeNewApplicationDrawer,
  closePhaseEditor,
  openApplicationDetailsDrawer,
  openEmptyPhasesMode,
  openNewApplicationDrawer,
  openPhaseEditor,
  setApplicationDetails,
  setEditablePhases,
  setFormResult,
  setSelectedWorkItem,
  setWorkitemDetails,
} from '../../demo-progression/actions/progressionAction';
import { DemoAppFormResult } from './DemoAppFormResult';

export const ProgressionDemo = () => {
  const [progressionState, dispatch] = useReducer(
    progressionReducer,
    progressionInitState
  );

  const drawerPaperProps: DrawerPaperProps = {
    style: {
      position: 'absolute',
    } as CSSProperties,
  };

  const DRAWER_WIDTH = 320;
  const DRAWER_OFFSET_FROM_BOARD = 30;
  const BASE_URL = 'http://localhost:8080';

  const onWorkItemChange = (workItem: SelectedWorkItem): void => {
    dispatch(setSelectedWorkItem(workItem, false));
    /* Simulate async API call */
    setTimeout(() => {
      const detailsItem = pbWorkItemDetailsData.find(
        (item: WorkItemDetailsType) => item.id === workItem._id
      );
      if (detailsItem) {
        dispatch(
          setWorkitemDetails({
            ...detailsItem,
            sourceSystemUrl: `${detailsItem.sourceSystemUrl}${detailsItem.id}`,
          })
        );
      }
    }, 1500);
  };

  const workItemSelection = {
    selectedWorkItem: progressionState.selectedWorkItem,
    onWorkItemChange,
    drawerOffsetFromBoard: DRAWER_OFFSET_FROM_BOARD,
    drawerWidth: DRAWER_WIDTH,
  };

  const onDrawerClose = (): void => dispatch(clearSelectedWorkItem());

  const onApplicationDrawerClose = (): void =>
    dispatch(closeNewApplicationDrawer());

  const onAppInfoDrawerClose = (): void =>
    dispatch(closeApplicationDetailsDrawer());

  const onNewApplicationClick = (): void =>
    dispatch(openNewApplicationDrawer());

  const onViewEmptyPhasesClick = (): void => dispatch(openEmptyPhasesMode());

  const onCancelEmptyPhasesMode = (): void => dispatch(closeEmptyPhasesMode());

  const onConfigureClick = (): void =>
    dispatch(openPhaseEditor(getEditablePhases()));

  const onApplicationSubmit = (
    applicationFormData: ApplicationFormOutput
  ): void => dispatch(setFormResult(applicationFormData));

  const appFormDrawerContentProps = {
    apiData,
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
    dispatch(setEditablePhases(phases));
  };

  const onConfigurationCancel = (): void => dispatch(closePhaseEditor());

  const onFormResultsClose = (): void => dispatch(clearFormResult());

  const renderFormResults = (): ReactNode => {
    const { formResult } = progressionState;
    if (!formResult) return null;
    const {
      applicationName,
      createAnother,
      sourceControls,
      ticketSystem,
    } = formResult;

    return (
      <DemoAppFormResult
        applicationName={applicationName}
        createAnother={createAnother}
        onClose={onFormResultsClose}
        sourceControls={sourceControls}
        ticketSystem={ticketSystem}
      />
    );
  };

  const onAppNameClick = (appName: string): void => {
    dispatch(clearApplicationDetails());
    dispatch(openApplicationDetailsDrawer());
    /* Simulate async API call */
    setTimeout(() => {
      const currentAppDetails = pbAppDetailsData.find(
        (app) => app.applicationName === appName
      );
      if (currentAppDetails) {
        dispatch(setApplicationDetails(currentAppDetails));
      }
    }, 1500);
  };

  const renderDrawerContent = (): ReactNode => {
    const {
      appDetails,
      isAppDrawerOpened,
      isAppInfoDrawerOpened,
      selectedWorkItem,
      workItemDetails,
    } = progressionState;

    if (selectedWorkItem) {
      return (
        <DotPBWorkItemDrawerContent
          onClose={onDrawerClose}
          workItem={selectedWorkItem}
          workItemDetails={workItemDetails}
        />
      );
    }
    if (isAppDrawerOpened) {
      return <DotPBAppFormDrawerContent {...appFormDrawerContentProps} />;
    }
    if (isAppInfoDrawerOpened) {
      return (
        <DotPBAppInfoDrawerContent
          appDetails={appDetails}
          onDrawerClose={onAppInfoDrawerClose}
        />
      );
    }
  };

  const renderProgression = (): ReactNode => {
    const {
      editablePhases,
      isAppDrawerOpened,
      isAppInfoDrawerOpened,
      isInConfigureMode,
      isInEmptyPhasesMode,
      selectedWorkItem,
    } = progressionState;

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

    const isDrawerOpened =
      isAppDrawerOpened || isAppInfoDrawerOpened || !!selectedWorkItem;

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
          <DotProgressionBoardDrawer
            isDrawerOpened={isDrawerOpened}
            drawerPaperProps={drawerPaperProps}
            width={DRAWER_WIDTH}
          >
            {renderDrawerContent()}
          </DotProgressionBoardDrawer>
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
