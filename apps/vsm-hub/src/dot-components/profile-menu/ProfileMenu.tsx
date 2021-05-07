import React, { MouseEvent, useState } from 'react';
import {
  DotIconButton,
  DotMenu,
  MenuItemProps,
} from '@digital-ai/dot-components';

interface ProfileMenuProps {
  onLogout: () => void;
  menuItems?: Array<MenuItemProps>;
  iconId?: string;
}

export const ProfileMenu = ({
  onLogout,
  iconId = 'user',
  menuItems = [{ children: 'Logout' }],
}: ProfileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleOnLeave = () => setIsMenuOpen(false);

  return (
    <>
      <DotIconButton iconId={iconId} onClick={handleClick} />
      <DotMenu
        id={iconId}
        menuItems={menuItems}
        open={isMenuOpen}
        anchorEl={anchorEl}
        onSelect={onLogout}
        onLeave={handleOnLeave}
      />
    </>
  );
};
