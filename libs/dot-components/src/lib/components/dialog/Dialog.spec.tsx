import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DotDialog } from './../dialog/Dialog';

describe('DotDialog', () => {
  const cancelFunc = () => {
    console.log('Cancelled');
  };
  const submitFunc = () => console.log('Submitted');

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotDialog
        title="Dialog Title"
        open={true}
        onCancel={cancelFunc}
        onSubmit={submitFunc}
      >
        <p>Hello World</p>
      </DotDialog>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render the cancel button successfully', () => {
    render(
      <DotDialog
        title="Dialog Title"
        open={true}
        onCancel={cancelFunc}
        onSubmit={submitFunc}
      >
        <p>Hello World</p>
      </DotDialog>
    );

    expect(screen.getByRole('button', { name: /cancel/i })).toBeVisible();
  });

  it('should render the add button successfully', () => {
    render(
      <DotDialog
        title="Dialog Title"
        open={true}
        onCancel={cancelFunc}
        onSubmit={submitFunc}
      >
        <p>Hello World</p>
      </DotDialog>
    );

    expect(screen.getByRole('button', { name: /ok/i })).toBeVisible();
  });

  it('should execute onCancel when the cancel button is clicked', () => {
    const cancelMock = jest.fn();
    render(
      <DotDialog
        title="Dialog Title"
        open={true}
        onCancel={cancelMock}
        onSubmit={submitFunc}
      >
        <p>Hello World</p>
      </DotDialog>
    );

    userEvent.click(screen.getByRole('button', { name: /cancel/i }));
    expect(cancelMock).toHaveBeenCalledTimes(1);
  });

  it('should execute onCancel when the escape key is pressed', () => {
    const cancelMock = jest.fn();
    render(
      <DotDialog
        title="Dialog Title"
        open={true}
        onCancel={cancelMock}
        onSubmit={submitFunc}
      >
        <p>Hello World</p>
      </DotDialog>
    );

    userEvent.type(screen.getByRole('button', { name: /ok/i }), '{esc}');
    expect(cancelMock).toHaveBeenCalledTimes(1);
  });

  it('should execute onSubmit when the add button is clicked', () => {
    const submitMock = jest.fn();
    render(
      <DotDialog
        title="Dialog Title"
        open={true}
        onCancel={cancelFunc}
        onSubmit={submitMock}
      >
        <p>Hello World</p>
      </DotDialog>
    );

    userEvent.click(screen.getByRole('button', { name: /ok/i }));
    expect(submitMock).toHaveBeenCalledTimes(1);
  });

  it('should execute onSubmit when the enter key is pressed', () => {
    const submitMock = jest.fn();
    render(
      <DotDialog
        title="Dialog Title"
        open={true}
        onCancel={cancelFunc}
        onSubmit={submitMock}
      >
        <p>Hello World</p>
        <input name="text" type="text" />
      </DotDialog>
    );

    userEvent.type(screen.getByRole('textbox'), '{space}');
    expect(submitMock).toHaveBeenCalledTimes(0);

    userEvent.type(screen.getByRole('textbox'), '{enter}');
    expect(submitMock).toHaveBeenCalledTimes(1);
  });

  it('children should render successfully', () => {
    render(
      <DotDialog
        title="Dialog Title"
        open={true}
        onCancel={cancelFunc}
        onSubmit={submitFunc}
      >
        <p>Hello World</p>
      </DotDialog>
    );

    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  it('title should display as expected', () => {
    render(
      <DotDialog
        title="Dialog Title"
        open={true}
        onCancel={cancelFunc}
        onSubmit={submitFunc}
      >
        <p>Hello World</p>
      </DotDialog>
    );

    expect(screen.getByText('Dialog Title')).toBeTruthy();
  });
});
