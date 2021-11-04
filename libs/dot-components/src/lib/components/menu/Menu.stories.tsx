import React, {
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotLink } from '../link/Link';
import { DotMenu, MenuProps } from './Menu';
import { DotButton } from '../button/Button';
import { DotIconButton } from '../button/IconButton';

const onLeave = (
  _evt: KeyboardEvent | MouseEvent,
  setOpen: Dispatch<SetStateAction<boolean>>
) => {
  setOpen(false);
};

export default {
  title: 'Components/Menu',
  component: DotMenu,
  argTypes: {
    dense: {
      defaultValue: true,
    },
    id: {
      defaultValue: 'foobar',
    },
    loading: {
      defaultValue: false,
    },
    menuPlacement: {
      defaultValue: 'bottom',
      name: 'Menu Placement',
    },
  },
} as Meta;

export const Default: Story<MenuProps> = (args) => {
  const [open, setOpen] = useState(true);
  const onItemSelect = (
    _event: MouseEvent,
    _menuId: string,
    itemKey: string
  ) => {
    alert(
      itemKey +
        " selected. Click the 'open' toggle in Controls to redisplay menu."
    );
  };
  const handleLeave = (_evt: MouseEvent) => {
    setOpen(false);
  };
  const menuItems = [
    {
      children: (
        <DotLink href="#" tooltip="Batman">
          Batman
        </DotLink>
      ),
      classes: 'batman-class',
      key: 'batman',
    },
    { children: 'Robin', key: 'robin' },
    { children: 'Bat Girl', key: 'bat-girl' },
    { children: 'Mister Mxyzptlk', key: 'mxy' },
    { children: 'Option Five', key: '5' },
    { children: 'Option Six', key: '6' },
    { children: 'Option Seven', key: '7' },
    { children: 'Option Eight', key: '8' },
    { children: 'Option Nine', key: '9' },
    { children: 'Option Ten', key: '10' },
    { children: 'Option Eleven', key: '11' },
    { children: 'Option Twelve', key: '12' },
    { children: 'Option Thirteen', key: '13' },
    { children: 'Option Fourteen', key: '14' },
    { children: 'Option Fifteen', key: '15' },
    { children: 'Option Sixteen', key: '16' },
    { children: 'Option Seventeen', key: '17' },
    { children: 'Option Eighteen', key: '18' },
    { children: 'Option Nineteen', key: '19' },
    { children: 'Option Twenty', key: '20' },
    { children: 'Option Twenty-one', key: '21' },
    { children: 'Option Twenty-two', key: '22' },
    { children: 'Option Twenty-three', key: '23' },
    { children: 'Option Twenty-four', key: '24' },
    { children: 'Option Twenty-five', key: '25' },
    { children: 'Option Twenty-six', key: '26' },
    { children: 'Option Twenty-seven', key: '27' },
    { children: 'Option Twenty-eight', key: '28' },
    { children: 'Option Twenty-nine', key: '29' },
    {
      children: 'Option Seven Thousand Four Hundred and Seventy-six',
      key: '7476',
    },
    { children: 'Last Option', key: '&' },
  ];
  return (
    <DotMenu
      {...args}
      menuItems={menuItems}
      onLeave={handleLeave}
      onSelect={onItemSelect}
      open={open}
    />
  );
};

// Menu with a button anchor
export const ButtonMenu: Story<MenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const onItemSelect = (
    _event: MouseEvent,
    _menuId: string,
    itemKey: string
  ) => {
    alert(itemKey + ' rules!');
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (anchorEl && prevOpen.current && !open) {
      anchorEl.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const menuItems = [
    { children: 'Batman', key: 'Batman' },
    { children: 'Robin', key: 'Robin' },
    { children: 'Bat Girl', key: 'Bat Girl' },
    { children: 'Superman', key: 'Superman' },
    { children: 'Supergirl', key: 'Supergirl' },
    { children: 'The Flash', key: 'The Flash' },
    { children: 'Green Arrow', key: 'Green Arrow' },
  ];
  return (
    <>
      <DotButton type="text" onClick={handleToggle}>
        Menu Button
      </DotButton>
      <DotMenu
        {...args}
        anchorEl={anchorEl}
        menuItems={menuItems}
        onLeave={(event) => onLeave(event, setOpen)}
        onSelect={onItemSelect}
        open={open}
      ></DotMenu>
    </>
  );
};

// Menu shared by multiple icon buttons in a table
export const TableMenu: Story<MenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const handleToggle = (event: MouseEvent, menuId: string) => {
    setId(menuId);
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const onItemSelect = (
    _event: KeyboardEvent | MouseEvent,
    menuId: string,
    itemKey: string
  ) => {
    const correct =
      (menuId === 'batman' && itemKey === 'gotham') ||
      (menuId === 'superman' && itemKey === 'metropolis') ||
      (menuId === 'spidey' && itemKey === 'ny');
    alert(correct ? 'Correct!' : 'Wrong!');
  };
  const menuItems = [
    { children: 'Gotham City', key: 'gotham' },
    { children: 'The Big Apple', key: 'ny' },
    {
      children: 'Metropolis',
      key: 'metropolis',
    },
    {
      children: <span>Arcos de la Frontera</span>,
      key: 'arcos',
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
        onSelect={onItemSelect}
        open={open}
      ></DotMenu>
    </div>
  );
};
