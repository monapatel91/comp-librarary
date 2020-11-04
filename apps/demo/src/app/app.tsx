import React from 'react';

import './app.scss';

import { DotButton, DotIcon } from '@digital-ai/dot-components';

export const App = () => {
  return (
    <div>
      <DotButton
        displayText="Click"
        onClick={() => alert('Button clicked!')}
        type="primary"
      />
      <DotIcon icon="script" />
    </div>
  );
};

export default App;
