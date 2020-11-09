import React from 'react';
import { boolean, select, radios, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { CategoryType } from '../phase-header/PhaseHeader';
import { CardMenuOption } from '../card/Card';
import { DotStageCard, StepObject } from './StageCard';

export default {
  component: DotStageCard,
  title: 'DotStageCard',
};

export const stageCard = () => {
  const phaseColorOptions: { [key: string]: CategoryType } = {
    Build: CategoryType.build,
    Code: CategoryType.code,
    Deploy: CategoryType.deploy,
    Monitor: CategoryType.monitor,
    Plan: CategoryType.plan,
    Test: CategoryType.test,
  };
  const numOfSteps = {
    None: 'none',
    One: 'one',
    Two: 'two',
  };

  const groupId = 'Options';
  const title = text('Title', 'Some name', groupId);
  const phaseColor = select(
    'Phase color',
    phaseColorOptions,
    CategoryType.build,
    groupId
  );

  const menuOptions: Array<CardMenuOption> = [];
  if (boolean('Delete?', true, groupId)) {
    menuOptions.push({ displayText: 'Delete', action: action('Delete') });
  }
  if (boolean('Some other option?', true, groupId)) {
    menuOptions.push({
      displayText: 'Some other option',
      action: action('Some other option'),
    });
  }

  let stepList: Array<StepObject> = [];
  const stepLength = radios('# of Steps', numOfSteps, 'two', groupId);
  if (stepLength === 'two') {
    stepList = [
      { title: 'Batman', subheader: 'step 1' },
      { title: 'Robin', subheader: 'step 2' },
    ];
  } else if (stepLength === 'one') {
    stepList = [{ title: 'Batman', subheader: 'step 1' }];
  } else {
    stepList = [];
  }

  return (
    <DotStageCard
      steps={stepList}
      title={title}
      phaseColor={phaseColor}
      menuOptions={menuOptions}
    />
  );
};
