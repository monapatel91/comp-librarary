import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '../../testing-utils';
import { EditablePhase, EditablePhaseProps } from './EditablePhase';

describe('EditablePhase', () => {
  const dataTestId = 'test-editable-phase';

  const getDeleteButtonElem = (): HTMLElement =>
    screen.queryByTestId(`${dataTestId}-delete-btn`);

  const getPhaseNameElem = (phaseName: string): HTMLElement =>
    screen.getByText(phaseName, { exact: true });

  const getPhaseNameInputElem = (): HTMLElement =>
    screen.queryByTestId(`${dataTestId}-name-input`);

  const onPhaseDelete = jest.fn();

  const onPhaseChange = jest.fn();

  const props = {
    hasFocus: false,
    isEditable: false,
    isNew: false,
    name: 'My editable phase',
    onPhaseChange: onPhaseChange,
    onPhaseDelete: onPhaseDelete,
    position: 0,
  };

  const renderEditablePhase = ({
    hasFocus,
    isEditable,
    isNew,
    name,
    onPhaseChange,
    onPhaseDelete,
    position,
  }: EditablePhaseProps) => {
    render(
      <EditablePhase
        data-testid={dataTestId}
        hasFocus={hasFocus}
        isEditable={isEditable}
        isNew={isNew}
        name={name}
        onPhaseChange={onPhaseChange}
        onPhaseDelete={onPhaseDelete}
        position={position}
      />
    );
  };

  describe('existing, non-editable phase', () => {
    beforeEach(() => {
      renderEditablePhase(props);
    });

    it('should render successfully', () => {
      expect(screen).toBeTruthy();
    });

    it('should display phase name', () => {
      expect(getPhaseNameElem(props.name)).toBeVisible();
    });

    it('should NOT display phase name input', () => {
      expect(getPhaseNameInputElem()).not.toBeInTheDocument();
    });

    it('should NOT display delete button', () => {
      expect(getDeleteButtonElem()).not.toBeInTheDocument();
    });
  });

  describe('new editable phase', () => {
    beforeEach(() => {
      renderEditablePhase({
        ...props,
        isNew: true,
        isEditable: true,
      });
    });

    it('should render successfully', () => {
      expect(screen).toBeTruthy();
    });

    it('should display input textbox with phase name', () => {
      const inputElem = getPhaseNameInputElem();
      expect(inputElem).toBeVisible();
      expect(inputElem).toHaveValue(props.name);
    });

    it('should fire change event when typing into input textbox', () => {
      const inputElem = getPhaseNameInputElem();
      const typedString = 'Change';
      userEvent.type(inputElem, typedString);
      expect(onPhaseChange).toHaveBeenCalledTimes(typedString.length);
    });

    it('should display delete button', () => {
      const deleteBtnElem = getDeleteButtonElem();
      expect(deleteBtnElem).toBeVisible();
      expect(deleteBtnElem).toBeEnabled();
    });

    it('should dispatch delete action upon delete button click', () => {
      const deleteBtnElem = getDeleteButtonElem();
      userEvent.click(deleteBtnElem);
      expect(onPhaseDelete).toHaveBeenCalledTimes(1);
    });
  });
});
