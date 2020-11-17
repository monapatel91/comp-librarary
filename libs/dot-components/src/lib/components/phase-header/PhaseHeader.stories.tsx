import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotPhaseHeader, PhaseHeaderProps } from './PhaseHeader';

export default {
  title: 'Components/Phase Header',
  component: DotPhaseHeader,
  argTypes: {
    canDelete: { defaultValue: true },
    canEdit: { defaultValue: true },
    category: { defaultValue: 'deploy' },
    label: { defaultValue: 'Label' },
    onDelete: { action: 'deleted' },
    onLabelChange: { action: 'label changed' },
    onCategoryChange: { action: 'category changed' },
  },
} as Meta;

export const Default: Story<PhaseHeaderProps> = (args) => (
  <DotPhaseHeader {...args} />
);
