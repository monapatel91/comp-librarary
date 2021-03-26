import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotAccordion, AccordionProps } from './Accordion';
import { DotIcon } from '../icon/Icon';
import { Typography } from '@material-ui/core';

const iconOptions = [null, 'notification-bell', 'help'];

export default {
  title: 'Experimental/Accordion',
  component: DotAccordion,
  argTypes: {
    children: { defaultValue: 'Accordion Value' },
    startIcon: { control: { type: 'select', options: iconOptions } },
    summary: { defaultValue: 'Accordion text summary' },
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story<AccordionProps> = (args: any) => {
  const { startIcon: startIconId } = args;
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
