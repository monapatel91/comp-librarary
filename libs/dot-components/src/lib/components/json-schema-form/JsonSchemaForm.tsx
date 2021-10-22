import React from 'react';
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

type BoolNumStr = boolean | number | string;

interface JsonSchemaFormProps<T> {
  disabled?: boolean;
  formData?: T;
  liveValidate?: boolean;
  onBlur?: (id: string, value: BoolNumStr) => void;
  onChange?:
    | ((event: IChangeEvent<T>, errorSchema?: ErrorSchema) => unknown)
    | undefined;
  onError?: (event: unknown) => unknown;
  onFocus?: (id: string, value: BoolNumStr) => void;
  onSubmit?: (event: ISubmitEvent<T>) => void;
  schema: JSONSchema6;
  uiSchema?: UiSchema;
  validate?:
    | ((formData: T, errors: FormValidation) => FormValidation)
    | undefined;
}

function DotJsonSchemaForm<T>({
  disabled = false,
  formData = {} as T,
  liveValidate,
  onBlur,
  onChange,
  onError,
  onFocus,
  onSubmit,
  schema,
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
