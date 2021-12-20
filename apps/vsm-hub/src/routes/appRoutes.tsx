import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { VsmHome } from '../pages/home/home';
import { VsmAccount } from '../pages/account/Account';
import { VsmHubProducts } from '../pages/products/Products';
import { VsmHubUsage } from '../pages/products/usage/Usage';
import { VsmHubAccountList } from '../pages/account/account-list/AccountList';
export const VsmRoutes = (
  <Routes>
    <Route path="/" element={VsmHome} />
    <Route path="/accounts" element={VsmHubAccountList} />
    <Route path="/account/:accountId" element={VsmAccount} />
    <Route path="/product/:productId" element={VsmHubProducts} />
    <Route path="/product/usage/:productId" element={VsmHubUsage} />
    {/* <Route
        path="/running-demo/:runId/:demoId"
        element={DaasRunningDemo}
      /> */}
  </Routes>
);
