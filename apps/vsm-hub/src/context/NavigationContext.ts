import React, { useEffect } from 'react';
import { createContext, useContext } from 'react';
import { BackItemProps, ListItemProps } from '@digital-ai/dot-components';
import { mainLevelNav, backItem, productLevelNav } from '../routes/routes';

export type NavList = {
  navList: Array<ListItemProps>;
  backItem: BackItemProps;
  goBack: boolean;
  branding: JSX.Element;
  setNavList: (navList: Array<ListItemProps>) => void;
  setBackItem: (navList: BackItemProps) => void;
  setGoBack: (value: boolean) => void;
  setBranding: (branding: JSX.Element) => void;
};
export const NavListContext = createContext<NavList>({
  navList: mainLevelNav,
  backItem: backItem,
  goBack: true,
  branding: null,
  setNavList: () => {},
  setBackItem: () => {},
  setGoBack: () => {},
  setBranding: () => {},
});
export const useNavListContext = () => useContext(NavListContext);

export const checkSelectedItem = (selectedIndex: number, productLevelNav) => {
  return productLevelNav.map((item, index) => {
    return {
      ...item,
      selected: index === selectedIndex,
    };
  });
};
