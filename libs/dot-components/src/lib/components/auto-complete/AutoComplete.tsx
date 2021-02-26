import React, { ChangeEvent } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotChip } from '../chip/Chip';
import {
  StyledTextField,
  rootClassName as textFieldRootClassName,
} from '../input-form-fields/InputFormFields.styles';

export type autoCompleteSize = 'medium' | 'small';

export interface AutoCompleteOption {
  group?: string;
  title: string;
  error?: boolean;
}

// takes multiple types of data from autocomplete selection
// parses value and returns a string which is saved to state
export const parseAutoCompleteValue = (value) => {
  if (typeof value === 'string') {
    return value;
  } else if (value && value.title) {
    return value.title;
  } else if (Array.isArray(value)) {
    let titles = '';
    value.forEach((val, index) => {
      if (index !== 0) {
        titles += ',';
      }
      titles += val.title ? val.title : val;
    });
    return titles;
  }
  return '';
};

export interface AutoCompleteProps extends CommonProps {
  /** default option that is selected */
  defaultValue?: AutoCompleteOption | AutoCompleteOption[];
  /** If true, the input will be displayed in an error state. */
  error?: boolean;
  /** If true, any arbitrary value can be typed in the field */
  freesolo?: boolean;
  /** If true, options will be grouped by category */
  group?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** The id for the input field. */
  inputId: string;
  /** Label displayed above the input field */
  label?: string;
  /** If true, will allow the user to select multiple options */
  multiple?: boolean;
  /** A function that should be executed when the value of the input changes */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (event: ChangeEvent<unknown>, value: any, reason: string) => void;
  /** pre-defined options available to the user */
  options: Array<AutoCompleteOption>;
  /** Placeholder text always displayed inside the input field */
  placeholder?: string;
  /** Determines the padding within the input field 'medium' or 'small' */
  size?: autoCompleteSize;
  /** value if this is a controlled component */
  value?: AutoCompleteOption | AutoCompleteOption[] | string;
}

export const DotAutoComplete = ({
  className,
  'data-testid': dataTestId,
  defaultValue,
  error = false,
  freesolo = true,
  group = false,
  helperText,
  inputId,
  label,
  multiple = true,
  onChange,
  options,
  placeholder,
  size = 'small',
  value,
}: AutoCompleteProps) => {
  const rootClasses = useStylesWithRootClass('dot-autocomplete', className);
  const textFieldRootClasses = useStylesWithRootClass(
    textFieldRootClassName,
    className
  );
  const getChips = (values, getTagProps) => {
    return values.map((option, index) => (
      <DotChip error={option.error} {...getTagProps({ index })}>
        {option.title ? option.title : option}
      </DotChip>
    ));
  };
  let showPlaceholder = !value && !defaultValue;
  const valuesChanged = (_event, val, reason) => {
    onChange && onChange(_event, val, reason);
    showPlaceholder = !val || val.length === 0;
  };
  const sortOptions = () => {
    return group
      ? options.sort((a, b) => {
          const aGroup = a.group ? a.group : '';
          const bGroup = b.group ? b.group : '';
          return -bGroup.localeCompare(aGroup);
        })
      : options;
  };
  return (
    <Autocomplete
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      multiple={multiple}
      options={sortOptions()}
      defaultValue={defaultValue}
      filterSelectedOptions={true}
      freeSolo={freesolo}
      getOptionLabel={(option) => parseAutoCompleteValue(option)}
      onChange={(_event, val, reason) => valuesChanged(_event, val, reason)}
      groupBy={group ? (option: AutoCompleteOption) => option.group : undefined}
      renderInput={(params) => (
        // We are not using DotInputText here because the {...params} spread
        // passed to renderInput includes inputProps and InputProps properties
        // that must be passed to TextField in order for Autocomplete to work
        // correctly. We decided that at this time exposing those props in
        // DotInputText would not be a worthwhile tradeoff. Instead we are
        // using the StyledTextField used by DotInputText so that we will
        // at least pick up any styling that is used there. Should additional
        // functionality be added to DotInputText we will have to make a
        // decision about if/how to expose it here.

        // <DotInputText
        //   {...params}
        //   error={error}
        //   helperText={helperText}
        //   id={inputId}
        //   label={label}
        //   name={label}
        //   placeholder={showPlaceholder ? placeholder : undefined}
        //   required={false}
        // />

        <StyledTextField
          {...params}
          classes={{ root: textFieldRootClasses }}
          error={error}
          helperText={helperText}
          id={inputId}
          label={label}
          name={label}
          placeholder={showPlaceholder ? placeholder : undefined}
          required={false}
          variant="outlined"
        />
      )}
      renderTags={
        multiple ? (values, getTagProps) => getChips(values, getTagProps) : null
      }
      size={size}
      value={value}
    />
  );
};
