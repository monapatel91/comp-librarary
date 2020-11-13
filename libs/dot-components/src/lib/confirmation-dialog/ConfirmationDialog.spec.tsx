import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DotConfirmationDialog } from './ConfirmationDialog';

describe('DotConfirmationDialog', () => {
  const cancelFunc = () => {
    console.log('Cancelled');
  };
  const confirmFunc = () => console.log('Submitted');

  it('should render successfully', () => {
    const { baseElement } = render(<DotConfirmationDialog showDialog={true} />);

    expect(baseElement).toBeTruthy();
  });

  it('should render the cancel button successfully', () => {
    render(<DotConfirmationDialog title="Dialog Title" showDialog={true} />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeVisible();
  });

  it('should render the ok button successfully', () => {
    render(<DotConfirmationDialog title="Dialog Title" showDialog={true} />);

    expect(screen.getByRole('button', { name: /ok/i })).toBeVisible();
  });

  it('should execute onCancel when the cancel button is clicked', () => {
    const cancelMock = jest.fn();
    render(
      <DotConfirmationDialog
        title="Dialog Title"
        showDialog={true}
        onCancel={cancelMock}
        onConfirm={confirmFunc}
      />
    );

    userEvent.click(screen.getByRole('button', { name: /cancel/i }));
    expect(cancelMock).toHaveBeenCalledTimes(1);
  });

  it('should execute onCancel when the escape key is clicked', () => {
    const cancelMock = jest.fn();
    render(
      <DotConfirmationDialog
        title="Dialog Title"
        showDialog={true}
        onCancel={cancelMock}
        onConfirm={confirmFunc}
      />
    );

    userEvent.type(screen.getByRole('button', { name: /ok/i }), '{esc}');
    expect(cancelMock).toHaveBeenCalledTimes(1);
  });

  it('should execute onConfirm when the submit button is clicked', () => {
    const submitMock = jest.fn();
    render(
      <DotConfirmationDialog
        title="Dialog Title"
        showDialog={true}
        onCancel={cancelFunc}
        onConfirm={submitMock}
      />
    );

    userEvent.click(screen.getByRole('button', { name: /ok/i }));
    expect(submitMock).toHaveBeenCalledTimes(1);
  });

  it('message text should render successfully', () => {
    render(
      <DotConfirmationDialog
        title="Dialog Title"
        message="Hello World"
        showDialog={true}
        onCancel={cancelFunc}
        onConfirm={confirmFunc}
      />
    );

    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  it('title should display as expected', () => {
    render(
      <DotConfirmationDialog
        title="Dialog Title"
        showDialog={true}
        onCancel={cancelFunc}
        onConfirm={confirmFunc}
      />
    );

    expect(screen.getByText('Dialog Title')).toBeTruthy();
  });

  it('default title should display as expected', () => {
    render(
      <DotConfirmationDialog
        title="Please confirm"
        showDialog={true}
        onCancel={cancelFunc}
        onConfirm={confirmFunc}
      />
    );

    expect(screen.getByText('Please confirm')).toBeTruthy();
  });
});
