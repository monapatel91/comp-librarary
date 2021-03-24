import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { DemoProgressionBoard } from '../../demo-components/DemoProgressionBoard';
import { DemoForm } from '../../demo-components/DemoForm';

export const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={DemoProgressionBoard} />
      <Route path="/insights" exact component={DemoForm} />
    </Router>
  );
};
