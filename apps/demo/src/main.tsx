import { DotThemeProvider } from '@digital-ai/dot-components';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/app';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <DotThemeProvider>
        <App />
      </DotThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
