import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DotIcon } from '../icon/Icon';
import { CardMenuOption, DotCard } from './Card';

export default {
  component: DotCard,
  title: 'DotCard',
};

export const card = () => {
  let groupId = 'Options';
  const title = text('Title', 'Hello World', groupId);
  const subheader = text('Sub Header', 'Well hello there', groupId);
  const preheader = boolean('Display PreHeader', true, groupId);
  const preheaderExample = <DotIcon icon="block" />;

  groupId = 'Menu Options';
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

  return (
    <DotCard
      menuOptions={menuOptions}
      preHeader={preheader ? preheaderExample : null}
      subheader={subheader}
      title={title}
    >
      Look Mom! I'm a card!!!
    </DotCard>
  );
};
