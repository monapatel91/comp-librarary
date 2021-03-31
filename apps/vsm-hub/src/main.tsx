import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DotThemeProvider } from '@digital-ai/dot-components';

import App from './app/app';

ReactDOM.render(
  <BrowserRouter>
    <DotThemeProvider>
      <App />
    </DotThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
