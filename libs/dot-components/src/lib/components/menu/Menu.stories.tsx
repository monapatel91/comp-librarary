import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Button, ClickAwayListener } from '@material-ui/core';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotMenu, MenuProps } from './Menu';

export default {
  title: 'Components/Menu',
  component: DotMenu,
  argTypes: {
    id: {
      defaultValue: 'my_menu_list',
    },
    menuItems: {
      defaultValue: [
        { text: 'Batman' },
        { text: 'Robin' },
        { text: 'Bat Girl' },
      ],
    },
  },
} as Meta;

export const Default: Story<MenuProps> = (args) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const uid = 'my_menu_list';

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Fragment>
      <Button
        ref={anchorRef}
        aria-controls={open ? uid : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Toggle Menu
      </Button>
      <DotMenu
        anchor={anchorRef.current}
        id={uid}
        onClose={handleClose}
        open={open}
        {...args}
      />
    </Fragment>
  );
};
