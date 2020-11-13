import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotRow, RowProps } from './Row';

export default {
  title: 'Row',
  component: DotRow,
} as Meta;

export const Primary: Story<RowProps> = (args) => <DotRow {...args} />;
