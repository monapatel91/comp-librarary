import React from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { render, RenderResult, screen } from '../../../testing-utils';
import { WaitingPhase } from './WaitingPhase';

describe('WaitingPhase', () => {
  const dataTestId = 'test-waiting-phase';
  let baseComponentElem: HTMLElement;

  const componentProps: CommonProps = {
    'data-testid': dataTestId,
  };

  const renderComponent = (props: CommonProps = null): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<WaitingPhase {...renderProps} />);
  };

  beforeEach(() => {
    const { baseElement } = renderComponent();
    baseComponentElem = baseElement;
  });

  it('should have unchanged API', () => {
    const props = {
      'data-testid': dataTestId,
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    expect(baseComponentElem).toBeTruthy();
  });

  it('should render waiting icon', () => {
    expect(screen.getByTestId(`${dataTestId}-waiting-icon`)).toBeVisible();
  });

  it('should render appropriate message', () => {
    expect(
      screen.getByText(
        'To see stories and defects here, configure a source control webhook, make a commit and use the Track code changes task to update the board.'
      )
    ).toBeVisible();
  });
});
