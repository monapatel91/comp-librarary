import React from 'react';
import {
  DotAvatar,
  DotButton,
  DotIconButton,
  DotMenu,
  MenuItemProps,
} from '@digital-ai/dot-components';
import { useState } from 'react';

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

  const handleClick: any = (event: React.MouseEvent<HTMLButtonElement>) => {
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
