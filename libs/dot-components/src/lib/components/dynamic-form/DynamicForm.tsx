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
} from './custom-widgets';
import { DotButton } from '../button/Button';

export interface DynamicFormProps<T> {
  schema: JSONSchema6;
  formData?: T;
  liveValidate?: boolean;
  onSubmit?: (event: ISubmitEvent<T>) => void;
  uiSchema?: UiSchema;
  validate?:
    | ((formData: T, errors: FormValidation) => FormValidation)
    | undefined;
  onChange?: ((e: IChangeEvent<T>, es?: ErrorSchema) => any) | undefined;
}

function DotDynamicForm<T>({
  schema,
  formData = {} as T,
  liveValidate,
  onSubmit,
  uiSchema,
  validate,
  onChange,
}: DynamicFormProps<T>) {
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
    SelectWidget: CustomCheckboxesWidget,
  };

  return (
    <>
      <div>Dynamic Form:</div>
      <Form
        schema={schema}
        widgets={widgets}
        uiSchema={uiSchema}
        FieldTemplate={FieldTemplate}
        ObjectFieldTemplate={ObjectFieldTemplate}
        ErrorList={ErrorList}
        liveValidate={liveValidate}
        formData={formData}
        onSubmit={onSubmit}
        validate={validate}
        onChange={onChange}
      >
        <div>
          <DotButton isSubmit>Submit</DotButton>
          <DotButton type="text">Cancel</DotButton>
        </div>
      </Form>
    </>
  );
}

export { DotDynamicForm };
