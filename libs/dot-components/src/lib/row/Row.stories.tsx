import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { DotRow } from './Row';

export default {
  component: DotRow,
  title: 'Row',
};

export const row = () => {
  let groupId = 'Options';
  const canDelete = boolean('Can Delete', true, groupId);
  const canEdit = boolean('Can Edit', true, groupId);
  const displayText = text('Display Text', 'Deploy all the things!', groupId);
  const icon = text('Icon ID', 'block', groupId);

  groupId = 'Delete Dialog';
  const deleteTitle = text('Title', 'Are you sure?', groupId);
  const deleteBody = text('Content', 'you can never go back', groupId);
  const deleteButtonText = text('Button Text', 'Delete', groupId);

  return (
    <DotRow
      canDelete={canDelete}
      canEdit={canEdit}
      deleteBodyText={deleteBody}
      deleteButtonText={deleteButtonText}
      deleteTitle={deleteTitle}
      displayText={displayText}
      iconId={icon}
      onDelete={action('On delete')}
      onEdit={action('On edit')}
    />
  );
};
