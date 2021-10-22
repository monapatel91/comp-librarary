import React from 'react';
import Form, {
  ErrorListProps,
  FieldTemplateProps,
  ISubmitEvent,
  ObjectFieldTemplateProps,
  FormValidation,
  Widget,
  IChangeEvent,
  ErrorSchema,
  UiSchema,
} from 'react-jsonschema-form';
import { JSONSchema6 } from 'json-schema';

import { StyledFormContainer, rootClassName } from '../form/Form.styles';
import {
  CustomTextWidget,
  CustomCheckboxWidget,
  CustomCheckboxesWidget,
  CustomSelectWidget,
  CustomRadioWidget,
} from './custom-widgets';
import { DotButton } from '../button/Button';

interface JsonSchemaFormProps<T> {
  disabled?: boolean;
  schema: JSONSchema6;
  formData?: T;
  liveValidate?: boolean;
  onBlur?: (id: string, value: boolean | number | string | null) => void;
  onChange?:
    | ((event: IChangeEvent<T>, errorSchema?: ErrorSchema) => unknown)
    | undefined;
  onError?: (event: unknown) => unknown;
  onFocus?: (id: string, value: boolean | number | string | null) => void;
  onSubmit?: (event: ISubmitEvent<T>) => void;
  uiSchema?: UiSchema;
  validate?:
    | ((formData: T, errors: FormValidation) => FormValidation)
    | undefined;
}

function DotJsonSchemaForm<T>({
  disabled = false,
  schema,
  formData = {} as T,
  liveValidate,
  onBlur,
  onChange,
  onError,
  onFocus,
  onSubmit,
  uiSchema,
  validate,
}: JsonSchemaFormProps<T>) {
  const ObjectFieldTemplate = ({ properties }: ObjectFieldTemplateProps) => (
    <StyledFormContainer className={rootClassName}>
      {properties.map((property) => property.content)}
    </StyledFormContainer>
  );

  const FieldTemplate = ({ classNames, children }: FieldTemplateProps) => (
    <div className={classNames}>{children}</div>
  );

  const ErrorList = ({ errors }: ErrorListProps) => {
    return (
      <div>
        <div>There were some errors:</div>
        {errors.map((error, index) => (
          <div key={`${index}-error`}>{error.stack}</div>
        ))}
      </div>
    );
  };

  const widgets: { [name: string]: Widget } = {
    TextWidget: CustomTextWidget,
    PasswordWidget: CustomTextWidget,
    CheckboxWidget: CustomCheckboxWidget,
    CheckboxesWidget: CustomCheckboxesWidget,
    SelectWidget: CustomSelectWidget,
    RadioWidget: CustomRadioWidget,
  };

  return (
    <>
      <div>Dynamic Form:</div>
      <Form
        disabled={disabled}
        schema={schema}
        widgets={widgets}
        uiSchema={uiSchema}
        FieldTemplate={FieldTemplate}
        ObjectFieldTemplate={ObjectFieldTemplate}
        ErrorList={ErrorList}
        liveValidate={liveValidate}
        formData={formData}
        onBlur={onBlur}
        onChange={onChange}
        onError={onError}
        onFocus={onFocus}
        onSubmit={onSubmit}
        validate={validate}
      >
        <div>
          <DotButton isSubmit>Submit</DotButton>
          <DotButton type="text">Cancel</DotButton>
        </div>
      </Form>
    </>
  );
}

export { DotJsonSchemaForm, JsonSchemaFormProps };
