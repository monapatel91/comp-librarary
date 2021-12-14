import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import { DotConfirmationDialog } from './ConfirmationDialog';

describe('DotConfirmationDialog', () => {
  const cancelFunc = () => {
    console.log('Cancelled');
  };
  const confirmFunc = () => console.log('Submitted');

  it('should render successfully', () => {
    const { baseElement } = render(<DotConfirmationDialog open={true} />);

    expect(baseElement).toBeTruthy();
  });

  it('should render the cancel button successfully', () => {
    render(<DotConfirmationDialog open={true} title="Dialog Title" />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeVisible();
  });

  it('should render the ok button successfully', () => {
    render(<DotConfirmationDialog open={true} title="Dialog Title" />);

    expect(screen.getByRole('button', { name: /ok/i })).toBeVisible();
  });

  it('should execute onCancel when the cancel button is clicked', () => {
    const cancelMock = jest.fn();
    render(
      <DotConfirmationDialog
        onCancel={cancelMock}
        onSubmit={confirmFunc}
        open={true}
        title="Dialog Title"
      />
    );

    userEvent.click(screen.getByRole('button', { name: /cancel/i }));
    expect(cancelMock).toHaveBeenCalledTimes(1);
  });

  it('should execute onCancel when the escape key is clicked', () => {
    const cancelMock = jest.fn();
    render(
      <DotConfirmationDialog
        onCancel={cancelMock}
        onSubmit={confirmFunc}
        open={true}
        title="Dialog Title"
      />
    );

    userEvent.type(screen.getByText('Dialog Title'), '{esc}');
    expect(cancelMock).toHaveBeenCalledTimes(1);
  });

  it('should execute onSubmit when the submit button is clicked', () => {
    const submitMock = jest.fn();
    render(
      <DotConfirmationDialog
        onCancel={cancelFunc}
        onSubmit={submitMock}
        open={true}
        title="Dialog Title"
      />
    );

    userEvent.click(screen.getByRole('button', { name: /ok/i }));
    expect(submitMock).toHaveBeenCalledTimes(1);
  });

  it('message text should render successfully', () => {
    render(
      <DotConfirmationDialog
        message="Hello World"
        onCancel={cancelFunc}
        onSubmit={confirmFunc}
        open={true}
        title="Dialog Title"
      />
    );

    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  it('title should display as expected', () => {
    render(
      <DotConfirmationDialog
        onCancel={cancelFunc}
        onSubmit={confirmFunc}
        open={true}
        title="Dialog Title"
      />
    );

    expect(screen.getByText('Dialog Title')).toBeTruthy();
  });

  it('default title should display as expected', () => {
    render(
      <DotConfirmationDialog
        onCancel={cancelFunc}
        onSubmit={confirmFunc}
        open={true}
        title="Please confirm"
      />
    );

    expect(screen.getByText('Please confirm')).toBeTruthy();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-confirmation-dialog';
    render(
      <DotConfirmationDialog
        ariaLabel={ariaLabel}
        data-testid={dataTestId}
        open={true}
      />
    );
    const confirmationDialogElement = screen.getByTestId(dataTestId);
    expect(confirmationDialogElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
