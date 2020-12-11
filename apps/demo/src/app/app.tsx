import React from 'react';

import './app.scss';

import { DotButton, DotIcon } from '@digital-ai/dot-components';
import DemoProgressionBoard from '../demo-components/DemoProgressionBoard';

export const App = () => {
  return (
    <div>
      <DotButton
        label="Click"
        onClick={() => alert('Button clicked!')}
        type="primary"
      />
      <DotIcon icon="script" />
      <div>
        <DemoProgressionBoard />
      </div>
    </div>
  );
};

export default App;
