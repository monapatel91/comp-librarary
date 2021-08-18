import React, { useState, ChangeEvent, Ref } from 'react';
import { AutocompleteGetTagProps } from '@material-ui/lab';
import { rootClassName, StyledAutocomplete } from './AutoComplete.styles';
import { StyledPopper } from '../menu/Menu.styles';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotChip } from '../chip/Chip';
import {
  StyledTextField,
  rootClassName as textFieldRootClassName,
} from '../input-form-fields/InputFormFields.styles';

export type autoCompleteSize = 'medium' | 'small';
export type AutoCompleteValue =
  | string
  | AutoCompleteOption
  | AutoCompleteOption[];

export interface AutoCompleteOption {
  group?: string;
  title: string;
  error?: boolean;
}

// takes multiple types of data from autocomplete selection
// parses value and returns a string which is saved to state
export const parseAutoCompleteValue = (value: AutoCompleteValue) => {
  if (typeof value === 'string') {
    return value;
  } else if (Array.isArray(value)) {
    let titles = '';
    value.forEach((val, index) => {
      if (index !== 0) {
        titles += ',';
      }
      titles += val.title ? val.title : val;
    });
    return titles;
  } else if (value && value.title) {
    return value.title;
  }
  return '';
};

export interface AutoCompleteProps extends CommonProps {
  /** This prop helps users to fill forms faster */
  autoFocus?: boolean;
  /** default option that is selected */
  defaultValue?: AutoCompleteValue;
  /** If true, the input will be disabled. */
  disabled?: boolean;
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
  /** pass a ref to the input element */
  inputRef?: Ref<HTMLInputElement>;
  /** Label displayed above the input field */
  label?: string;
  /** If true, will allow the user to select multiple options */
  multiple?: boolean;
  /** A function that should be executed when the value of the input changes */
  onChange?: (
    event: ChangeEvent<unknown>,
    value: AutoCompleteValue,
    reason: string
  ) => void;
  /** pre-defined options available to the user */
  options: Array<AutoCompleteOption>;
  /** Placeholder text always displayed inside the input field */
  placeholder?: string;
  /** Determines the padding within the input field 'medium' or 'small' */
  size?: autoCompleteSize;
  /** value if this is a controlled component */
  value?: AutoCompleteValue;
}
export const DotAutoComplete = ({
  autoFocus,
  className,
  'data-testid': dataTestId,
  defaultValue,
  disabled = false,
  error = false,
  freesolo = true,
  group = false,
  helperText,
  inputId,
  inputRef,
  label,
  multiple = true,
  onChange,
  options,
  placeholder,
  size = 'small',
  value,
}: AutoCompleteProps) => {
  const [showPlaceholder, setShowPlaceholder] = useState(
    !value && !defaultValue
  );
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const textFieldRootClasses = useStylesWithRootClass(
    textFieldRootClassName,
    className
  );
  const getChips = (
    values: Array<AutoCompleteOption | string>,
    getTagProps: AutocompleteGetTagProps
  ) => {
    return values.map((option, index) => {
      if (typeof option === 'string') {
        return <DotChip {...getTagProps({ index })}>{option}</DotChip>;
      } else {
        return (
          <DotChip error={option.error} {...getTagProps({ index })}>
            {option.title}
          </DotChip>
        );
      }
    });
  };
  const valuesChanged = ({
    _event,
    val,
    reason,
  }: {
    _event: ChangeEvent<unknown>;
    val: AutoCompleteValue;
    reason: string;
  }) => {
    onChange && onChange(_event, val, reason);
    setShowPlaceholder(parseAutoCompleteValue(val) === '');
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DotPopper = (props: any) => {
    return <StyledPopper {...props} />;
  };

  return (
    <StyledAutocomplete
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      disabled={disabled}
      multiple={multiple}
      options={sortOptions()}
      defaultValue={defaultValue}
      filterSelectedOptions={true}
      freeSolo={freesolo}
      getOptionLabel={(option) => parseAutoCompleteValue(option)}
      onChange={(_event, val: AutoCompleteValue, reason) =>
        valuesChanged({ _event, val, reason })
      }
      groupBy={group ? (option: AutoCompleteOption) => option.group : undefined}
      PopperComponent={DotPopper}
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

        <StyledTextField
          {...params}
          autoFocus={autoFocus}
          classes={{ root: textFieldRootClasses }}
          error={error}
          helperText={helperText}
          id={inputId}
          inputRef={inputRef}
          label={label}
          name={label}
          placeholder={showPlaceholder ? placeholder : undefined}
          required={false}
          variant="outlined"
        />
      )}
      renderTags={
        multiple
          ? (values: Array<AutoCompleteOption | string>, getTagProps) =>
              getChips(values, getTagProps)
          : null
      }
      size={size}
      value={value}
    />
  );
};
