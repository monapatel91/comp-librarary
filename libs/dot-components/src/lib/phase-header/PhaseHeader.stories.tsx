import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { DotPhaseHeader, CategoryType } from './PhaseHeader';

export default {
  component: DotPhaseHeader,
  title: 'PhaseHeader',
};

export const phaseHeader = () => {
  const categoryOptions = {
    Plan: 'plan',
    Code: 'code',
    Build: 'build',
    Test: 'test',
    Deploy: 'deploy',
    Monitor: 'monitor',
  };

  const groupId = 'Options';
  const canDelete = boolean('Can Delete', true, groupId);
  const canEdit = boolean('Can Edit', true, groupId);
  const category = select(
    'Category',
    categoryOptions,
    'deploy',
    groupId
  ) as CategoryType;
  const label = text('Label Text', 'Label', groupId);

  return (
    <DotPhaseHeader
      data-index={1}
      canDelete={canDelete}
      canEdit={canEdit}
      category={category}
      label={label}
      onCategoryChange={action('category changed')}
      onDelete={action('delete')}
      // onLabelChange={action('label changed')}
    />
  );
};
