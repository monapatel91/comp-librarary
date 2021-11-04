import React, { MouseEvent, KeyboardEvent, useEffect } from 'react';
import Form, {
  ErrorListProps,
  ErrorSchema,
  FieldTemplateProps,
  FormValidation,
  IChangeEvent,
  ISubmitEvent,
  ObjectFieldTemplateProps,
  UiSchema,
  Widget,
} from 'react-jsonschema-form';
import { JSONSchema6 } from 'json-schema';

import { StyledFormContainer, rootClassName } from '../form/Form.styles';
import {
  CustomCheckboxesWidget,
  CustomCheckboxWidget,
  CustomRadioWidget,
  CustomSelectWidget,
  CustomTextWidget,
} from './custom-widgets';
import { DotButton } from '../button/Button';
import { StyledActionButtonsRow } from './JsonSchemaForm.styles';
import { SubmitButtonProps } from '../dialog/Dialog';

type BoolNumStr = boolean | number | string;

interface JsonSchemaFormProps<T> {
  disabled?: boolean;
  formData?: T;
  liveValidate?: boolean;
  onBlur?: (id: string, value: BoolNumStr) => void;
  onCancel?: (event: MouseEvent<Element> | KeyboardEvent<Element>) => void;
  onChange?: (event: IChangeEvent<T>, errorSchema?: ErrorSchema) => unknown;
  onError?: (event: unknown) => unknown;
  onFocus?: (id: string, value: BoolNumStr) => void;
  onSubmit?: (event: ISubmitEvent<T>) => void;
  schema: JSONSchema6;
  submitButtonProps?: SubmitButtonProps;
  /** DEPRECATED, DO NOT USE */
  submitButtonText?: string;
  uiSchema?: UiSchema;
  validate?: (formData: T, errors: FormValidation) => FormValidation;
}

function DotJsonSchemaForm<T>({
  disabled = false,
  formData = {} as T,
  liveValidate,
  onBlur,
  onCancel,
  onChange,
  onError,
  onFocus,
  onSubmit,
  schema,
  submitButtonProps,
  submitButtonText,
  uiSchema,
  validate,
}: JsonSchemaFormProps<T>) {

  useEffect(() => {
    // deprecation warning
    if (submitButtonText) {
      console.warn(
        'The use of `submitButtonText` is deprecated and will be removed in the next major release, please use `submitButtonProps.label` instead.'
      );
    }
  });

  const ObjectFieldTemplate = ({ properties }: ObjectFieldTemplateProps) => (
    <StyledFormContainer className={rootClassName}>
      {properties.map((property) => property.content)}
    </StyledFormContainer>
  );

  const FieldTemplate = ({ classNames, children }: FieldTemplateProps) => (
    <div className={classNames}>{children}</div>
  );

  const ErrorList = (_props: ErrorListProps) => (
    <div>There were some errors:</div>
  );

  const widgets: { [name: string]: Widget } = {
    TextWidget: CustomTextWidget,
    PasswordWidget: CustomTextWidget,
    CheckboxWidget: CustomCheckboxWidget,
    CheckboxesWidget: CustomCheckboxesWidget,
    SelectWidget: CustomSelectWidget,
    RadioWidget: CustomRadioWidget,
  };

  return (
    <Form
      disabled={disabled}
      ErrorList={ErrorList}
      FieldTemplate={FieldTemplate}
      formData={formData}
      liveValidate={liveValidate}
      ObjectFieldTemplate={ObjectFieldTemplate}
      onBlur={onBlur}
      onChange={onChange}
      onError={onError}
      onFocus={onFocus}
      onSubmit={onSubmit}
      schema={schema}
      uiSchema={uiSchema}
      validate={validate}
      widgets={widgets}
    >
      <StyledActionButtonsRow>
        <DotButton
          isSubmit
          autoFocus={submitButtonProps?.autoFocus}
          className={submitButtonProps?.className}
          data-testid={submitButtonProps?.['data-testid']}
          disabled={submitButtonProps?.disabled}
          disableRipple={submitButtonProps?.disableRipple}
          endIcon={submitButtonProps?.endIcon}
          startIcon={submitButtonProps?.startIcon}
          titleTooltip={submitButtonProps?.tooltip}
          type={submitButtonProps?.type || 'primary'}
        >
          {submitButtonText ? submitButtonText : submitButtonProps?.label || 'Submit'}
        </DotButton>
        <DotButton type="text" onClick={onCancel}>
          Cancel
        </DotButton>
      </StyledActionButtonsRow>
    </Form>
  );
}

export { DotJsonSchemaForm, JsonSchemaFormProps };
