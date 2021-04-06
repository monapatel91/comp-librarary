import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  DotAutoComplete,
  AutoCompleteProps,
  parseAutoCompleteValue,
} from './AutoComplete';

const batman = { group: 'D.C.', title: 'Batman', error: true };

const defaultValueWithError = [batman];

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
  },
} as Meta;

export const Default: Story<AutoCompleteProps> = (args) => (
  <DotAutoComplete {...args} />
);

export const WithError: Story<AutoCompleteProps> = (args) => {
  const [helperText, setHelperText] = useState('No Batman without Robin!');
  const [error, setError] = useState(true);
  const onChange = (_event, value, reason) => {
    const parsedValue = parseAutoCompleteValue(value);
    batman.error =
      parsedValue.indexOf('Batman') !== -1 &&
      parsedValue.indexOf('Robin') === -1;
    setError(batman.error);
    setHelperText(batman.error ? 'No Batman without Robin!' : null);
  };
  return (
    <DotAutoComplete
      {...args}
      defaultValue={defaultValueWithError}
      error={error}
      helperText={helperText}
      onChange={onChange}
    />
  );
};
