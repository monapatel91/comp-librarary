import React, { ChangeEvent, createRef, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  DotAutoComplete,
  AutoCompleteProps,
  parseAutoCompleteValue,
  AutoCompleteValue,
} from './AutoComplete';
import { ActionItem } from '../menu/Menu';
import { DotIcon } from '../icon/Icon';

const batman = { group: 'D.C.', title: 'Batman', error: true };

const defaultValueWithError = [batman];

const actionItem: ActionItem = {
  icon: <DotIcon fontSize="small" iconId="add" />,
  text: 'Add new option',
  onClick: () => alert('New option added'),
};

export default {
  title: 'Components/Auto Complete',
  component: DotAutoComplete,
  argTypes: {
    inputId: {
      defaultValue: 'input-id',
    },
    options: {
      defaultValue: [
        { group: 'D.C.', title: 'Aquaman', error: false },
        batman,
        { group: 'D.C.', title: 'Flash', error: false },
        { group: 'Marvel', title: 'Hulk', error: false },
        { group: 'Marvel', title: 'Ironman', error: false },
        { group: 'D.C.', title: 'Robin', error: false },
        { group: 'Marvel', title: 'Spiderman', error: false },
        { group: 'Marvel', title: 'Thor', error: false },
        { group: 'D.C.', title: 'Wonderwoman', error: false },
      ],
    },
    placeholder: {
      defaultValue: 'Select a hero',
    },
    onChange: { action: 'on change' },
    actionItem: {
      defaultValue: actionItem,
    },
  },
} as Meta;

export const Default: Story<AutoCompleteProps> = (args) => (
  <DotAutoComplete {...args} />
);

export const WithError: Story<AutoCompleteProps> = ({ onChange, ...args }) => {
  const [helperText, setHelperText] = useState('No Batman without Robin!');
  const [error, setError] = useState(true);
  const ref = createRef<HTMLInputElement>();
  const handleOnChange = (
    _event: ChangeEvent<unknown>,
    value: AutoCompleteValue,
    reason: string
  ) => {
    const parsedValue = parseAutoCompleteValue(value);
    batman.error =
      parsedValue.indexOf('Batman') !== -1 &&
      parsedValue.indexOf('Robin') === -1;
    setError(batman.error);
    setHelperText(batman.error ? 'No Batman without Robin!' : null);
    console.log(`type: ${ref.current.getAttribute('type')}`);
    console.log(`autocomplete: ${ref.current.getAttribute('autocomplete')}`);
    console.log(
      `aria-autocomplete: ${ref.current.getAttribute('aria-autocomplete')}`
    );
    onChange(_event, value, reason);
  };
  return (
    <DotAutoComplete
      {...args}
      defaultValue={defaultValueWithError}
      error={error}
      helperText={helperText}
      inputRef={ref}
      onChange={handleOnChange}
    />
  );
};
