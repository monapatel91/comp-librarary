import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotLink, LinkProps } from './Link';
import { Typography } from '@material-ui/core';

export default {
  title: 'Components/Link',
  component: DotLink,
  argTypes: {
    children: { defaultValue: 'Sample Link' },
  },
} as Meta;

export const Default: Story<LinkProps> = (args) => <DotLink {...args} />;
export const LinkInParagraph: Story<LinkProps> = (args) => (
  <Typography variant="body1">
    This is a <DotLink {...args} /> that will take you to a page that has
    nothing to do with Batman!
  </Typography>
);
