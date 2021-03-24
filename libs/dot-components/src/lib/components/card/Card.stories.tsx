import React, { Fragment, MouseEvent, useState } from 'react';
import { Typography, CardMedia, Menu, MenuItem } from '@material-ui/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { DotCard, CardProps } from './Card';
import { DotCardHeader } from './CardHeader';
import { DotCardContent } from './CardContent';
import { DotCardFooter } from './CardFooter';
import { DotAvatar } from '../avatar/Avatar';
import { DotButton } from '../button/Button';
import { ReactComponent as CardMediaImage } from '../../assets/empty-state.svg';
import { DotIconButton } from '../button/IconButton';

const headerOnly = 'Header only';
const headerAndContent = 'Header and content';
const headerContentAndFooter = 'Header, content and footer';
const childrenOptions = [headerOnly, headerAndContent, headerContentAndFooter];

const avatar = <DotAvatar text="SE" alt="Chef" />;

const StyledDotCard = styled(DotCard)`
  &.dot-card {
    width: 303px;
  }
`;

const MenuAction = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <Fragment>
      <DotIconButton
        className="expand-button"
        data-testid="card-header-action-button"
        iconId="options"
        size="medium"
        onClick={handleMenuClick}
      />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem key="opt1" onClick={handleMenuClose}>
          Some option
        </MenuItem>
        <MenuItem key="opt2" onClick={handleMenuClose}>
          Some other option
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

const defaultHeader = (
  <DotCardHeader
    title="Hello World"
    subheader="Well hello there"
    action={<MenuAction />}
  />
);

const complexHeader = (
  <DotCardHeader
    avatar={avatar}
    action={<MenuAction />}
    title="Timeline"
    titleSize="large"
    subheader="Pick a card, any card!"
    subheaderSize="large"
  />
);

const defaultContent = (
  <DotCardContent>
    <Typography variant="body1">Do you come to this card often?</Typography>
  </DotCardContent>
);

const complexContent = (
  <Fragment>
    <CardMedia>
      <CardMediaImage />
    </CardMedia>
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
  return <StyledDotCard {...args} children={selectedChildren} />;
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
