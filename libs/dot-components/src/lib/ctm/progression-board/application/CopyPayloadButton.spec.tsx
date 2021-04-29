import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, RenderResult, screen, act } from '../../../testing-utils';
import { CopyPayloadButton, CopyPayloadButtonProps } from './CopyPayloadButton';

describe('CopyPayloadButton', () => {
  const dataTestId = '';

  const onButtonClick = jest.fn();

  const onTooltipClose = jest.fn();

  const componentProps: CopyPayloadButtonProps = {
    'data-testid': dataTestId,
    isDisabled: false,
    isTooltipOpen: false,
    onButtonClick,
    onTooltipClose,
  };

  const getButton = (): HTMLElement => screen.getByRole('button');

  const renderComponent = (
    props: CopyPayloadButtonProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<CopyPayloadButton {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      'data-testid': dataTestId,
      isDisabled: false,
      isTooltipOpen: false,
      onButtonClick,
      onTooltipClose,
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  it("should be enabled when 'isDisabled' is set to false", () => {
    renderComponent();
    const btnElem = getButton();
    expect(btnElem).toBeVisible();
    expect(btnElem).toBeEnabled();
  });

  it("should be disabled when 'isDisabled' is set to true", () => {
    const props: CopyPayloadButtonProps = {
      ...componentProps,
      isDisabled: true,
    };
    renderComponent(props);
    const btnElem = getButton();
    expect(btnElem).toBeVisible();
    expect(btnElem).toBeDisabled();
  });

  it("should NOT display tooltip text when 'isTooltipOpen' is set to false", async () => {
    renderComponent();
    expect(screen.queryByText('URL Copied!')).not.toBeInTheDocument();
  });

  it("should display tooltip text when 'isTooltipOpen' is set to true", async () => {
    const props: CopyPayloadButtonProps = {
      ...componentProps,
      isTooltipOpen: true,
    };
    renderComponent(props);
    // Avoid popper warning
    await act(async () => await null);
    expect(screen.getByText('URL Copied!')).toBeVisible();
  });

  it('should call event handler when button gets clicked', async () => {
    renderComponent();
    const btnElem = getButton();
    userEvent.click(btnElem);
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
