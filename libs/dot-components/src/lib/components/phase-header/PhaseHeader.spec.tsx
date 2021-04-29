import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '../../testing-utils';
import { DotPhaseHeader } from './PhaseHeader';

describe('PhaseHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotPhaseHeader label="Test Label" />);
    expect(baseElement).toBeTruthy();
  });

  it('display delete button', () => {
    render(<DotPhaseHeader label="Delete Label" canDelete={true} />);
    const deleteButton = screen.getByTestId('phase-icon-delete-0');
    expect(deleteButton).toBeTruthy();
  });

  it('display edit button and popup', () => {
    render(<DotPhaseHeader label="Edit Label" canEdit={true} />);
    const editButton = screen.getByTestId('phase-header-color-picker');
    expect(editButton).toBeTruthy();

    userEvent.click(editButton);
    const presentation = screen.getByRole('presentation');
    expect(presentation).toBeVisible();
  });

  it('display popup and select option', () => {
    const categoryChange = jest.fn();
    render(
      <DotPhaseHeader
        label="Edit Label"
        canEdit={true}
        canDelete={true}
        onCategoryChange={categoryChange}
      />
    );

    const colorPicker = screen.getByTestId('phase-header-color-picker');
    userEvent.click(colorPicker);

    const presentation = screen.getByRole('presentation');
    expect(presentation).toBeVisible();

    const menuSelection = 'build';

    const buildSelection = screen.getByRole('menuitem', {
      name: menuSelection,
    });
    expect(buildSelection).toBeVisible();
    userEvent.click(buildSelection);

    expect(colorPicker).toHaveClass(menuSelection);
    expect(categoryChange).toHaveBeenCalledTimes(1);
  });

  it('display label changes buttons and fires edits', () => {
    const labelChange = jest.fn();
    render(
      <DotPhaseHeader
        label="Edit Label"
        canEdit={true}
        canDelete={true}
        onLabelChange={labelChange}
      />
    );

    const textField = screen.getByTestId('inline-edit-wrapper');
    userEvent.click(textField);
    fireEvent.keyDown(textField, { key: 'Enter', code: 13 });
    expect(labelChange).toHaveBeenCalledTimes(1);
  });

  it('display delete dialog, then delete', () => {
    const deleteFunction = jest.fn();
    render(
      <DotPhaseHeader
        label="Delete Label"
        canDelete={true}
        onDelete={deleteFunction}
      />
    );
    const deleteButton = screen.getByTestId('phase-icon-delete-0');
    expect(deleteButton).toBeTruthy();
    userEvent.click(deleteButton);

    const deleteDialog = screen.getByTestId('phase-header-delete-dialog-0');
    expect(deleteDialog).toBeVisible();

    const deleteConfirmButton = screen.getByRole('button', {
      name: /delete phase/i,
    });
    userEvent.click(deleteConfirmButton);
    expect(deleteFunction).toBeCalledTimes(1);
  });

  it('display delete dialog, then cancel', () => {
    const deleteFunction = jest.fn();
    render(
      <DotPhaseHeader
        label="Delete Label"
        canDelete={true}
        onDelete={deleteFunction}
      />
    );
    const deleteButton = screen.getByTestId('phase-icon-delete-0');
    expect(deleteButton).toBeTruthy();
    userEvent.click(deleteButton);

    const deleteDialog = screen.getByTestId('phase-header-delete-dialog-0');
    expect(deleteDialog).toBeVisible();

    const deleteCancelButton = screen.getByRole('button', {
      name: /cancel/i,
    });
    userEvent.click(deleteCancelButton);
    expect(deleteFunction).toBeCalledTimes(0);
  });
});
