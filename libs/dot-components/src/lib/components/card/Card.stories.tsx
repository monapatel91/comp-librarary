import React, { Fragment } from 'react';
import { Typography, CardHeader, CardMedia } from '@material-ui/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { DotCard, CardProps } from './Card';
import { DotCardHeader } from './CardHeader';
import { DotCardContent } from './CardContent';
import { DotCardFooter } from './CardFooter';
import DotAvatar from '../avatar/Avatar';
import DotIconButton from '../button/IconButton';
import DotButton from '../button/Button';

const headerOnly = 'Header only';
const headerAndContent = 'Header and content';
const headerContentAndFooter = 'Header, content and footer';
const childrenOptions = [headerOnly, headerAndContent, headerContentAndFooter];

const avatar = <DotAvatar text="SE" alt="Chef" />;

const StyledDotCard = styled(DotCard)`
  &.dot-card {
    width: 380px;
  }
`;

const defaultHeader = (
  <DotCardHeader title="Hello World" subheader="Well hello there" />
);

const complexHeaderAction = (
  <DotIconButton
    className="expand-button"
    data-testid="card-header-action-button"
    iconId="options"
    size="medium"
  />
);

const complexHeader = (
  <CardHeader
    avatar={avatar}
    action={complexHeaderAction}
    title="Timeline"
    titleTypographyProps={{ variant: 'h2' }}
    subheader="Pick a card, any card!"
    subheaderTypographyProps={{ variant: 'body1' }}
  />
);

const defaultContent = (
  <DotCardContent>
    <Typography variant="body1">Do you come to this card often?</Typography>
  </DotCardContent>
);

const complexContent = (
  <Fragment>
    <CardMedia
      image="../../assets/empty-state.svg"
      style={{ height: '300px' }}
    ></CardMedia>
    <DotCardContent>
      <Typography variant="body1">These were some very good years.</Typography>
    </DotCardContent>
  </Fragment>
);

const defaultFooter = (
  <DotCardFooter>
    <Typography variant="body1">This is a footer</Typography>
  </DotCardFooter>
);

const complexFooter = (
  <DotCardFooter>
    <DotButton type="text">Learn more</DotButton>
  </DotCardFooter>
);

const defaultHeaderAndContentChildren = (
  <Fragment>
    {defaultHeader}
    {defaultContent}
  </Fragment>
);

const complexHeaderAndContentChildren = (
  <Fragment>
    {complexHeader}
    {complexContent}
  </Fragment>
);

const defaultHeaderContentAndFooterChildren = (
  <Fragment>
    {defaultHeader}
    {defaultContent}
    {defaultFooter}
  </Fragment>
);

const complexHeaderContentAndFooterChildren = (
  <Fragment>
    {complexHeader}
    {complexContent}
    {complexFooter}
  </Fragment>
);

export default {
  title: 'Components/Card',
  component: DotCard,
  subcomponents: { DotCardHeader, DotCardContent, DotCardFooter },
  argTypes: {
    children: {
      control: {
        type: 'select',
        options: childrenOptions,
        default: headerContentAndFooter,
      },
    },
  },
} as Meta;

export const Default: Story<CardProps> = (args) => {
  const { children } = args;
  let selectedChildren;
  switch (children) {
    case headerOnly:
      selectedChildren = defaultHeader;
      break;
    case headerAndContent:
      selectedChildren = defaultHeaderAndContentChildren;
      break;
    default:
      selectedChildren = defaultHeaderContentAndFooterChildren;
  }
  return <DotCard {...args} children={selectedChildren} />;
};

export const ComplexCardWithMedia: Story<CardProps> = (args) => {
  const { children } = args;
  let selectedChildren;
  switch (children) {
    case headerOnly:
      selectedChildren = complexHeader;
      break;
    case headerAndContent:
      selectedChildren = complexHeaderAndContentChildren;
      break;
    default:
      selectedChildren = complexHeaderContentAndFooterChildren;
  }
  return <StyledDotCard {...args} children={selectedChildren} />;
};
