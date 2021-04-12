import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotTypography } from '@digital-ai/dot-components';

export default {
  title: 'Typography',
} as Meta;

export const Default: Story = () => {
  return (
    <>
      <DotTypography variant="h1">Headline 1 - Main title</DotTypography>
      <DotTypography variant="h2">
        Headline 2 - Page section title
      </DotTypography>
      <DotTypography variant="h3">
        Headline 3 - Page section title
      </DotTypography>
      <DotTypography variant="h4">Headline 4</DotTypography>
      <DotTypography variant="h5">Headline 5</DotTypography>
      <DotTypography variant="subtitle1">Subtitle 1</DotTypography>
      <DotTypography variant="subtitle2">Subtitle 2</DotTypography>
      <DotTypography variant="body1">Body 1</DotTypography>
      <DotTypography variant="body2">Body 2</DotTypography>
      <div>
        <DotTypography variant="caption">Caption</DotTypography>
      </div>
      <div>
        <DotTypography variant="overline">Overline</DotTypography>
      </div>
      <div>
        <DotTypography variant="button">Button</DotTypography>
      </div>
    </>
  );
};
