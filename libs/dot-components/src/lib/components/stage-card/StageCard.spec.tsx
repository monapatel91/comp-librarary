import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import { CategoryType } from '../phase-header/PhaseHeader';
import { DotStageCard, CardMenuOption } from './StageCard';

const dummySteps = [
  { title: 'Batman', subheader: 'Bruce Wayne' },
  { title: 'Hulk', subheader: 'Bruce Banner' },
  { title: 'Black Widow', subheader: 'Natalia' },
  { title: 'Ironman', subheader: 'Tony Stark' },
];

describe('DotStageCard', () => {
  it('should render successfully with no steps', async () => {
    const { baseElement } = render(
      <DotStageCard steps={[]} title="some" phaseColor={CategoryType.build} />
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement).not.toHaveTextContent('Step');
  });

  it('should render successfully with 1 step', () => {
    const { baseElement } = render(
      <DotStageCard
        steps={[{ title: 'Batman', subheader: 'Bruce Wayne' }]}
        title="some"
        phaseColor={CategoryType.build}
      />
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement).toHaveTextContent('1 Step');
    expect(screen.getByTestId('display-stage-steps')).toBeVisible();
  });

  it('should display card action menu if menu options provided and execute action for clicked on menu option', () => {
    render(
      <DotStageCard
        steps={dummySteps}
        title="some"
        phaseColor={CategoryType.build}
      />
    );
    let cardActionButton = screen.queryByTestId('card-header-action-button');
    expect(cardActionButton).toBeFalsy();

    const menuOptions: CardMenuOption[] = [
      { displayText: 'Option 1', action: jest.fn() },
      { displayText: 'Option 2', action: jest.fn() },
    ];
    render(
      <DotStageCard
        steps={dummySteps}
        title="some"
        phaseColor={CategoryType.build}
        menuOptions={menuOptions}
      />
    );

    cardActionButton = screen.getByTestId('card-header-action-button');
    expect(cardActionButton).toBeVisible();

    userEvent.click(cardActionButton);
    const actionItems = screen.getAllByTestId('card-header-action-menu-option');
    userEvent.click(actionItems[1]);
    expect(menuOptions[1].action).toHaveBeenCalled();
    expect(menuOptions[0].action).not.toHaveBeenCalled();
  });

  it('should expand collapse steps', () => {
    render(
      <DotStageCard
        steps={dummySteps}
        title="some"
        phaseColor={CategoryType.build}
      />
    );

    const expandToggle = screen.getByTestId('display-stage-steps');
    expect(expandToggle).toBeVisible();
    expect(expandToggle).not.toHaveClass('visible');
    userEvent.click(expandToggle);
    expect(expandToggle).toHaveClass('visible');
    userEvent.click(expandToggle);
    expect(expandToggle).not.toHaveClass('visible');
  });
});
