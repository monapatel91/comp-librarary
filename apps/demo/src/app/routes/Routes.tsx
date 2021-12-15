import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DemoForm } from '../../demo-components/DemoForm';
import { DemoFormUncontrolled } from '../../demo-components/DemoFormUncontrolled';
import { DemoCssGrid } from '../../demo-components/DemoCssGrid';
import { DemoCssGridTemplate } from '../../demo-components/DemoCssGridTemplate';
import { UserTable } from '../../demo-components/UserTable';
import { DemoDynamicForm } from '../../demo-components/DemoDynamicForm';
import { ProductButtons } from '../../demo-components/ProductWrapper';
import { Sandbox } from '../../demo-components/Sandbox';
import { DemoBreadcrumbs } from '../../demo-components/DemoBreadcrumbs';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/demo-form" exact component={DemoForm} />
      <Route
        path="/demo-form-uncontrolled"
        exact
        component={DemoFormUncontrolled}
      />
      <Route path="/demo-dynamic-form" exact component={DemoDynamicForm} />
      <Route path="/css-grid" exact component={DemoCssGrid} />
      <Route path="/css-grid-template" exact component={DemoCssGridTemplate} />
      <Route path="/user-table" exact component={UserTable} />
      <Route path="/product-buttons" exact component={ProductButtons} />
      <Route path="/sandbox" exact component={Sandbox} />
      <Route path="/breadcrumbs" exact component={DemoBreadcrumbs} />
    </Switch>
  );
};
