import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ButtonType, sbButtonTypeOptions } from '../button/Button';
import { DotEmptyState } from './EmptyState';
import { ReactComponent as EmptyStateImage } from '../assets/empty-state.svg';

export default {
  component: DotEmptyState,
  title: 'EmptyState',
};

export const emptyState = () => {
  const groupId = 'Options';
  const title = text('Title', 'No Data', groupId);
  const subtitle = text(
    'Subtitle',
    'There is no data because this is an empty state.',
    groupId
  );
  const imageAltText = text('Image Alt Text', 'No Data Found', groupId);
  const buttonText = text('Button Text', 'Add Data', groupId);
  const buttonType = select(
    'Button Type',
    sbButtonTypeOptions,
    'primary',
    groupId
  ) as ButtonType;
  const buttonProps = {
    displayText: buttonText,
    type: buttonType,
    onClick: action('button clicked'),
  };

  return (
    <DotEmptyState
      buttonProps={buttonProps}
      Image={EmptyStateImage}
      imageAltText={imageAltText}
      title={title}
      subtitle={subtitle}
    />
  );
};
