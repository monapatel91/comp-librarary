import React from 'react';
import { fireEvent, render, screen } from '../../testing-utils';
import {
  DotAlertBanner,
  AlertBannerProps,
  AlertBannerSeverity,
} from './AlertBanner';
import { DotButton } from '../button/Button';
import { TypographyVariant } from '../typography/Typography';

const onClose = jest.fn();

describe('AlertBanner', () => {
  it('should have unchanged API', () => {
    const props = {
      action: <DotButton type="text">Dismiss</DotButton>,
      ariaLabel: 'my avatar group',
      children: 'Test Alert banner',
      className: 'dot-alert-banner',
      'data-testid': 'dot-AlertBanner',
      onClose: onClose || null,
      severity: 'success' as AlertBannerSeverity,
      textVariant: 'body1' as TypographyVariant,
    };
    const alertBannerProps: AlertBannerProps = props;
    expect(alertBannerProps).toEqual(props);
  });
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotAlertBanner severity="success">Test Alert Banner</DotAlertBanner>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should show a close button if no action object is passed', () => {
    render(
      <DotAlertBanner onClose={onClose} severity="error">
        Test Alert Banner
      </DotAlertBanner>
    );
    expect(screen.queryByLabelText(/close/i)).toBeInTheDocument();
  });
  it('should show an action button when one is passed', () => {
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

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-alert-banner';
    render(
      <DotAlertBanner
        ariaLabel={ariaLabel}
        data-testid={dataTestId}
        severity="error"
      >
        Test Alert Banner
      </DotAlertBanner>
    );
    const alertBannerElement = screen.getByTestId(dataTestId);
    expect(alertBannerElement).toHaveAttribute('aria-label', ariaLabel);
  });

  it('should render children inside of a paragraph tag if value of children is pure string', () => {
    const childrenAsString = 'Test Alert Banner';
    const dataTestId = 'test-alert-banner';
    render(
      <DotAlertBanner data-testid={dataTestId} severity="success">
        {childrenAsString}
      </DotAlertBanner>
    );
    const element = screen.getByText(childrenAsString);
    expect(element.nodeName.toLowerCase()).toBe('p');
    expect(element).toHaveClass('MuiTypography-body1');
  });

  it('should render children inside of a div tag if value of children is NOT pure string', () => {
    const children = <p>Test Alert Banner</p>;
    const dataTestId = 'test-alert-banner';
    render(
      <DotAlertBanner data-testid={dataTestId} severity="success">
        {children}
      </DotAlertBanner>
    );
    const element = screen.getByText('Test Alert Banner').closest('div');
    expect(element).toHaveClass('MuiTypography-body1');
  });
});
