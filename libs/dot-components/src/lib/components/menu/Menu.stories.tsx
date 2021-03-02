import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotMenu, MenuProps } from './Menu';
import DotButton from '../button/Button';
import DotIconButton from '../button/IconButton';

const onClick = (evt, menuId, menuItemKey) => {
  alert(menuItemKey);
};

const onLeave = (evt, setOpen) => {
  setOpen(false);
};

export default {
  title: 'Components/Menu',
  component: DotMenu,
  argTypes: {
    id: {
      defaultValue: 'foobar',
    },
    menuItems: {
      defaultValue: [
        { children: 'Batman', key: 'batman', onClick: onClick },
        { children: 'Robin', key: 'robin', onClick: onClick },
        { children: 'Bat Girl', key: 'bat-girl', onClick: onClick },
        { children: 'Mister Mxyzptlk', key: 'mxy', onClick: onClick },
        { children: 'Option Five', key: '5', onClick: onClick },
        { children: 'Option Six', key: '6', onClick: onClick },
        { children: 'Option Seven', key: '7', onClick: onClick },
        { children: 'Option Eight', key: '8', onClick: onClick },
        { children: 'Option Nine', key: '9', onClick: onClick },
        { children: 'Option Ten', key: '10', onClick: onClick },
        { children: 'Option Eleven', key: '11', onClick: onClick },
        { children: 'Option Twelve', key: '12', onClick: onClick },
        { children: 'Option Thirteen', key: '13', onClick: onClick },
        { children: 'Option Fourteen', key: '14', onClick: onClick },
        { children: 'Option Fifteen', key: '15', onClick: onClick },
        { children: 'Option Sixteen', key: '16', onClick: onClick },
        { children: 'Option Seventeen', key: '17', onClick: onClick },
        { children: 'Option Eighteen', key: '18', onClick: onClick },
        { children: 'Option Nineteen', key: '19', onClick: onClick },
        { children: 'Option Twenty', key: '20', onClick: onClick },
        { children: 'Option Twenty-one', key: '21', onClick: onClick },
        { children: 'Option Twenty-two', key: '22', onClick: onClick },
        { children: 'Option Twenty-three', key: '23', onClick: onClick },
        { children: 'Option Twenty-four', key: '24', onClick: onClick },
        { children: 'Option Twenty-five', key: '25', onClick: onClick },
        { children: 'Option Twenty-six', key: '26', onClick: onClick },
        { children: 'Option Twenty-seven', key: '27', onClick: onClick },
        { children: 'Option Twenty-eight', key: '28', onClick: onClick },
        { children: 'Option Twenty-nine', key: '29', onClick: onClick },
        {
          children: 'Option Seven Thousand Four Hundred and Seventy-six',
          key: '7476',
          onClick: onClick,
        },
        { children: 'Last Option', key: '&', onClick: onClick },
      ],
      name: 'Menu Items',
    },
    menuPlacement: {
      defaultValue: 'bottom',
      name: 'Menu Placement',
    },
  },
} as Meta;

// Default story shows menu all the time and has many
// options so as to require scrolling
export const Default: Story<MenuProps> = (args) => {
  return <DotMenu open={true} {...args} />;
};

// Menu with a button anchor
export const ButtonMenu: Story<MenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const onItemClick = (evt, menuId, menuItemKey) => {
    alert(menuItemKey + ' rules!');
    setOpen(false);
  };
  const handleLeave = (evt) => {
    onLeave(evt, setOpen);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (anchorEl && prevOpen.current === true && open === false) {
      anchorEl.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const menuItems = [
    { children: 'Batman', key: 'Batman', onClick: onItemClick },
    { children: 'Robin', key: 'Robin', onClick: onItemClick },
    { children: 'Bat Girl', key: 'Bat Girl', onClick: onItemClick },
  ];
  return (
    <div>
      <DotButton type="text" onClick={handleToggle}>
        Menu Button
      </DotButton>
      <DotMenu
        {...args}
        anchorEl={anchorEl}
        menuItems={menuItems}
        onLeave={(event) => onLeave(event, setOpen)}
        open={open}
      ></DotMenu>
    </div>
  );
};

// Menu shared by multiple icon buttons in a table
export const TableMenu: Story<MenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const handleToggle = (event, menuId: string) => {
    setId(menuId);
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const onItemClick = (evt, menuId, menuItemKey) => {
    const correct =
      (menuId === 'batman' && menuItemKey === 'gotham') ||
      (menuId === 'superman' && menuItemKey === 'metropolis') ||
      (menuId === 'spidey' && menuItemKey === 'ny');
    alert(correct ? 'Correct!' : 'Wrong!');
    handleToggle(evt.target, null);
  };
  const menuItems = [
    { children: 'Gotham City', key: 'gotham', onClick: onItemClick },
    { children: 'The Big Apple', key: 'ny', onClick: onItemClick },
    {
      children: 'Metropolis',
      key: 'metropolis',
      onClick: onItemClick,
    },
    {
      children: <span>Arcos de la Frontera</span>,
      key: 'arcos',
      onClick: onItemClick,
    },
  ];
  return (
    <div>
      <table>
        <tr>
          <th style={{ textAlign: 'left' }}>Hero</th>
          <th style={{ textAlign: 'left', paddingLeft: '40px' }}>Alter Ego</th>
          <th style={{ textAlign: 'left', paddingLeft: '40px' }}>Pick Home</th>
        </tr>
        <tr>
          <td>Batman</td>
          <td style={{ textAlign: 'left', paddingLeft: '40px' }}>
            Bruce Wayne
          </td>
          <td style={{ textAlign: 'left', paddingLeft: '40px' }}>
            <DotIconButton
              iconId="home"
              onClick={(event) => handleToggle(event, 'batman')}
            />
          </td>
        </tr>
        <tr>
          <td>Spiderman</td>
          <td style={{ textAlign: 'left', paddingLeft: '40px' }}>
            Peter Parker
          </td>
          <td style={{ textAlign: 'left', paddingLeft: '40px' }}>
            <DotIconButton
              iconId="home"
              onClick={(event) => handleToggle(event, 'spidey')}
            />
          </td>
        </tr>
        <tr>
          <td>Superman</td>
          <td style={{ textAlign: 'left', paddingLeft: '40px' }}>Clark Kent</td>
          <td style={{ textAlign: 'left', paddingLeft: '40px' }}>
            <DotIconButton
              iconId="home"
              onClick={(event) => handleToggle(event, 'superman')}
            />
          </td>
        </tr>
      </table>
      <DotMenu
        {...args}
        anchorEl={anchorEl}
        id={id}
        menuItems={menuItems}
        menuPlacement="bottom-start"
        onLeave={(event) => onLeave(event, setOpen)}
        open={open}
      ></DotMenu>
    </div>
  );
};
