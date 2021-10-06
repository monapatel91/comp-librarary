import React, {
  useState,
  ChangeEvent,
  Ref,
  MouseEvent,
  useRef,
  FocusEvent,
  MutableRefObject,
} from 'react';
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
import { Paper } from '@material-ui/core';
import { DotButton } from '../button/Button';
import { DotIcon } from '../icon/Icon';

export interface ActionItem {
  /** The icon to display on the button */
  iconId: string;
  /** Event callback */
  onClick: () => void;
  /** Text displayed */
  text: string;
}

export type autoCompleteSize = 'medium' | 'small';
export type AutoCompleteValue =
  | string
  | string[]
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
      if (typeof val === 'string') {
        titles += val;
      } else {
        titles += val.title;
      }
    });
    return titles;
  } else if (value && value.title) {
    return value.title;
  }
  return '';
};

export interface AutoCompleteProps extends CommonProps {
  /** Action button as the last element on the menu **/
  actionItem?: ActionItem;
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
  options?: Array<AutoCompleteOption>;
  /** Placeholder text always displayed inside the input field */
  placeholder?: string;
  /** Determines the padding within the input field 'medium' or 'small' */
  size?: autoCompleteSize;
  /** value if this is a controlled component */
  value?: AutoCompleteValue;
}
export const DotAutoComplete = ({
  actionItem,
  ariaLabel,
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
  const [isOpened, setIsOpened] = useState(false);
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const textFieldRootClasses = useStylesWithRootClass(
    textFieldRootClassName,
    className
  );

  let textFieldInput: HTMLInputElement;
  // Used for focus management while popper is opened
  const actionItemRef = useRef<HTMLInputElement>();

  const textFieldRef = (element: HTMLInputElement) => {
    // We want to use this element in callback function
    textFieldInput = element;
    // Check if ref is defined via props
    if (inputRef) {
      // Check if callback ref
      if (typeof inputRef === 'function') {
        inputRef(element);
      } else {
        // We are dealing with mutable ref object
        (inputRef as MutableRefObject<HTMLInputElement>).current = element;
      }
    }
  };

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
    event,
    val,
    reason,
  }: {
    event: ChangeEvent<unknown>;
    val: AutoCompleteValue;
    reason: string;
  }) => {
    onChange && onChange(event, val, reason);
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

  const handleBlur = (event: FocusEvent<HTMLElement>): void =>
    event.relatedTarget !== actionItemRef.current && setIsOpened(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DotPopper = (props: any) => {
    if (!actionItem || Object.keys(actionItem).length === 0)
      return <StyledPopper {...props} />;
    const { iconId, text, onClick } = actionItem;
    const paperProps = props.children.props;
    const paperChildren = paperProps.children;

    const onActionButtonClick = () => {
      setIsOpened(false);
      textFieldInput.focus();
      onClick();
    };

    return (
      <StyledPopper {...props}>
        <Paper {...paperProps}>
          {paperChildren}
          <div
            className="dot-action-item"
            /* Add this to short circuit blur event (otherwise button click will not work):
             * https://github.com/mui-org/material-ui/issues/19038 */
            onMouseDown={(e: MouseEvent<HTMLDivElement>) => {
              e.preventDefault();
            }}
            onKeyDown={(event) => {
              if (event.key === 'Tab' && textFieldInput) {
                event.preventDefault();
                textFieldInput.focus();
              }
            }}
            // We want to close the popper each time focus is shifted from action item
            onBlur={handleBlur}
          >
            <DotButton
              data-testid="dot-action-item-btn"
              disableRipple={true}
              fullWidth={true}
              onClick={onActionButtonClick}
              ref={actionItemRef}
              startIcon={<DotIcon fontSize="small" iconId={iconId} />}
              type="text"
            >
              {text}
            </DotButton>
          </div>
        </Paper>
      </StyledPopper>
    );
  };

  return (
    <StyledAutocomplete
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      defaultValue={defaultValue}
      disabled={disabled}
      filterSelectedOptions={true}
      freeSolo={freesolo}
      getOptionLabel={(option: AutoCompleteOption) =>
        parseAutoCompleteValue(option)
      }
      groupBy={group ? (option: AutoCompleteOption) => option.group : undefined}
      multiple={multiple}
      onChange={(event, val: AutoCompleteValue, reason) => {
        valuesChanged({ event, val, reason });
        setIsOpened(false);
      }}
      open={isOpened}
      options={sortOptions()}
      PopperComponent={DotPopper}
      // We want to close the popper each time focus is shifted from the autocomplete
      onBlur={handleBlur}
      onClose={(event: ChangeEvent | FocusEvent) => {
        // We want to close popper in each occasion where focus isn't set to action item
        if (
          !('relatedTarget' in event) ||
          event.relatedTarget !== actionItemRef.current
        ) {
          setIsOpened(false);
        }
      }}
      onOpen={() => setIsOpened(true)}
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
          inputRef={textFieldRef}
          label={label}
          name={label}
          placeholder={showPlaceholder ? placeholder : undefined}
          required={false}
          variant="outlined"
          onKeyDown={(event) => {
            // Intercept 'tab' key press while action item element exists
            if (event.key === 'Tab' && actionItemRef.current) {
              event.preventDefault();
              actionItemRef?.current?.focus();
            }
          }}
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
