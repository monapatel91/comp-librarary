import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '../../testing-utils';
import Button from '@material-ui/core/Button';

import { DotSnackbar } from './DotSnackbar';
import { addAutoHideDuration } from './dotSnackbarHelper';
describe('DotSnackbar', () => {
  it('should render successfully', () => {
    expect.assertions(1);
    const { baseElement } = render(
      <DotSnackbar severity="success" open={true} onClose={jest.fn()}>
        Dot component message.
      </DotSnackbar>
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('should render "success" alert', () => {
    expect.assertions(1);
    render(
      <DotSnackbar severity="success" open={true} onClose={jest.fn()}>
        Dot component message.
      </DotSnackbar>
    );
    const element = screen.getByLabelText(/success/i);
    expect(element.getAttribute('aria-label')).toBe('success');
  });

  it('should render "info" alert', () => {
    expect.assertions(1);
    render(
      <DotSnackbar severity="info" open={true} onClose={jest.fn()}>
        Dot component message.
      </DotSnackbar>
    );
    const element = screen.getByLabelText(/info/i);
    expect(element.getAttribute('aria-label')).toBe('info');
  });
  it('should render "warning" alert', () => {
    expect.assertions(1);
    render(
      <DotSnackbar severity="warning" open={true} onClose={jest.fn()}>
        Dot component message.
      </DotSnackbar>
    );
    const element = screen.getByLabelText(/warning/i);
    expect(element.getAttribute('aria-label')).toBe('warning');
  });
  it('should render "error" alert', () => {
    expect.assertions(1);
    render(
      <DotSnackbar severity="error" open={true} onClose={jest.fn()}>
        Dot component message.
      </DotSnackbar>
    );
    const element = screen.getByLabelText(/error/i);
    expect(element.getAttribute('aria-label')).toBe('error');
  });
  it('should not show a close button if a function is not passed', () => {
    expect.assertions(1);
    render(
      <DotSnackbar severity="error" open={true} onClose={undefined}>
        Dot component message.
      </DotSnackbar>
    );
    expect(screen.queryByLabelText(/close/i)).toBeNull();
  });
  it('should show a close button if no action object is passed', () => {
    expect.assertions(1);
    render(
      <DotSnackbar severity="error" open={true} onClose={jest.fn()}>
        Dot component message.
      </DotSnackbar>
    );
    expect(screen.queryByLabelText(/close/i)).toBeInTheDocument();
  });
  it('should show an action button when one is passed', () => {
    expect.assertions(1);
    render(
      <DotSnackbar
        action={<Button>Undo</Button>}
        severity="error"
        open={true}
        onClose={undefined}
      >
        Dot component message.
      </DotSnackbar>
    );
    expect(screen.getByText(/undo/i)).toBeInTheDocument();
  });
  it('should trigger an onClick event when the button is clicked', () => {
    expect.assertions(1);
    const handleClick = jest.fn();
    render(
      <DotSnackbar
        action={<Button onClick={handleClick}>Undo</Button>}
        severity="error"
        open={true}
        onClose={undefined}
      >
        Dot component message.
      </DotSnackbar>
    );
    fireEvent.click(screen.getByText(/undo/i));
    expect(handleClick).toBeCalledTimes(1);
  });

  it('should return 10000 milliseconds if the severity level is not an error', () => {
    expect.assertions(3);
    ['level', 'info', 'warning'].forEach((value) => {
      expect(addAutoHideDuration(value)).toBe(10000);
    });
  });
  it('should return null if the severity level is an "error"', () => {
    expect.assertions(1);
    expect(addAutoHideDuration('error')).toBeNull();
  });
});
