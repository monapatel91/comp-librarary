import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export type autoCompleteSize = 'medium' | 'small';

export interface AutoCompleteOption {
  category: string;
  title: string;
}

// takes multiple types of data from autocomplete selection
// parses value and returns a string which is saved to state
export const parseAutoCompleteValue = (
  value: string | AutoCompleteOption | null
) => {
  if (typeof value === 'string') {
    return value;
  } else if (value && value.title) {
    return value.title;
  } else {
    return '';
  }
};

export interface AutoCompleteProps extends CommonProps {
  /** default option that is selected */
  defaultValue?: AutoCompleteOption;
  /** If true, any arbitrary value can be typed in the field */
  freesolo?: boolean;
  /** If true, options will be grouped by category */
  group?: boolean;
  /** Label displayed above the input field */
  label?: string;
  /** If true, will allow the user to select multiple options */
  multiple?: boolean;
  /** A function that should be executed when the value of the input changes */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (value: any, reason: string) => void;
  /** pre-defined options available to the user */
  options: Array<AutoCompleteOption>;
  /** Placeholder text always displayed inside the input field */
  placeholder?: string;
  /** Determines the padding within the input field 'medium' or 'small' */
  size?: autoCompleteSize;
  /** value if this is a controlled component */
  value?: AutoCompleteOption | string;
}

/**
 * @experimental This component is still in development
 */
export const DotAutoComplete = ({
  className,
  'data-testid': dataTestId,
  defaultValue,
  freesolo = true,
  group = false,
  label = undefined,
  multiple = true,
  onChange,
  options,
  placeholder,
  size = 'small',
  value,
}: AutoCompleteProps) => {
  const rootClasses = useStylesWithRootClass('dot-autocomplete', className);

  return (
    <Autocomplete
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      multiple={multiple}
      options={options.sort((a, b) => -b.category.localeCompare(a.category))}
      defaultValue={defaultValue ? [defaultValue.title] : []}
      filterSelectedOptions={true}
      freeSolo={freesolo}
      getOptionLabel={(option) => parseAutoCompleteValue(option)}
      onChange={(_event, val, reason) => onChange && onChange(val, reason)}
      groupBy={
        group ? (option: AutoCompleteOption) => option.category : undefined
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
        />
      )}
      size={size}
      value={value}
    />
  );
};

export default DotAutoComplete;
