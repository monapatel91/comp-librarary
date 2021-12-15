import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotAccordion, AccordionProps } from './Accordion';
import { DotIcon } from '../icon/Icon';
import { Typography } from '@material-ui/core';

const iconOptions = [null, 'notification-bell', 'help'];

export default {
  title: 'Components/Accordion',
  component: DotAccordion,
  argTypes: {
    children: { defaultValue: 'Accordion Value' },
    expanded: { defaultValue: false },
    startIcon: { control: { type: 'select', options: iconOptions } },
    summary: {
      defaultValue:
        'I seek the means to fight injustice. To turn fear against those who prey on the fearful. Swear to me! Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadnt ended.',
    },
    noWrap: { defaultValue: false },
  },
} as Meta;

export const Default: Story<AccordionProps> = (args) => {
  const startIconId = args.startIcon as string;
  const startIcon = startIconId && <DotIcon iconId={startIconId} />;

  return (
    <>
      <DotAccordion {...args} startIcon={startIcon}>
        <Typography>test</Typography>
      </DotAccordion>
      <DotAccordion {...args} startIcon={startIcon}>
        <Typography>test</Typography>
      </DotAccordion>
      <DotAccordion {...args} startIcon={startIcon}>
        <Typography>test</Typography>
      </DotAccordion>
    </>
  );
};
