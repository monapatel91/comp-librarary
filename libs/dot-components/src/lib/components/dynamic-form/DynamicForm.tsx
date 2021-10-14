import React from 'react';
import Form, {
  ErrorListProps,
  FieldTemplateProps,
  ISubmitEvent,
  ObjectFieldTemplateProps,
  UiSchema,
} from 'react-jsonschema-form';
import { JSONSchema6 } from 'json-schema';

import { DotForm } from '../form/Form';
import { CustomTextWidget } from './custom-widgets/CustomTextWidget';
import { DotButton } from '../button/Button';

export interface DynamicFormProps {
  schema: JSONSchema6;
  formData?: any;
  onSubmit?: (event: ISubmitEvent<any>) => void;
}

function DotDynamicForm({ schema, formData, onSubmit }: DynamicFormProps) {
  const ObjectFieldTemplate = ({ properties }: ObjectFieldTemplateProps) => (
    <DotForm>{properties.map((property) => property.content)}</DotForm>
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
