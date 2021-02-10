import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotCard, CardProps } from './Card';
import { DotCardHeader } from './CardHeader';
import { DotCardContent } from './CardContent';
import { DotCardFooter } from './CardFooter';

export default {
  title: 'Experimental/Card',
  component: DotCard,
  argTypes: {
    children: {
      defaultValue: (
        <Fragment>
          <DotCardHeader
            title="Hello World"
            subheader="Well hello there"
          ></DotCardHeader>
          <DotCardContent>
            <Typography variant="body1">
              Do you come to this card often?
            </Typography>
          </DotCardContent>
          <DotCardFooter>
            <Typography variant="body1">This is a footer</Typography>
          </DotCardFooter>
        </Fragment>
      ),
    },
  },
} as Meta;

export const Default: Story<CardProps> = (args) => {
  return <DotCard {...args} />;
};
