import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { Meta } from '@storybook/react/types-6-0';

import { DotCard } from './Card';
import { DotCardHeader } from './CardHeader';
import { DotCardContent } from './CardContent';
import { DotCardFooter } from './CardFooter';

const DotCardTemplate = ({ cardHeader, cardContent, cardFooter, ...args }) => (
  <DotCard>
    <Fragment>
      <DotCardHeader {...cardHeader} />
      <DotCardContent {...cardContent}>
        <Typography variant="body1">{cardContent}</Typography>
      </DotCardContent>
      <DotCardFooter {...cardFooter}>
        <Typography variant="body1">{cardFooter}</Typography>
      </DotCardFooter>
    </Fragment>
  </DotCard>
);

export default {
  title: 'Components/Card',
  component: DotCard,
  argTypes: {
    children: {
      control: {
        type: 'text',
        value:
          'Set properties for DotCardHeader, DotCardContent and DotCardFooter children using the controls below.',
      },
    },
  },
} as Meta;

const header = { title: 'Hello World', subheader: 'Well hello there' };
const content = 'Do you come to this card often?';
const footer = 'This is a footer';

export const Default = DotCardTemplate.bind({});
Default.args = { cardHeader: header, cardContent: content, cardFooter: footer };
