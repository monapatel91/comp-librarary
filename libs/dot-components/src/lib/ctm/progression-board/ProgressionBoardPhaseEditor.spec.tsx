import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '../../testing-utils';
import {
  DotProgressionBoardPhaseEditor,
  PBPhaseEditorProps,
} from './ProgressionBoardPhaseEditor';
import { EditablePhaseType } from './ProgressionBoardInterfaces';

describe('ProgressionBoardPhaseEditor', () => {
  const dataTestId = 'test-pb-phase-editor';

  const getEditablePhaseElems = (): Array<HTMLElement> =>
    screen.queryAllByTestId(`${dataTestId}-editable-phase`);

  const getSaveButtonElem = (): HTMLElement =>
    screen.getByRole('button', { name: /save/i });

  const getCancelButtonElem = (): HTMLElement =>
    screen.getByRole('button', { name: /cancel/i });

  const getAddPhaseButtonElems = (): Array<HTMLElement> =>
    screen.getAllByTestId(`${dataTestId}-add-phase`);

  const cancelEdit = (): void => userEvent.click(getCancelButtonElem());

  const addNewPhase = (index: number): HTMLElement => {
    userEvent.click(getAddPhaseButtonElems()[index]);
    return getEditablePhaseElems()[index];
  };

  const getTextboxFromPhase = (phaseElem: HTMLElement): HTMLElement =>
    within(phaseElem).getByRole('textbox');

  const getDeleteBtnFromPhase = (phaseElem: HTMLElement): HTMLElement =>
    within(phaseElem).getByRole('button');

  const onCancel = jest.fn();

  const onSave = jest.fn();

  const renderPBPhaseEditor = ({
    editablePhases,
    onCancel,
    onSave,
  }: PBPhaseEditorProps): void => {
    render(
      <DotProgressionBoardPhaseEditor
        data-testid={dataTestId}
        editablePhases={editablePhases}
        onCancel={onCancel}
        onSave={onSave}
      />
    );
  };

  const expectNumberOfPhases = (numberOfPhases: number): void => {
    const phasesElems = getEditablePhaseElems();
    expect(phasesElems).toHaveLength(numberOfPhases);
  };

  const expectNumberOfAddButtons = (numberOfButtons: number): void => {
    const btnElems = getAddPhaseButtonElems();
    expect(btnElems).toHaveLength(numberOfButtons);
  };

  const expectTextboxWithinPhase = (
    phaseElem: HTMLElement,
    shouldBePresent = true,
    shouldHaveFocus = false
  ) => {
    if (shouldBePresent) {
      const textboxElem = within(phaseElem).getByRole('textbox');
      expect(textboxElem).toBeVisible();
      shouldHaveFocus && expect(textboxElem).toHaveFocus();
    } else {
      expect(within(phaseElem).queryByRole('textbox')).not.toBeInTheDocument();
    }
  };

  const assertNewPhaseOnPosition = (
    position: number,
    expectedPhases: number
  ): void => {
    addNewPhase(position);
    const phasesElems = getEditablePhaseElems();
    expect(phasesElems).toHaveLength(expectedPhases);
    expectNumberOfAddButtons(expectedPhases + 1);
    expect(within(phasesElems[position]).getByRole('textbox'));
  };

  const phasesSample: Array<EditablePhaseType> = [
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

  const props: PBPhaseEditorProps = {
    editablePhases: phasesSample,
    onCancel,
    onSave,
  };

  describe('with existing phases', () => {
    beforeEach(() => {
      renderPBPhaseEditor(props);
    });

    it('should render successfully', () => {
      expect(screen).toBeTruthy();
    });

    it('should render correct number of phase components', () => {
      expectNumberOfPhases(phasesSample.length);
    });

    it("should render 'Cancel' and 'Save' buttons with 'Save' button being disabled", () => {
      const cancelBtnElem = getCancelButtonElem();
      const saveBtnElem = getSaveButtonElem();
      expect(cancelBtnElem).toBeVisible();
      expect(cancelBtnElem).toBeEnabled();
      expect(saveBtnElem).toBeVisible();
      expect(saveBtnElem).toBeDisabled();
    });

    it("should call correct event handler on 'Cancel' button click", () => {
      cancelEdit();
      expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('should display phases count + 1 buttons for adding new phases', () => {
      expectNumberOfAddButtons(phasesSample.length + 1);
    });

    it("should add new phase on the first place when first 'plus' button is clicked", () => {
      assertNewPhaseOnPosition(0, phasesSample.length + 1);
    });

    it("should add new phase on the last place when last 'plus' button is clicked", () => {
      assertNewPhaseOnPosition(phasesSample.length, phasesSample.length + 1);
    });

    it("should add new phase on the correct place when 'plus' button (on given position) is clicked", () => {
      assertNewPhaseOnPosition(2, phasesSample.length + 1);
    });

    it("should enable 'Save' button when new phase is added and name is valid", () => {
      const phaseName = 'Test123';
      const newPhaseElem = addNewPhase(0);
      const saveBtnElem = getSaveButtonElem();
      userEvent.type(getTextboxFromPhase(newPhaseElem), phaseName);
      expect(saveBtnElem).toBeEnabled();
      userEvent.click(saveBtnElem);
      expect(onSave).toHaveBeenCalledTimes(1);
    });

    it('should remove new phase by clicking on trash icon button', () => {
      const newPhaseElem = addNewPhase(1);
      expectNumberOfPhases(phasesSample.length + 1);
      userEvent.click(getDeleteBtnFromPhase(newPhaseElem));
      expectNumberOfPhases(phasesSample.length);
      expect(newPhaseElem).not.toBeInTheDocument();
    });
  });

  describe('without phases', () => {
    beforeEach(() => {
      renderPBPhaseEditor({
        ...props,
        editablePhases: [],
      });
    });

    it('should render successfully', () => {
      expect(screen).toBeTruthy();
    });

    it('should render one nameless, focused and editable phase', () => {
      expectNumberOfPhases(1);
      const phases = getEditablePhaseElems();
      expectTextboxWithinPhase(phases[0], true, true);
    });

    it("should render two 'add phase' icon buttons", () => {
      expectNumberOfAddButtons(2);
    });
  });
});
