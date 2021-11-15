import React from 'react';
import { DotAutoComplete, DotDrawer } from '@digital-ai/dot-components';

export const Sandbox = () => {
  const options = [
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
    { id: '4', title: '4' },
    { id: '5', title: '5' },
    { id: '6', title: '6' },
    { id: '7', title: '7' },
    { id: '8', title: '8' },
    { id: '9', title: '9' },
  ];
  return (
    <div style={{ margin: 20 }}>
      <DotAutoComplete inputId="asd" options={options} />
      <DotDrawer open={true}>
        <DotAutoComplete inputId="asd" options={options} />
      </DotDrawer>
    </div>
  );
};
