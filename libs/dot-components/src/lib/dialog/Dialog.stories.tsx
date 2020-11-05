import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { ButtonType, sbButtonTypeOptions } from '../button/Button';
import { DotDialog } from './Dialog';

export default {
  component: DotDialog,
  title: 'Organisms',
};

export const dialog = () => {
  const cancelIconOptions = {
    None: '',
    Cancel: 'cancel',
    Close: 'close',
  };

  const submitIconOptions = {
    None: '',
    Save: 'save',
    Delete: 'delete',
  };

  let groupId = 'Options';
  const isOpen = boolean('Open', true, groupId);
  const modalTitle = text('Title', 'The title', groupId);
  const modalText = text('Text', 'Put whatever you want here :)', groupId);

  groupId = 'Cancel Button';
  const cancelDisabled = boolean('Disabled', false, groupId);
  const cancelIcon = select('Icon', cancelIconOptions, undefined, groupId);
  const cancelText = text('Text', 'Cancel', groupId);
  const cancelType = select(
    'Type',
    sbButtonTypeOptions,
    'transparent',
    groupId
  ) as ButtonType;
  const cancelButtonProps = {
    type: cancelType,
    displayText: cancelText,
    iconId: cancelIcon,
    disabled: cancelDisabled,
  };

  groupId = 'Submit Button';
  const submitDisabled = boolean('Disabled', false, groupId);
  const submitIcon = select('Icon', submitIconOptions, undefined, groupId);
  const submitText = text('Text', 'OK', groupId);
  const submitType = select(
    'Type',
    sbButtonTypeOptions,
    'primary',
    groupId
  ) as ButtonType;
  const submitButtonProps = {
    type: submitType,
    displayText: submitText,
    iconId: submitIcon,
    disabled: submitDisabled,
  };
  return (
    <DotDialog
      open={isOpen}
      title={modalTitle}
      cancelButtonProps={cancelButtonProps}
      submitButtonProps={submitButtonProps}
      onCancel={action('cancelled')}
      onSubmit={action('submitted')}
    >
      <div>{modalText}</div>
    </DotDialog>
  );
};
