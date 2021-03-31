import React from 'react';
import { ProfileMenu } from '../dot-components/profile-menu/ProfileMenu';
import {
  DotNavList,
  NavListProps,
} from '../dot-components/layouts/nav-list/DotNavList';
import { VsmRoutes } from '../routes/appRoutes';
import { useNavListContext } from '../context/NavigationContext';

export const VsmHub = () => {
  const { branding, navList, backItem, goBack } = useNavListContext();

  const goToRelease = () => {
    window.open(
      'https://www7.v1host.com/V1Production/Default.aspx?menu=MyHomeEnterpriseGettingStartedPage',
      '_blank'
    );
  };

  const dotNavList: NavListProps = {
    navbar: {
      backItem: backItem,
      goBack: goBack,
      navItems: navList,
      collapsable: true,
      title: 'Admin',
      titleAvatarProps: {
        alt: 'branding',
        imageSrc: '../assets/svg/logo_d.svg',
        type: 'image',
        variant: 'square',
        size: 'small',
        style: { backgroundColor: 'transparent' },
      },
    },
    appToolbar: {
      appName: 'Platform',
      avatar: (
        <>
          <ProfileMenu
            iconId="apps"
            menuItems={[{ children: 'Agility' }, { children: 'Release' }]}
            onLogout={goToRelease}
          />
          <ProfileMenu onLogout={() => console.log('logout')} />
        </>
      ),
      navItems: [
        { iconId: 'notification-bell', titleTooltip: 'Alerts' },
        { iconId: 'help', titleTooltip: 'Help' },
      ],
    },
  };
  return <DotNavList {...dotNavList}>{VsmRoutes}</DotNavList>;
};
