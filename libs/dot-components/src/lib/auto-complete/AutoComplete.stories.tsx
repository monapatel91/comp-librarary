import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { inputVariantOptions } from '../input-form-fields/InputFormFields';
import {
  AutoCompleteOption,
  autoCompleteSize,
  DotAutoComplete,
} from './AutoComplete';

export default {
  component: DotAutoComplete,
  title: 'AutoComplete',
};

export const autoComplete = () => {
  const dummyOptions: Array<AutoCompleteOption> = [
    { category: 'Marvel', title: 'Hulk' },
    { category: 'Marvel', title: 'Thor' },
    { category: 'Marvel', title: 'Ironman' },
    { category: 'Marvel', title: 'Spiderman' },
    { category: 'D.C.', title: 'Batman' },
    { category: 'D.C.', title: 'Flash' },
    { category: 'D.C.', title: 'Aquaman' },
    { category: 'D.C.', title: 'Wonderwoman' },
  ];
  const sbSizeOptions = { Medium: 'medium', Small: 'small' };
  const sbVariantOptions = {
    Filled: 'filled',
    Outlined: 'outlined',
    Standard: 'standard',
  };

  const groupId = 'Options';
  const freesolo = boolean('Allow Any Value?', true, groupId);
  const group = boolean('Group by Category', true, groupId);
  const multiple = boolean('Multiple', true, groupId);
  const label = text('Label', 'Favorite Hero(s)', groupId);
  const placeholder = text('Name', 'Choose your hero', groupId);
  const size = select(
    'Size',
    sbSizeOptions,
    'medium',
    groupId
  ) as autoCompleteSize;
  const variant = select(
    'Variant',
    sbVariantOptions,
    'outlined',
    groupId
  ) as inputVariantOptions;

  return (
    <DotAutoComplete
      freesolo={freesolo}
      group={group}
      inputVariant={variant}
      label={label}
      multiple={multiple}
      onChange={action('onChange')}
      options={dummyOptions}
      placeholder={placeholder}
      size={size}
    />
  );
};
