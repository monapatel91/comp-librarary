import React, { Fragment, MouseEvent, useState } from 'react';
import { CardMedia, Menu, MenuItem } from '@mui/material';
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
import { DotTypography } from '../typography/Typography';

const headerOnly = 'Header only';
const headerAndContent = 'Header and content';
const headerContentAndFooter = 'Header, content and footer';
const childrenOptions = [headerOnly, headerAndContent, headerContentAndFooter];

const avatar = <DotAvatar alt="Chef" text="SE" />;

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
        onClick={handleMenuClick}
        size="medium"
      />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        onClose={handleMenuClose}
        open={open}
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
    action={<MenuAction />}
    subheader="Well hello there"
    title="Hello World"
  />
);

const complexHeader = (
  <DotCardHeader
    action={<MenuAction />}
    avatar={avatar}
    subheader="Pick a card, any card!"
    subheaderSize="large"
    title="Timeline"
    titleSize="large"
  />
);

const defaultContent = (
  <DotCardContent>
    <DotTypography variant="body1">
      Do you come to this card often?
    </DotTypography>
  </DotCardContent>
);

const complexContent = (
  <Fragment>
    <CardMedia>
      <CardMediaImage />
    </CardMedia>
    <DotCardContent>
      <DotTypography variant="body1">
        These were some very good years.
      </DotTypography>
    </DotCardContent>
  </Fragment>
);

const defaultFooter = (
  <DotCardFooter>
    <DotTypography variant="body1">This is a footer</DotTypography>
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
