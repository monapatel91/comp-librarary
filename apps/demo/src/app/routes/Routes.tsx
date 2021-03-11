import React from 'react';
import { Route } from 'react-router-dom';

import DemoProgressionBoard from '../../demo-components/DemoProgressionBoard';
import DemoForm from '../../demo-components/DemoForm';

export const Routes = () => {
  return (
    <>
      <Route path="/" exact component={DemoProgressionBoard} />
      <Route path="/insights" exact component={DemoForm} />
    </>
  );
};
