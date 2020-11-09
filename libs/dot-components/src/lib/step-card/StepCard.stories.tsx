import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { CardMenuOption } from '../card/Card';
import { DotStepCard } from './StepCard';

export default {
  component: DotStepCard,
  title: 'DotStepCard',
};

export const stepCard = () => {
  let groupId = 'Card Header';
  const title = text('Title', 'Some name', groupId);
  const subheader = text('Sub Header', 'Some subheader', groupId);
  const icon = text('Icon', 'home', groupId);
  const iconBgColor = text('Icon Background Color', '#FFF3E9', groupId);
  const menuOptions: Array<CardMenuOption> = [];

  if (boolean('Delete?', true, groupId)) {
    menuOptions.push({ displayText: 'Delete', action: action('Delete') });
  }
  if (boolean('Another option?', true, groupId)) {
    menuOptions.push({
      displayText: 'Another option',
      action: action('Another option'),
    });
  }

  groupId = 'Card Assignment';
  let teamObject = undefined;
  let userObject = undefined;

  if (boolean('Display Team & User', true, groupId)) {
    const teamName = text('Team Name', 'Team Batman', groupId);
    const userName = text('User Name', 'Bruce Wayne', groupId);

    teamObject = { name: teamName };
    userObject = { name: userName };
  }

  return (
    <DotStepCard
      menuOptions={menuOptions}
      stepIcon={icon}
      stepIconBg={iconBgColor}
      team={teamObject}
      title={title}
      subheader={subheader}
      user={userObject}
    />
  );
};
