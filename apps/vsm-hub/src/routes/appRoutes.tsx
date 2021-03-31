import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { VsmHome } from '../pages/home/home';
import { VsmAccount } from '../pages/account/Account';
import { VsmHubProducts } from '../pages/products/Products';
import { VsmHubUsage } from '../pages/products/usage/Usage';
import { VsmHubAccountList } from '../pages/account/account-list/AccountList';
export const VsmRoutes = (
  <Switch>
    <Route exact path="/" component={VsmHome} />
    <Route exact path="/accounts" component={VsmHubAccountList} />
    <Route exact path="/account/:accountId" component={VsmAccount} />
    <Route exact path="/product/:productId" component={VsmHubProducts} />
    <Route exact path="/product/usage/:productId" component={VsmHubUsage} />
    {/* <Route
        exact
        path="/running-demo/:runId/:demoId"
        component={DaasRunningDemo}
      /> */}
  </Switch>
);
