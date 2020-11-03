import React from 'react';

import './app.scss';

import { DotButton } from '@digital-ai/dot-components';

export const App = () => {
  return (
    <div>
      <DotButton
        displayText="Click"
        onClick={() => alert('Button clicked!')}
        type="primary"
      />
    </div>
  );
};

export default App;
