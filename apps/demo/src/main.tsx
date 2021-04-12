import { DotThemeProvider } from '@digital-ai/dot-components';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DotThemeProvider>
        <App />
      </DotThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
