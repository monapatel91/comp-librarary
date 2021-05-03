import React from 'react';
import { render, RenderResult, screen } from '../../../testing-utils';
import { EmptyPhases, EmptyPhasesProps } from './EmptyPhases';

describe('EmptyPhases', () => {
  const dataTestId = 'test-empty-phases';
  let baseComponentElem: HTMLElement;

  const componentProps: EmptyPhasesProps = {
    'data-testid': dataTestId,
    phaseNames: ['one', 'two', 'three', 'four'],
  };

  const renderComponent = (props: EmptyPhasesProps = null): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<EmptyPhases {...renderProps} />);
  };

  beforeEach(() => {
    const { baseElement } = renderComponent();
    baseComponentElem = baseElement;
  });

  it('should have unchanged API', () => {
    const props = {
      'data-testid': dataTestId,
      phaseNames: ['one', 'two', 'three', 'four'],
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    expect(baseComponentElem).toBeTruthy();
  });

  it('should display all phase names', () => {
    const { phaseNames } = componentProps;
    phaseNames.forEach((phaseName: string) =>
      expect(screen.getByText(phaseName)).toBeVisible()
    );
  });

  it('should display divider for each empty phase', () => {
    const { phaseNames } = componentProps;
    phaseNames.forEach((phaseName: string, index: number) =>
      expect(screen.getByTestId(`${dataTestId}-divider-${index}`)).toBeVisible()
    );
  });
});
