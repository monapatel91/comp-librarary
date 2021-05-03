import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, RenderResult, screen } from '../../../testing-utils';
import {
  ApplicationDrawerHeader,
  ApplicationDrawerHeaderProps,
} from './ApplicationDrawerHeader';

describe('ApplicationDrawerHeader', () => {
  const dataTestId = 'app-drawer-header';

  const onDrawerClose = jest.fn();

  const componentProps: ApplicationDrawerHeaderProps = {
    'data-testid': dataTestId,
    headerTitle: 'Header title',
    onDrawerClose,
  };

  const getCloseButton = (): HTMLElement =>
    screen.getByTestId(`${dataTestId}-close-icon`);

  const renderComponent = (
    props: ApplicationDrawerHeaderProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<ApplicationDrawerHeader {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      'data-testid': dataTestId,
      headerTitle: 'Header title',
      onDrawerClose,
    };
    expect(componentProps).toEqual(props);
  });

  beforeEach(() => {
    renderComponent();
  });

  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  it('should render avatar with icon', () => {
    const avatarElem = screen.getByTestId(`${dataTestId}-application-icon`);
    expect(avatarElem).toBeVisible();
  });

  it('should render correct application title', () => {
    const headerElem = screen.getByText(componentProps.headerTitle);
    expect(headerElem).toBeVisible();
    expect(headerElem).toHaveClass('header-title');
  });

  it('should render enabled close icon button', () => {
    const closeBtn = getCloseButton();
    expect(closeBtn).toBeVisible();
    expect(closeBtn).toBeEnabled();
  });

  it('should execute appropriate event handler on close button click', () => {
    const closeBtn = getCloseButton();
    userEvent.click(closeBtn);
    expect(onDrawerClose).toHaveBeenCalledTimes(1);
  });
});
