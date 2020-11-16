import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DotRow } from './Row';

const testText = 'hello world';

describe(' Row', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotRow displayText={testText} />);
    expect(baseElement).toBeTruthy();
  });

  it('should display buttons when enabled', () => {
    render(<DotRow displayText={testText} canEdit={true} canDelete={true} />);

    expect(screen.getByRole('button', { name: /edit/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /delete/i })).toBeVisible();
  });

  it('should allow me to click the edit button when enabled', () => {
    const onEdit = jest.fn();
    render(<DotRow displayText={testText} canEdit={true} onEdit={onEdit} />);

    const editButton = screen.getByRole('button', { name: /edit/i });

    userEvent.click(editButton);
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  it('should allow me to click the delete button when enabled', () => {
    const onDelete = jest.fn();
    render(
      <DotRow displayText={testText} canDelete={true} onDelete={onDelete} />
    );

    const openDeleteButton = screen.getByRole('button', {
      name: 'Delete',
    });
    userEvent.click(openDeleteButton);

    const dialog = screen.getByRole('dialog');
    const confirmButton = screen.getByRole('button', { name: 'Confirm' });
    userEvent.click(confirmButton);
    expect(dialog).not.toBeVisible();
  });

  it('should display icon when enabled', () => {
    render(<DotRow displayText={testText} iconId="work_outline" />);

    expect(screen.getByTestId('icon')).toBeTruthy();
  });
});
