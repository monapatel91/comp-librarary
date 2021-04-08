import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { DemoProgressionBoard } from '../../demo-components/DemoProgressionBoard';
import { DemoForm } from '../../demo-components/DemoForm';
import { DemoFormUncontrolled } from '../../demo-components/DemoFormUncontrolled';
import { ProgressionDemo } from '../../demo-components/DemoProgression';

export const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={DemoProgressionBoard} />
      <Route path="/demo-form" exact component={DemoForm} />
      <Route
        path="/demo-form-uncontrolled"
        exact
        component={DemoFormUncontrolled}
      />
      <Route path="/progression" exact component={ProgressionDemo} />
    </Router>
  );
};
