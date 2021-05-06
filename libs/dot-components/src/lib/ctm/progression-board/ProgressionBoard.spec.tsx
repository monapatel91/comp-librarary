import React from 'react';
import { render, RenderResult, screen } from '../../testing-utils';
import { DotProgressionBoard, ProgressionBoardProps } from './ProgressionBoard';
import { samplePhases } from './sample-data/sampleData';
import { samplePBApplicationTestData } from './sample-data/sampleApplicationData';
import { PhaseType } from './ProgressionBoardInterfaces';

describe('ProgressionBoard', () => {
  const dataTestId = 'test-pb';

  const onAppNameClick = jest.fn();

  const sampleEmptyPhases: Array<PhaseType> = [
    {
      packageVersions: [],
      code_complete: false,
      delivery_category: 'Developing',
      description: '',
      name: 'Phase 1',
    },
    {
      code_complete: true,
      delivery_category: 'Packaged',
      description: '',
      name: 'Phase 2',
      packageVersions: [],
    },
    {
      code_complete: true,
      delivery_category: 'Packaged',
      description: '',
      name: 'Phase 3',
      packageVersions: [],
    },
    {
      code_complete: true,
      delivery_category: 'Packaged',
      description: '',
      name: 'Phase 4',
      packageVersions: [],
    },
  ];

  const getEmptyPhases = (): HTMLElement =>
    screen.queryByTestId(`${dataTestId}-empty-phases`);

  const getBoardPhases = (): Array<HTMLElement> =>
    screen.queryAllByTestId('board-phases');

  const componentProps: ProgressionBoardProps = {
    baseUrl: 'www.test.ai/',
    'data-testid': dataTestId,
    onAppNameClick,
    pbApplications: samplePBApplicationTestData,
    phases: samplePhases,
  };

  const renderComponent = (
    props: ProgressionBoardProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<DotProgressionBoard {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      baseUrl: 'www.test.ai/',
      'data-testid': dataTestId,
      onAppNameClick,
      pbApplications: samplePBApplicationTestData,
      phases: samplePhases,
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  it('should NOT render empty phases', () => {
    expect(getEmptyPhases()).not.toBeInTheDocument();
  });

  it('should have three rows', async () => {
    renderComponent();
    const phases = getBoardPhases();

    expect(phases).toHaveLength(3);
  });

  it('should have five columns in each row', async () => {
    renderComponent();
    const cols = screen.getAllByTestId('phase-columns');

    // 5 columns x 3 rows
    expect(cols).toHaveLength(15);
  });

  it('should have correct number of cards', () => {
    renderComponent();
    const cards = screen.getAllByTestId('card');

    expect(cards).toHaveLength(10);
  });

  it('cards should have correct information', () => {
    renderComponent();
    const cards = screen.getAllByTestId('card');
    const links = screen.getAllByRole('link');

    const firstCard = cards[0];

    expect(links[0]).toHaveTextContent('3.1.83 - 3.1.100');
    expect(links[2]).toHaveTextContent('3.1');
    expect(links[3]).toHaveTextContent('83 - 100');

    expect(firstCard).toContainHTML(`<i class="icon-error-outlines dot-i">`);
    expect(firstCard).toContainHTML(`<i class="icon-file-dotted dot-i">`);
    expect(firstCard).toContainHTML(`<i class="icon-check-solid dot-i">`);
    expect(firstCard).toContainHTML(`<i class="icon-rogue-commits dot-i">`);
  });

  describe('empty phases', () => {
    const props: ProgressionBoardProps = {
      'data-testid': dataTestId,
      phases: sampleEmptyPhases,
    };
    renderComponent(props);
    expect(getEmptyPhases()).toBeVisible();
    expect(getBoardPhases()).toHaveLength(0);
  });
});
