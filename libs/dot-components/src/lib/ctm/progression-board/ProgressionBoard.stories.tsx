import React from 'react';
import { addDecorator } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { ProgressionBoardThemeProvider } from './ThemeProvider';
import { DotProgressionBoard } from './ProgressionBoard';
import samplePhases from './sampleData';

export default {
  title: 'Experimental/ProgressionBoard',
  component: DotProgressionBoard,
  // argTypes: {
  //   phases: { defaultValue: samplePhases },
  //   baseUrl: { defaultValue: 'http://localhost:8080' },
  // },
} as Meta;

// export const Default: Story<ProgressionBoardProps> = (args) => (
//   <ProgressionBoardThemeProvider>
//     <DotProgressionBoard {...args} />
//   </ProgressionBoardThemeProvider>
// );

export const withTheme = () => {
  return (
    <ProgressionBoardThemeProvider>
      <DotProgressionBoard
        phases={samplePhases}
        baseUrl="http://localhost:8080"
      />
    </ProgressionBoardThemeProvider>
  );
};
addDecorator(withTheme);
