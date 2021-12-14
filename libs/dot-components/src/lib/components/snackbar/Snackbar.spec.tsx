import React, { ReactNode } from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '../../testing-utils';
import Button from '@material-ui/core/Button';

import { DotSnackbar, SnackbarProps, SnackbarSeverity } from './Snackbar';
import { addAutoHideDuration } from './SnackbarHelper';

describe('DotSnackbar', () => {
  it('should have unchanged API', () => {
    const props = {
      action: null as ReactNode,
      ariaLabel: 'my snackbar label',
      children: null as ReactNode,
      className: 'test-class',
      'data-testid': 'testid',
      onClose: jest.fn(),
      open: false,
      severity: 'error' as SnackbarSeverity,
      width: '280',
    };
    const snackbarProps: SnackbarProps = props;
    expect(snackbarProps).toEqual(props);
  });

  it('should render successfully', () => {
    expect.assertions(1);
    const { baseElement } = render(
      <DotSnackbar onClose={jest.fn()} open={true} severity="success">
        Dot component message.
      </DotSnackbar>
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('should render "success" alert', () => {
    expect.assertions(1);
    render(
      <DotSnackbar onClose={jest.fn()} open={true} severity="success">
        Dot component message.
      </DotSnackbar>
    );
    const element = screen.getByLabelText(/success/i);
    expect(element.getAttribute('aria-label')).toBe('success');
  });

  it('should render "info" alert', () => {
    expect.assertions(1);
    render(
      <DotSnackbar onClose={jest.fn()} open={true} severity="info">
        Dot component message.
      </DotSnackbar>
    );
    const element = screen.getByLabelText(/info/i);
    expect(element.getAttribute('aria-label')).toBe('info');
  });
  it('should render "warning" alert', () => {
    expect.assertions(1);
    render(
      <DotSnackbar onClose={jest.fn()} open={true} severity="warning">
        Dot component message.
      </DotSnackbar>
    );
    const element = screen.getByLabelText(/warning/i);
    expect(element.getAttribute('aria-label')).toBe('warning');
  });
  it('should render "error" alert', () => {
    expect.assertions(1);
    render(
      <DotSnackbar onClose={jest.fn()} open={true} severity="error">
        Dot component message.
      </DotSnackbar>
    );
    const element = screen.getByLabelText(/error/i);
    expect(element.getAttribute('aria-label')).toBe('error');
  });
  it('should not show a close button if a function is not passed', () => {
    expect.assertions(1);
    render(
      <DotSnackbar onClose={undefined} open={true} severity="error">
        Dot component message.
      </DotSnackbar>
    );
    expect(screen.queryByLabelText(/close/i)).toBeNull();
  });
  it('should show a close button if no action object is passed', () => {
    expect.assertions(1);
    render(
      <DotSnackbar onClose={jest.fn()} open={true} severity="error">
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
        onClose={undefined}
        open={true}
        severity="error"
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
        onClose={undefined}
        open={true}
        severity="error"
      >
        Dot component message.
      </DotSnackbar>
    );
    fireEvent.click(screen.getByText(/undo/i));
    expect(handleClick).toBeCalledTimes(1);
  });

  it('should return 10000 milliseconds if the severity level is not an error', () => {
    expect.assertions(3);
    ['level', 'info', 'warning'].forEach((value: SnackbarSeverity) => {
      expect(addAutoHideDuration(value)).toBe(10000);
    });
  });
  it('should return null if the severity level is an "error"', () => {
    expect.assertions(1);
    expect(addAutoHideDuration('error')).toBeNull();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-snackbar';
    render(
      <DotSnackbar
        ariaLabel={ariaLabel}
        data-testid={dataTestId}
        open={true}
        severity="error"
      >
        Dot component message.
      </DotSnackbar>
    );
    const snackbarElement = screen.getByTestId(dataTestId);
    expect(snackbarElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
