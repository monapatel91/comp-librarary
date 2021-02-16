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

const avatar = <DotAvatar text="SE" alt="Chef"></DotAvatar>;

const StyledDotCard = styled(DotCard)`
  &.dot-card {
    width: 400px;
  }
`;

const defaultHeader = (
  <DotCardHeader
    title="Hello World"
    subheader="Well hello there"
  ></DotCardHeader>
);

const complexHeaderAction = (
  <DotIconButton
    className="expand-button"
    data-testid="card-header-action-button"
    iconId="options"
    size="small"
  />
);

const complexHeader = (
  <CardHeader
    avatar={avatar}
    action={complexHeaderAction}
    title="Lorem Picsum"
    titleTypographyProps={{ variant: 'h4' }}
    subheader="A randomly generated image just for you!"
    subheaderTypographyProps={{ variant: 'body2' }}
  ></CardHeader>
);

const defaultContent = (
  <DotCardContent>
    <Typography variant="body1">Do you come to this card often?</Typography>
  </DotCardContent>
);

const complexContent = (
  <Fragment>
    <CardMedia
      image="https://picsum.photos/400"
      style={{ height: '400px', width: '400px' }}
    ></CardMedia>
    <DotCardContent>
      <Typography variant="body1">
        The picture on this card may or may not represent the artistic vision of
        the card designer.
      </Typography>
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
