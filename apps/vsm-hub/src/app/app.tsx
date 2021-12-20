import React, { ReactNode, useState } from 'react';

import { VsmHub } from '../vsm-hub/VsmHub';

import { Route } from 'react-router-dom';
import { NavListContext } from '../context/NavigationContext';
import { BackItemProps, ListItemProps } from '@digital-ai/dot-components';
import { mainLevelNav, backItem } from '../routes/routes';
import { DotBranding } from '../dot-components/branding/Branding';
export function App() {
  const [navList, setNavList] = useState<ListItemProps[]>(mainLevelNav);
  const [_backItem, setBackItem] = useState<BackItemProps>(backItem);
  const [goBack, setGoBack] = useState<boolean>();
  const [branding, setBranding] = useState<ReactNode>(
    <DotBranding title="Admin" />
  );

  return (
    <NavListContext.Provider
      value={{
        navList,
        setNavList,
        backItem: _backItem,
        setBackItem,
        goBack,
        setGoBack,
        branding,
        setBranding,
      }}
    >
      <div className="App">
        <Route path="/" element={VsmHub} />
      </div>
    </NavListContext.Provider>
  );
}

export default App;
