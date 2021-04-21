import {
  checkIfDuplicateNamesExist,
  checkIfNewPhasePresent,
  checkIfValidPhasesStructure,
  getNewEmptyPhase,
  getPhasesWithNewInsertedPhase,
  getPhasesWithoutActiveFocus,
  getPhasesWithPhaseRemoved,
  getSavedPhases,
  isPhasesDataValid,
} from './phaseEditorHelper';
import { EditablePhaseType } from '../ProgressionBoardInterfaces';

describe('phaseEditorHelper', () => {
  const incorrectPhaseSample = { type: 'test' };

  const emptyNamePhaseSample = { name: '' };

  const invalidNameTypePhaseSample = { name: 123 };

  const incorrectPhasesSample = [incorrectPhaseSample];

  const emptyNamePhasesSample = [emptyNamePhaseSample, emptyNamePhaseSample];

  const emptyPhaseObjectsSample = [{ name: '123' }, {}];

  const phaseWithFocusSample = { name: 'Focus phase', hasFocus: true };

  const newPhase = { name: 'New Phase', isNew: true };

  const invalidNameTypePhasesSample = [
    invalidNameTypePhaseSample,
    invalidNameTypePhaseSample,
  ];

  const phasesWithDuplicateName = [
    {
      name: 'Phase 1',
    },
    {
      name: 'Phase 1',
    },
    {
      name: 'Phase 2',
    },
  ];

  const validPhasesSample: Array<EditablePhaseType> = [
    {
      name: 'Phase 1',
    },
    {
      name: 'Phase 2',
    },
    {
      name: 'Phase 3',
    },
  ];

  const validPhasesWithoutFocusSample: Array<EditablePhaseType> = [
    ...validPhasesSample.map((phase) => ({ ...phase, hasFocus: false })),
  ];

  const phasesWithFocusSample: Array<EditablePhaseType> = [
    phaseWithFocusSample,
    ...validPhasesSample,
  ];

  const phasesWithoutFocusSample: Array<EditablePhaseType> = [
    { ...phaseWithFocusSample, hasFocus: false },
    ...validPhasesWithoutFocusSample,
  ];

  const phasesWithOneNewPhaseSample: Array<EditablePhaseType> = [
    ...validPhasesSample,
    newPhase,
  ];

  const phasesWithNonNewPhaseSample: Array<EditablePhaseType> = [
    ...validPhasesSample,
    {
      name: 'Not new Phase',
      isNew: false,
    },
  ];

  const phasesWithAllPropsSample: Array<EditablePhaseType> = [
    {
      name: 'Phase 1',
      isNew: true,
      hasFocus: true,
      isEditable: false,
    },
    {
      name: 'Phase 2',
      isNew: false,
      hasFocus: false,
      isEditable: false,
    },
    {
      name: 'Phase 3',
      isNew: true,
      hasFocus: false,
      isEditable: false,
    },
    {
      name: 'Phase 4',
      isNew: true,
      hasFocus: false,
      isEditable: false,
    },
  ];

  const savedPhasesExample: Array<EditablePhaseType> = [
    {
      name: 'Phase 1',
      isNew: true,
    },
    {
      name: 'Phase 2',
      isNew: false,
    },
    {
      name: 'Phase 3',
      isNew: true,
    },
    {
      name: 'Phase 4',
      isNew: true,
    },
  ];

  const emptyPhaseSample: EditablePhaseType = {
    isEditable: true,
    isNew: true,
    hasFocus: true,
    name: '',
  };

  describe('isPhasesDataValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isPhasesDataValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isPhasesDataValid(undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(isPhasesDataValid(incorrectPhasesSample as never)).toBe(false);
    });
    it("should return false empty 'name' property is encountered", () => {
      expect(isPhasesDataValid(emptyNamePhasesSample as never)).toBe(false);
    });
    it('should return false if duplicate phase names exist', () => {
      expect(isPhasesDataValid(phasesWithDuplicateName)).toBe(false);
    });
    it("should return false if any 'name' property is not a string", () => {
      expect(isPhasesDataValid(invalidNameTypePhasesSample as never)).toBe(
        false
      );
    });
    it('should return true on correct data structure with values', () => {
      expect(isPhasesDataValid(validPhasesSample)).toBe(true);
    });
  });

  describe('checkIfValidPhasesStructure function', () => {
    it('should return false if null value passed as argument', () => {
      expect(checkIfValidPhasesStructure(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(checkIfValidPhasesStructure(undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(checkIfValidPhasesStructure(incorrectPhasesSample as never)).toBe(
        false
      );
    });
    it('should return false if phase if empty object', () => {
      expect(
        checkIfValidPhasesStructure(emptyPhaseObjectsSample as never)
      ).toBe(false);
    });
    it('should return true on correct data structure with values', () => {
      expect(checkIfValidPhasesStructure(validPhasesSample)).toBe(true);
    });
  });

  describe('checkIfDuplicateNamesExist function', () => {
    it('should return false if null value passed as argument', () => {
      expect(checkIfDuplicateNamesExist(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(checkIfDuplicateNamesExist(undefined)).toBe(false);
    });
    it('should return true if duplicate names exist', () => {
      expect(checkIfDuplicateNamesExist(phasesWithDuplicateName)).toBe(true);
    });
    it('should return false if NO duplicate names in valid array of phases', () => {
      expect(checkIfDuplicateNamesExist(validPhasesSample)).toBe(false);
    });
  });

  describe('checkIfNewPhasePresent function', () => {
    it('should return false if null value passed as argument', () => {
      expect(checkIfNewPhasePresent(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(checkIfNewPhasePresent(undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(checkIfNewPhasePresent(incorrectPhasesSample as never)).toBe(
        false
      );
    });
    it("should return true if new phase exist (with 'isNew' property set to true) in array of phases", () => {
      expect(checkIfNewPhasePresent(phasesWithOneNewPhaseSample)).toBe(true);
    });
    it("should return false if NO phases with 'isNew' property exist in array of phases", () => {
      expect(checkIfNewPhasePresent(validPhasesSample)).toBe(false);
    });
    it("should return false if NO phases with 'isNew' property exist OR 'isNew' is set to false", () => {
      expect(checkIfNewPhasePresent(phasesWithNonNewPhaseSample)).toBe(false);
    });
  });

  describe('getPhasesWithoutActiveFocus function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getPhasesWithoutActiveFocus(null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getPhasesWithoutActiveFocus(undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(getPhasesWithoutActiveFocus(incorrectPhasesSample as never)).toBe(
        null
      );
    });
    it("should return phases with all phases having 'hasFocus' property set to false", () => {
      expect(getPhasesWithoutActiveFocus(phasesWithFocusSample)).toMatchObject(
        phasesWithoutFocusSample
      );
    });
  });

  describe('getNewEmptyPhase function', () => {
    it('should return empty phase object', () => {
      expect(getNewEmptyPhase()).toStrictEqual(emptyPhaseSample);
    });
  });

  describe('getPhasesWithNewInsertedPhase function', () => {
    it('should return null if null value passed as arguments', () => {
      expect(getPhasesWithNewInsertedPhase(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as arguments', () => {
      expect(getPhasesWithNewInsertedPhase(undefined, undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(
        getPhasesWithNewInsertedPhase(incorrectPhasesSample as never, 2)
      ).toBe(null);
    });
    it('should return null if valid phases with index lower than zero passed in', () => {
      expect(getPhasesWithNewInsertedPhase(validPhasesSample, -2)).toBe(null);
    });
    it('should return null if valid phases with index as float number passed in', () => {
      expect(getPhasesWithNewInsertedPhase(validPhasesSample, 0.6)).toBe(null);
    });
    it('should return null if valid phases with index as string passed in', () => {
      expect(
        getPhasesWithNewInsertedPhase(validPhasesSample, '2' as never)
      ).toBe(null);
    });
    it('should return phases with new inserted phase in first place', () => {
      const expectedPhases = [
        emptyPhaseSample,
        ...validPhasesWithoutFocusSample,
      ];
      expect(getPhasesWithNewInsertedPhase(validPhasesSample, 0)).toStrictEqual(
        expectedPhases
      );
    });
    it('should return phases with new inserted phase in last place', () => {
      const expectedPhases = [
        ...validPhasesWithoutFocusSample,
        emptyPhaseSample,
      ];
      expect(
        getPhasesWithNewInsertedPhase(
          validPhasesSample,
          validPhasesSample.length
        )
      ).toStrictEqual(expectedPhases);
    });
    it('should return phases with new inserted phase at the specific position in the array', () => {
      const expectedPhases = [
        validPhasesWithoutFocusSample[0],
        validPhasesWithoutFocusSample[1],
        emptyPhaseSample,
        validPhasesWithoutFocusSample[2],
      ];
      expect(getPhasesWithNewInsertedPhase(validPhasesSample, 2)).toStrictEqual(
        expectedPhases
      );
    });
  });

  describe('getPhasesWithPhaseRemoved function', () => {
    it('should return null if null value passed as arguments', () => {
      expect(getPhasesWithPhaseRemoved(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as arguments', () => {
      expect(getPhasesWithPhaseRemoved(undefined, undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(getPhasesWithPhaseRemoved(incorrectPhasesSample as never, 2)).toBe(
        null
      );
    });
    it('should return null if valid phases with index lower than zero passed in', () => {
      expect(getPhasesWithPhaseRemoved(validPhasesSample, -2)).toBe(null);
    });
    it('should return null if valid phases with index as float number passed in', () => {
      expect(getPhasesWithPhaseRemoved(validPhasesSample, 0.6)).toBe(null);
    });
    it('should return null if valid phases with index as string passed in', () => {
      expect(getPhasesWithPhaseRemoved(validPhasesSample, '2' as never)).toBe(
        null
      );
    });
    it('should return phases with first phase removed', () => {
      const expectedPhases = [validPhasesSample[1], validPhasesSample[2]];
      expect(getPhasesWithPhaseRemoved(validPhasesSample, 0)).toStrictEqual(
        expectedPhases
      );
    });
    it('should return phases with last phase removed', () => {
      const expectedPhases = [validPhasesSample[0], validPhasesSample[1]];
      expect(
        getPhasesWithPhaseRemoved(
          validPhasesSample,
          validPhasesSample.length - 1
        )
      ).toStrictEqual(expectedPhases);
    });
    it('should return phases with phase, at the specific index, removed', () => {
      const expectedPhases = [validPhasesSample[0], validPhasesSample[2]];
      expect(getPhasesWithPhaseRemoved(validPhasesSample, 1)).toStrictEqual(
        expectedPhases
      );
    });
    it('should NOT remove any phase if index is equal or larger than array length', () => {
      expect(
        getPhasesWithPhaseRemoved(validPhasesSample, validPhasesSample.length)
      ).toStrictEqual(validPhasesSample);
    });
  });

  describe('getSavedPhases function', () => {
    it('should return null if null value passed as arguments', () => {
      expect(getSavedPhases(null)).toBe(null);
    });
    it('should return null if undefined value passed as arguments', () => {
      expect(getSavedPhases(undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(getSavedPhases(incorrectPhasesSample as never)).toBe(null);
    });
    it('should return saved phases data in correct format', () => {
      expect(getSavedPhases(phasesWithAllPropsSample)).toStrictEqual(
        savedPhasesExample
      );
    });
  });
});
