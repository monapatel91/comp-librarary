import { actionTypes } from '../actions/progressionAction';
import {
  ApplicationDetails,
  ApplicationFormOutput,
  EditablePhaseType,
  SelectedWorkItem,
  WorkItemDetailsType,
} from '@digital-ai/dot-components';

export interface ProgressionState {
  appDetails: ApplicationDetails;
  editablePhases: Array<EditablePhaseType>;
  formResult: ApplicationFormOutput;
  isAppDrawerOpened: boolean;
  isAppInfoDrawerOpened: boolean;
  isInConfigureMode: boolean;
  isInEmptyPhasesMode: boolean;
  selectedWorkItem: SelectedWorkItem;
  workItemDetails: WorkItemDetailsType;
}

export const progressionInitState: ProgressionState = {
  appDetails: null,
  editablePhases: null,
  formResult: null,
  isAppDrawerOpened: false,
  isAppInfoDrawerOpened: false,
  isInConfigureMode: false,
  isInEmptyPhasesMode: false,
  selectedWorkItem: null,
  workItemDetails: null,
};

export interface ProgressionAction {
  type: string;
  payload?: Partial<ProgressionState>;
}

export const progressionReducer = (
  state: ProgressionState,
  action: ProgressionAction
): ProgressionState => {
  switch (action.type) {
    case actionTypes.OPEN_NEW_APPLICATION_DRAWER:
      return {
        ...state,
        isAppDrawerOpened: true,
        isAppInfoDrawerOpened: false,
        isInConfigureMode: false,
        isInEmptyPhasesMode: false,
        selectedWorkItem: null,
      };
    case actionTypes.CLOSE_NEW_APPLICATION_DRAWER:
      return {
        ...state,
        isAppDrawerOpened: false,
      };
    case actionTypes.OPEN_APPLICATION_DETAILS_DRAWER:
      return {
        ...state,
        isAppDrawerOpened: false,
        isAppInfoDrawerOpened: true,
        isInConfigureMode: false,
        isInEmptyPhasesMode: false,
        selectedWorkItem: null,
      };
    case actionTypes.CLOSE_APPLICATION_DETAILS_DRAWER:
      return {
        ...state,
        isAppInfoDrawerOpened: false,
      };
    case actionTypes.OPEN_PHASE_EDITOR: {
      const {
        payload: { editablePhases },
      } = action;
      return {
        ...state,
        isAppDrawerOpened: false,
        isAppInfoDrawerOpened: false,
        isInConfigureMode: true,
        isInEmptyPhasesMode: false,
        editablePhases: editablePhases,
      };
    }
    case actionTypes.OPEN_EMPTY_PHASES_MODE:
      return {
        ...state,
        isAppDrawerOpened: false,
        isAppInfoDrawerOpened: false,
        isInConfigureMode: false,
        isInEmptyPhasesMode: true,
      };
    case actionTypes.CLOSE_EMPTY_PHASES_MODE:
      return {
        ...state,
        isInEmptyPhasesMode: false,
      };
    case actionTypes.CLOSE_PHASE_EDITOR:
      return {
        ...state,
        isInConfigureMode: false,
      };
    case actionTypes.SET_APPLICATION_DETAILS:
      return {
        ...state,
        appDetails: action.payload.appDetails,
      };
    case actionTypes.CLEAR_APPLICATION_DETAILS:
      return {
        ...state,
        appDetails: null,
      };
    case actionTypes.SET_WORKITEM_DETAILS: {
      const {
        payload: { workItemDetails },
      } = action;
      return {
        ...state,
        workItemDetails: workItemDetails,
      };
    }
    case actionTypes.SET_EDITABLE_PHASES: {
      const {
        payload: { editablePhases },
      } = action;
      return {
        ...state,
        editablePhases: editablePhases,
      };
    }
    case actionTypes.SET_FORM_RESULT: {
      const {
        payload: { formResult },
      } = action;
      return {
        ...state,
        formResult: formResult,
        isAppDrawerOpened: formResult.createAnother,
      };
    }
    case actionTypes.CLEAR_FORM_RESULT:
      return {
        ...state,
        formResult: null,
      };
    case actionTypes.SET_SELECTED_WORKITEM: {
      const {
        payload: { selectedWorkItem },
      } = action;
      return {
        ...state,
        selectedWorkItem,
        isAppDrawerOpened: false,
        isAppInfoDrawerOpened: false,
        isInConfigureMode: false,
        isInEmptyPhasesMode: false,
      };
    }
    case actionTypes.CLEAR_SELECTED_WORKITEM: {
      return {
        ...state,
        selectedWorkItem: null,
        isAppDrawerOpened: false,
        isAppInfoDrawerOpened: false,
        isInConfigureMode: false,
        isInEmptyPhasesMode: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
