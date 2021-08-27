import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '../../testing-utils';
import { DotInlineEdit } from './InlineEdit';

const inlineEditName = 'inline-edit-wrapper';

describe('DotInlineEdit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotInlineEdit name="test" required={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('unable to edit while disabled', () => {
    render(<DotInlineEdit name="test" required={false} disabled={true} />);
    const editDiv = screen.getByTestId(inlineEditName);

    userEvent.hover(editDiv);
    expect(editDiv).toBeVisible();
    expect(editDiv).toHaveClass('disabled');

    userEvent.click(editDiv);
    expect(editDiv).not.toHaveClass('editing');
  });

  it('can edit then cancel', () => {
    const originalValue = 'test';

    render(
      <DotInlineEdit
        name={originalValue}
        value={originalValue}
        required={false}
        data-testid="test_field"
      />
    );

    const editDiv = screen.getByTestId(inlineEditName);
    const textField = screen.getByTestId('test_field');
    expect(editDiv).toBeVisible();

    userEvent.click(textField);
    expect(textField).toHaveValue(originalValue);

    userEvent.type(textField, 'batman sucks');

    const cancelButton = screen.getByTestId('inline-edit-cancel');
    userEvent.click(cancelButton);

    expect(textField).toHaveValue(originalValue);
  });

  it('can edit then confirm', () => {
    const originalValue = 'batman';

    render(
      <DotInlineEdit
        name="test"
        value={originalValue}
        required={false}
        data-testid="test_field"
      />
    );

    const editDiv = screen.getByTestId(inlineEditName);
    const textField = screen.getByTestId('test_field');
    expect(editDiv).toBeVisible();

    userEvent.click(editDiv);
    userEvent.click(textField);
    expect(textField).toHaveValue(originalValue);

    const newValue = ", says what doesn't kill us will make us stronger";
    userEvent.type(textField, newValue);

    const confirmButton = screen.getByTestId('inline-edit-confirm');
    userEvent.click(confirmButton);

    expect(textField).toHaveValue(originalValue + newValue);
  });

  it('can edit then hit escape to cancel', () => {
    const originalValue = 'test';
    const onEditStageChange = jest.fn();

    render(
      <DotInlineEdit
        name={originalValue}
        value={originalValue}
        required={false}
        data-testid="test_field"
        onEditStateChange={onEditStageChange}
      />
    );

    const textField = screen.getByTestId('test_field');
    userEvent.click(textField);
    expect(textField).toHaveValue(originalValue);
    userEvent.type(textField, 'batman has emotional issues');

    fireEvent.keyDown(textField, { key: 'Escape', code: 27 });
    expect(textField).toHaveValue(originalValue);
    expect(onEditStageChange).toHaveBeenCalledTimes(3);
  });

  it('can edit then hit enter to confirm', async () => {
    const originalValue = 'batman';
    const onLabelChange = jest.fn();
    const onEditStageChange = jest.fn();

    render(
      <DotInlineEdit
        name={originalValue}
        value={originalValue}
        required={false}
        onLabelChange={onLabelChange}
        onEditStateChange={onEditStageChange}
        data-testid="test_field"
      />
    );

    const editDiv = screen.getByTestId(inlineEditName);
    expect(editDiv).toBeVisible();
    userEvent.click(editDiv);

    const textField = screen.getByTestId('test_field');
    userEvent.click(textField);
    expect(textField).toHaveValue(originalValue);

    const newValue = ' and iron man are the same character? ';
    userEvent.type(textField, newValue);

    fireEvent.keyDown(textField, { key: 'Enter', code: 13 });

    await waitFor(() => {
      expect(textField).toHaveValue(originalValue + newValue);
      expect(onLabelChange).toHaveBeenCalledTimes(1);
      expect(onEditStageChange).toHaveBeenCalledTimes(2);
    });
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    render(
      <DotInlineEdit
        ariaLabel={ariaLabel}
        name="inline-edit"
        required={false}
      />
    );
    const inlineEditElement = screen.getByTestId(inlineEditName);
    expect(inlineEditElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
