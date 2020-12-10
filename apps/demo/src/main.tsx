import { DotThemeProvider } from '@digital-ai/dot-components';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <DotThemeProvider>
      <App />
    </DotThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
