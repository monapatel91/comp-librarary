import React from 'react';
import { fireEvent, render, screen } from '../../testing-utils';
import { DotAlertBanner, AlertBannerProps } from './AlertBanner';
import { DotButton } from '../button/Button';

const onClose = jest.fn();

describe('AlertBanner', () => {
    it('should have unchanged API', () => {
    const props = {
      action: <DotButton type="text">Dismiss</DotButton>,
      children: 'Test Alert banner',
      className: 'dot-alert-banner',
      'data-testid': 'dot-AlertBanner',
      onClose: onClose || null,
      severity: 'success',
    };
    const alertBannerProps: AlertBannerProps = {
      action: <DotButton type="text">Dismiss</DotButton>,
      children: 'Test Alert banner',
      className: 'dot-alert-banner',
      'data-testid': 'dot-AlertBanner',
      onClose:  onClose || null,
      severity: 'success',
    };
    expect(alertBannerProps).toEqual(props);
  });
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotAlertBanner severity="success">
        Test Alert Banner
      </DotAlertBanner>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should show a close button if no action object is passed', () => {
    expect.assertions(1);
    render(
      <DotAlertBanner severity="error" onClose={onClose}>
        Test Alert Banner
      </DotAlertBanner>
    );
    expect(screen.queryByLabelText(/close/i)).toBeInTheDocument();
  });
  it('should show an action button when one is passed', () => {
    expect.assertions(1);
    render(
      <DotAlertBanner
        action={<DotButton type="text">Dismiss</DotButton>}
        severity="error"
      >
        Test Alert Banner
      </DotAlertBanner>
    );
    expect(screen.getByText(/dismiss/i)).toBeInTheDocument();
  });
  it('should trigger an onClick event when the button is clicked', () => {
    expect.assertions(1);
    const handleClick = jest.fn();
    render(
      <DotAlertBanner
        action={<DotButton onClick={handleClick}>Undo</DotButton>}
        severity="error"
      >
        Test Alert Banner
      </DotAlertBanner>
    );
    fireEvent.click(screen.getByText(/undo/i));
    expect(handleClick).toBeCalledTimes(1);
  });
});

