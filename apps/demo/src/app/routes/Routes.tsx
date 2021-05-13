import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { DemoProgressionBoard } from '../../demo-components/DemoProgressionBoard';
import { DemoForm } from '../../demo-components/DemoForm';
import { DemoFormUncontrolled } from '../../demo-components/DemoFormUncontrolled';
import { ProgressionDemo } from '../../demo-components/DemoProgression';
import { DemoCssGrid } from '../../demo-components/DemoCssGrid';
import { DemoCssGridTemplate } from '../../demo-components/DemoCssGridTemplate';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={DemoProgressionBoard} />
      <Route path="/demo-form" exact component={DemoForm} />
      <Route
        path="/demo-form-uncontrolled"
        exact
        component={DemoFormUncontrolled}
      />
      <Route path="/progression" exact component={ProgressionDemo} />
      <Route path="/css-grid" exact component={DemoCssGrid} />
      <Route path="/css-grid-template" exact component={DemoCssGridTemplate} />
    </Switch>
  );
};
