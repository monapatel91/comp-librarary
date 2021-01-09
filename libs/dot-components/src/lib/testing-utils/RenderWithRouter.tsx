import React, { ReactNode } from 'react';
import { createMemoryHistory } from 'history';
import { renderWithTheme as render } from './RenderWithTheme';
import { Router } from 'react-router-dom';

export const renderWithRouter = (ui: ReactNode, route = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
};
