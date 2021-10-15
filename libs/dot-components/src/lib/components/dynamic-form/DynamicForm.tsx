import React from 'react';
import Form, {
  ErrorListProps,
  FieldTemplateProps,
  ISubmitEvent,
  ObjectFieldTemplateProps,
  UiSchema,
  FormValidation,
} from 'react-jsonschema-form';
import { JSONSchema6 } from 'json-schema';

import { StyledFormContainer, rootClassName } from '../form/Form.styles';
import { CustomTextWidget, CustomCheckboxWidget } from './custom-widgets';
import { DotButton } from '../button/Button';

export interface DynamicFormProps<T> {
  schema: JSONSchema6;
  formData?: T;
  onSubmit?: (event: ISubmitEvent<T>) => void;
  validate?:
    | ((formData: T, errors: FormValidation) => FormValidation)
    | undefined;
}

function DotDynamicForm<T>({
  schema,
  formData,
  onSubmit,
  validate,
}: DynamicFormProps<T>) {
  const ObjectFieldTemplate = ({ properties }: ObjectFieldTemplateProps) => (
    <StyledFormContainer className={rootClassName}>
      {properties.map((property) => property.content)}
    </StyledFormContainer>
  );

  const FieldTemplate = ({ classNames, children }: FieldTemplateProps) => (
    <div className={classNames}>{children}</div>
  );

  const ErrorList = ({ errors }: ErrorListProps) => (
    <div>
      <div>There were some errors:</div>
      {errors.map((error) => (
        <div>
          {error.property} --- {error.message}
        </div>
      ))}
    </div>
  );

  const widgets = {
    TextWidget: CustomTextWidget,
    PasswordWidget: CustomTextWidget,
    CheckboxWidget: CustomCheckboxWidget,
  };

  const uiSchema: UiSchema = {
    'ui:options': {},
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
        liveValidate={true}
        formData={formData}
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

export { DotDynamicForm };
