import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { ButtonType, sbButtonTypeOptions } from './../button/Button';
import { DotConfirmationDialog } from './ConfirmationDialog';

export default {
  component: DotConfirmationDialog,
  title: 'ConfirmationDialog',
};

export const confirmationDialog = () => {
  const iconOptions = {
    None: '',
    Add: 'add_circle_outline',
    Save: 'save',
    Delete: 'delete',
  };

  let groupId = 'Options';
  const message = text('Message', 'something useful', groupId);
  const title = text('Title', 'Please confirm', groupId);
  const open = boolean('Visible', true, groupId);

  groupId = 'Cancel Button';
  const cancelType = select(
    'Type',
    sbButtonTypeOptions,
    'transparent',
    groupId
  ) as ButtonType;
  const cancelText = text('Text', 'Cancel', groupId);
  const cancelIcon = select('Icon', iconOptions, undefined, groupId);
  const cancelBtnProps = {
    displayText: cancelText,
    iconId: cancelIcon,
    type: cancelType,
  };

  groupId = 'Confirm Button';
  const confirmType = select(
    'Type',
    sbButtonTypeOptions,
    'primary',
    groupId
  ) as ButtonType;
  const confirmText = text('Text', 'OK', groupId);
  const confirmIcon = select('Icon', iconOptions, undefined, groupId);
  const submitBtnProps = {
    displayText: confirmText,
    iconId: confirmIcon,
    type: confirmType,
  };

  return (
    <DotConfirmationDialog
      cancelBtnProps={cancelBtnProps}
      message={message}
      onCancel={action('cancelled')}
      onConfirm={action('confirmed')}
      showDialog={open}
      submitBtnProps={submitBtnProps}
      title={title}
    />
  );
};
