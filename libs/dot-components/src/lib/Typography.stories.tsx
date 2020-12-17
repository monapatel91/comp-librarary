import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Typography } from '@material-ui/core';

export default {
  title: 'Typography',
} as Meta;

export const Default: Story = () => {
  return (
    <Fragment>
      <div>
        <Typography variant="h1">Headline 1 - Main title</Typography>
      </div>

      <div>
        <Typography variant="h2">Headline 2 - Page section title</Typography>
      </div>

      <div>
        <Typography variant="h3">Headline 3 - Page section title</Typography>
      </div>

      <div>
        <Typography variant="h4">Headline 4</Typography>
      </div>

      <div>
        <Typography variant="h5">Headline 5</Typography>
      </div>

      <div>
        <Typography variant="subtitle1">Subtitle 1</Typography>
      </div>

      <div>
        <Typography variant="subtitle2">Subtitle 2</Typography>
      </div>

      <div>
        <Typography variant="body1">Body 1</Typography>
      </div>

      <div>
        <Typography variant="body2">Body 2</Typography>
      </div>

      <div>
        <Typography variant="caption">Caption</Typography>
      </div>

      <div>
        <Typography variant="overline">Overline</Typography>
      </div>

      <div>
        <Typography variant="button">Button</Typography>
      </div>
    </Fragment>
  );
};
