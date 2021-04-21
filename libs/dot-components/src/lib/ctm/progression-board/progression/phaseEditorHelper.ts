import { EditablePhaseType } from '../ProgressionBoardInterfaces';
import { isIndexNumberValid } from '../helper';

export const isPhasesDataValid = (
  phases: Array<EditablePhaseType>
): boolean => {
  return !!(
    checkIfValidPhasesStructure(phases) &&
    phases.every((phase: EditablePhaseType) => {
      return phase.name !== '';
    }) &&
    !checkIfDuplicateNamesExist(phases)
  );
};

export const checkIfValidPhasesStructure = (
  phases: Array<EditablePhaseType>
): boolean => {
  return !!(
    phases &&
    Array.isArray(phases) &&
    phases.every((phase: EditablePhaseType) => {
      return (
        typeof phase === 'object' &&
        Object.keys(phase).length > 0 &&
        'name' in phase
      );
    })
  );
};

export const checkIfDuplicateNamesExist = (
  phases: Array<EditablePhaseType>
): boolean => {
  if (!phases || !Array.isArray(phases)) return false;
  const uniqueNames = new Set(phases.map((phase) => phase.name));
  return uniqueNames.size < phases.length;
};

export const checkIfNewPhasePresent = (
  phases: Array<EditablePhaseType>
): boolean => {
  if (!checkIfValidPhasesStructure(phases)) return false;
  return !!phases.find((phase) => phase.isNew);
};

export const getPhasesWithoutActiveFocus = (
  phases: Array<EditablePhaseType>
): Array<EditablePhaseType> => {
  if (!checkIfValidPhasesStructure(phases)) return null;
  return phases.map((phase: EditablePhaseType) => ({
    ...phase,
    hasFocus: false,
  }));
};

export const getNewEmptyPhase = (): EditablePhaseType => ({
  isEditable: true,
  isNew: true,
  hasFocus: true,
  name: '',
});

export const getPhasesWithNewInsertedPhase = (
  phases: Array<EditablePhaseType>,
  indexToInsert: number
): Array<EditablePhaseType> => {
  if (
    !checkIfValidPhasesStructure(phases) ||
    !isIndexNumberValid(indexToInsert)
  )
    return null;
  const newEmptyPhase: EditablePhaseType = getNewEmptyPhase();
  const oldPhases = getPhasesWithoutActiveFocus(phases);
  return [
    ...oldPhases.slice(0, indexToInsert),
    newEmptyPhase,
    ...oldPhases.slice(indexToInsert),
  ];
};

export const getPhasesWithPhaseRemoved = (
  phases: Array<EditablePhaseType>,
  indexToRemove: number
): Array<EditablePhaseType> => {
  if (
    !checkIfValidPhasesStructure(phases) ||
    !isIndexNumberValid(indexToRemove)
  )
    return null;
  return phases.filter(
    (phase: EditablePhaseType, index: number) => index !== indexToRemove
  );
};

export const getSavedPhases = (
  phases: Array<EditablePhaseType>
): Array<EditablePhaseType> => {
  if (!checkIfValidPhasesStructure(phases)) return null;
  return phases.map((phase: EditablePhaseType) => {
    const { isEditable, hasFocus, ...rest } = phase;
    // Omit unnecessary internal props
    return {
      ...rest,
    };
  });
};
