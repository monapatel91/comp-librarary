import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, RenderResult, screen, waitFor } from '../../testing-utils';
import { DotProgressButton, ProgressButtonProps } from './ProgressButton';

describe('DotProgressButton', () => {
  const ariaLabel = 'progress-button component';
  const className = 'progress-button';
  const dataTestId = 'progress-button-testid';
  const handleClick = jest.fn();
  const title = 'Progress Button';
  const tooltip = 'My Tooltip';

  const componentProps: ProgressButtonProps = {
    ariaLabel,
    className,
    'data-testid': dataTestId,
    disabled: false,
    disableRipple: false,
    fullWidth: false,
    isLoading: false,
    isSubmit: false,
    onClick: handleClick,
    size: 'medium',
    title,
    tooltip,
    type: 'primary',
  };

  const getButton = (): HTMLElement => screen.getByTestId(dataTestId);

  const getProgressCircle = (): HTMLElement | null =>
    screen.queryByTestId('progress-circle');

  const renderComponent = (props?: ProgressButtonProps): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<DotProgressButton {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      ariaLabel,
      className,
      'data-testid': dataTestId,
      disabled: false,
      disableRipple: false,
      fullWidth: false,
      isLoading: false,
      isSubmit: false,
      onClick: handleClick,
      size: 'medium',
      title,
      tooltip,
      type: 'primary',
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  describe('default render', () => {
    beforeEach(() => renderComponent());

    it('should display enabled button without progress circle', () => {
      const button = getButton();
      const progressCircle = getProgressCircle();
      expect(button).toBeVisible();
      expect(button).toBeEnabled();
      expect(progressCircle).not.toBeInTheDocument();
    });

    it('should display correct title', () => {
      expect(screen.getByText(title)).toBeVisible();
    });

    it('should display button tooltip', async () => {
      const button = getButton();
      userEvent.hover(button);
      await waitFor(() => expect(screen.getByText(tooltip)).toBeVisible());
    });

    it('should execute callback on click event', () => {
      const button = getButton();
      userEvent.click(button);
      expect(handleClick).toBeCalledTimes(1);
    });

    it("should have 'aria-label' attribute with correct value", () => {
      const button = getButton();
      expect(button).toHaveAttribute('aria-label', ariaLabel);
    });
  });

  describe('with custom props', () => {
    it('should display disabled button with progress circle', () => {
      const customProps: ProgressButtonProps = {
        ...componentProps,
        isLoading: true,
      };
      renderComponent(customProps);
      const button = getButton();
      const progressCircle = getProgressCircle();
      expect(button).toBeVisible();
      expect(button).toBeDisabled();
      expect(progressCircle).toBeVisible();
    });

    it("should render enabled button when 'disabled' prop wasn't explicitly set", () => {
      const customProps: ProgressButtonProps = {
        ...componentProps,
        disabled: undefined,
      };
      renderComponent(customProps);
      const button = getButton();
      expect(button).toBeVisible();
      expect(button).toBeEnabled();
    });

    it('should display disabled button without progress circle when disabled from props', () => {
      const customProps: ProgressButtonProps = {
        ...componentProps,
        disabled: true,
      };
      renderComponent(customProps);
      const button = getButton();
      const progressCircle = getProgressCircle();
      expect(button).toBeVisible();
      expect(button).toBeDisabled();
      expect(progressCircle).not.toBeInTheDocument();
    });

    it("should NOT display loading spinner when 'loading' prop wasn't explicitly set", () => {
      const customProps: ProgressButtonProps = {
        ...componentProps,
        isLoading: undefined,
      };
      renderComponent(customProps);
      const progressCircle = getProgressCircle();
      expect(progressCircle).not.toBeInTheDocument();
    });

    it("should display primary button when 'type' prop wasn't explicitly set", () => {
      const customProps: ProgressButtonProps = {
        ...componentProps,
        type: undefined,
      };
      renderComponent(customProps);
      const button = getButton();
      expect(button).toHaveClass('MuiButton-containedPrimary');
    });
  });
});
