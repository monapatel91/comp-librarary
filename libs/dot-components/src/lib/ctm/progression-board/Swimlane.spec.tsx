import React from 'react';
import { render, RenderResult, screen } from '../../testing-utils';
import { SwimLane, SwimLaneProps } from './SwimLane';
import {
  sampleEmptyPhasesTest,
  sampleProgressionPackageTest,
  selectedWorkItemProps,
} from './sample-data/samplePbTestData';
import { PhaseType } from './ProgressionBoardInterfaces';

describe('Swimlane', () => {
  let baseComponentElem: HTMLElement;

  const dataTestId = 'test-swimlane';

  const onAppNameClick = jest.fn();

  const waitingMessage = 'Test waiting message';

  const componentProps: SwimLaneProps = {
    baseUrl: 'www.test.ai/',
    'data-testid': dataTestId,
    isOffsetLeft: false,
    onAppNameClick,
    pbApplication: {
      waitingMessage,
    },
    progressionPackage: sampleProgressionPackageTest,
    selectWorkitemProps: selectedWorkItemProps,
  };

  const getWaitingPhase = (index: number): HTMLElement =>
    screen.queryByTestId(`waiting-phase-${index}`);

  const getPhaseElements = (): Array<HTMLElement> =>
    screen.getAllByTestId('phase-columns');

  const expectWaitingPhasesToBeVisible = (
    phases: Array<PhaseType>,
    shouldBeVisible = true,
    waitingMessage = ''
  ): void => {
    phases.forEach((_: PhaseType, index: number) => {
      if (shouldBeVisible) {
        expect(getWaitingPhase(index)).toBeVisible();
        waitingMessage &&
          expect(screen.getAllByText(waitingMessage)).toHaveLength(
            phases.length
          );
      } else {
        expect(getWaitingPhase(index)).not.toBeInTheDocument();
      }
    });
  };

  const renderComponent = (props: SwimLaneProps = null): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<SwimLane {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      baseUrl: 'www.test.ai/',
      'data-testid': dataTestId,
      isOffsetLeft: false,
      onAppNameClick,
      pbApplication: {
        waitingMessage,
      },
      progressionPackage: sampleProgressionPackageTest,
      selectWorkitemProps: selectedWorkItemProps,
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

    it('should render application name', () => {
      const { package_name: packageName } = sampleProgressionPackageTest;
      const packageNameElem = screen.getByText(packageName);
      expect(packageNameElem).toBeVisible();
    });

    it('should NOT display waiting phases when at least one version exists', () => {
      const {
        progressionPackage: { phases },
      } = componentProps;
      expectWaitingPhasesToBeVisible(phases, false);
    });

    it('should display correct number of phase elements', () => {
      const {
        progressionPackage: { phases },
      } = componentProps;
      expect(getPhaseElements().length).toBe(phases.length);
    });
  });

  describe('with custom props', () => {
    const props: SwimLaneProps = {
      ...componentProps,
      progressionPackage: {
        ...componentProps.progressionPackage,
        phases: sampleEmptyPhasesTest,
      },
    };

    it('should display all waiting phases with appropriate waiting message', () => {
      renderComponent(props);
      expectWaitingPhasesToBeVisible(
        sampleEmptyPhasesTest,
        true,
        waitingMessage
      );
    });
  });
});
