import React from 'react';
import { render, RenderResult, screen } from '../../../testing-utils';
import { WaitingPhase, WaitingPhaseProps } from './WaitingPhase';
import { DEFAULT_APP_WAITING_MESSAGE } from '../application/data/constants';

describe('WaitingPhase', () => {
  const dataTestId = 'test-waiting-phase';
  let baseComponentElem: HTMLElement;

  const waitingMessage = 'test message';

  const componentProps: WaitingPhaseProps = {
    'data-testid': dataTestId,
    waitingMessage,
  };

  const renderComponent = (props: WaitingPhaseProps = null): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<WaitingPhase {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      'data-testid': dataTestId,
      waitingMessage,
    };
    expect(componentProps).toEqual(props);
  });

  describe('default render', () => {
    beforeEach(() => {
      const { baseElement } = renderComponent();
      baseComponentElem = baseElement;
    });

    it('should render successfully', () => {
      expect(baseComponentElem).toBeTruthy();
    });

    it('should render waiting icon', () => {
      expect(screen.getByTestId(`${dataTestId}-waiting-icon`)).toBeVisible();
    });

    it('should render appropriate waiting message', () => {
      expect(screen.getByText(waitingMessage)).toBeVisible();
    });
  });

  describe('with custom props', () => {
    const props: WaitingPhaseProps = {
      'data-testid': dataTestId,
      waitingMessage: undefined,
    };

    it('should render default waiting message when no custom message provided', () => {
      renderComponent(props);
      expect(screen.getByText(DEFAULT_APP_WAITING_MESSAGE)).toBeVisible();
    });
  });
});
