import { ProgressionAction } from '../reducers/progressionReducer';
import {
  ApplicationDetails,
  ApplicationFormOutput,
  EditablePhaseType,
  SelectedWorkItem,
  WorkItemDetailsType,
} from '@digital-ai/dot-components';

export const actionTypes = {
  OPEN_NEW_APPLICATION_DRAWER: 'OPEN_NEW_APPLICATION_DRAWER',
  CLOSE_NEW_APPLICATION_DRAWER: 'CLOSE_NEW_APPLICATION_DRAWER',

  OPEN_APPLICATION_DETAILS_DRAWER: 'OPEN_APPLICATION_DETAILS_DRAWER',
  CLOSE_APPLICATION_DETAILS_DRAWER: 'CLOSE_APPLICATION_DETAILS_DRAWER',

  OPEN_PHASE_EDITOR: 'OPEN_PHASE_EDITOR',
  CLOSE_PHASE_EDITOR: 'CLOSE_PHASE_EDITOR',

  OPEN_EMPTY_PHASES_MODE: 'OPEN_EMPTY_PHASES_MODE',
  CLOSE_EMPTY_PHASES_MODE: 'CLOSE_EMPTY_PHASES_MODE',

  SET_APPLICATION_DETAILS: 'SET_APPLICATION_DETAILS',
  CLEAR_APPLICATION_DETAILS: 'CLEAR_APPLICATION_DETAILS',

  SET_WORKITEM_DETAILS: 'SET_WORKITEM_DETAILS',

  SET_EDITABLE_PHASES: 'SET_EDITABLE_PHASES',

  SET_FORM_RESULT: 'SET_FORM_RESULT',
  CLEAR_FORM_RESULT: 'CLEAR_FORM_RESULT',

  SET_SELECTED_WORKITEM: 'SET_SELECTED_WORKITEM',
  CLEAR_SELECTED_WORKITEM: 'CLEAR_SELECTED_WORKITEM',
};

export const openNewApplicationDrawer = (): ProgressionAction => ({
  type: actionTypes.OPEN_NEW_APPLICATION_DRAWER,
});

export const closeNewApplicationDrawer = (): ProgressionAction => ({
  type: actionTypes.CLOSE_NEW_APPLICATION_DRAWER,
});

export const openApplicationDetailsDrawer = (): ProgressionAction => ({
  type: actionTypes.OPEN_APPLICATION_DETAILS_DRAWER,
});

export const closeApplicationDetailsDrawer = (): ProgressionAction => ({
  type: actionTypes.CLOSE_APPLICATION_DETAILS_DRAWER,
});

export const openPhaseEditor = (
  editablePhases: Array<EditablePhaseType>
): ProgressionAction => ({
  type: actionTypes.OPEN_PHASE_EDITOR,
  payload: {
    editablePhases,
  },
});

export const closePhaseEditor = (): ProgressionAction => ({
  type: actionTypes.CLOSE_PHASE_EDITOR,
});

export const openEmptyPhasesMode = (): ProgressionAction => ({
  type: actionTypes.OPEN_EMPTY_PHASES_MODE,
});

export const closeEmptyPhasesMode = (): ProgressionAction => ({
  type: actionTypes.CLOSE_EMPTY_PHASES_MODE,
});

export const setApplicationDetails = (
  appDetails: ApplicationDetails
): ProgressionAction => ({
  type: actionTypes.SET_APPLICATION_DETAILS,
  payload: {
    appDetails,
  },
});

export const clearApplicationDetails = (): ProgressionAction => ({
  type: actionTypes.CLEAR_APPLICATION_DETAILS,
});

export const setWorkitemDetails = (
  workItemDetails: WorkItemDetailsType
): ProgressionAction => ({
  type: actionTypes.SET_WORKITEM_DETAILS,
  payload: {
    workItemDetails,
  },
});

export const setEditablePhases = (
  editablePhases: Array<EditablePhaseType>
): ProgressionAction => ({
  type: actionTypes.SET_EDITABLE_PHASES,
  payload: {
    editablePhases,
  },
});

export const setFormResult = (
  formResult: ApplicationFormOutput
): ProgressionAction => ({
  type: actionTypes.SET_FORM_RESULT,
  payload: {
    formResult,
  },
});

export const clearFormResult = (): ProgressionAction => ({
  type: actionTypes.CLEAR_FORM_RESULT,
});

export const setSelectedWorkItem = (
  selectedWorkItem: SelectedWorkItem,
  isAppDrawerOpened = null
): ProgressionAction => ({
  type: actionTypes.SET_SELECTED_WORKITEM,
  payload: {
    selectedWorkItem,
    ...(isAppDrawerOpened !== null && { isAppDrawerOpened }),
  },
});

export const clearSelectedWorkItem = (): ProgressionAction => ({
  type: actionTypes.CLEAR_SELECTED_WORKITEM,
});
