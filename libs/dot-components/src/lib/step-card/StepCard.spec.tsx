import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { CardMenuOption } from '../card/Card';
import DotStepCard from './StepCard';

describe('DotStepCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotStepCard title="some" subheader="someH" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with team and user', () => {
    render(
      <DotStepCard
        title="some"
        subheader="someH"
        team={{ name: 'Avengers', avatar: 'avengers.jpg' }}
        user={{ name: 'Iron Man', avatar: 'ironman.jpg' }}
      />
    );
    const stepActions = screen.getByTestId('step-card-actions');
    expect(stepActions).toBeVisible();
  });

  it('should do something when I use the menu options', () => {
    const menuOptions: CardMenuOption[] = [
      { displayText: 'Option 1', action: jest.fn() },
      { displayText: 'Option 2', action: jest.fn() },
    ];

    render(
      <DotStepCard title="some" subheader="someH" menuOptions={menuOptions} />
    );

    const cardActionButton = screen.getByTestId('card-header-action-button');
    expect(cardActionButton).toBeVisible();

    userEvent.click(cardActionButton);
    const actionItems = screen.getAllByTestId('card-header-action-menu-option');
    userEvent.click(actionItems[1]);
    expect(menuOptions[1].action).toHaveBeenCalled();
    expect(menuOptions[0].action).not.toHaveBeenCalled();
  });
});
