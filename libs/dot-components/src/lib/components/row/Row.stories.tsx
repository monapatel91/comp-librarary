import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotRow, RowProps } from './Row';

export default {
  title: 'Components/Row',
  component: DotRow,
  argTypes: {
    canDelete: {
      defaultValue: true,
    },
    canEdit: {
      defaultValue: true,
    },
    iconId: {
      defaultValue: 'block',
    },
  },
} as Meta;

export const Default: Story<RowProps> = (args) => <DotRow {...args} />;
