import React from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDynamicForm } from './DynamicForm.styles';
import { DotInputText } from '../input-form-fields/InputText';
import Form, { FieldProps } from '@rjsf/core';
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';
import { DotCheckbox } from '../checkbox/Checkbox';

export interface DynamicFormProps extends CommonProps {
  schema: JSONSchema7;
}

export const DotDynamicForm = ({
  className,
  'data-testid': dataTestId,
  schema,
}: DynamicFormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const getSchemaProps = (props: FieldProps) => {
    if (!props.schema.properties) return {};
    const schemaProperties: { [p: string]: JSONSchema7Definition } =
      props.schema.properties;
    const cbProps: { [key: string]: unknown } = {};
    Object.entries(schemaProperties).forEach(
      ([key, value]: [string, { type: 'string'; default: string }]) => {
        cbProps[key] = value.default;
      }
    );
    return cbProps;
  };

  const DotCheckboxWidget = (props: FieldProps) => {
    const cbProps = getSchemaProps(props);
    return (
      <DotCheckbox
        {...cbProps}
        onChange={(event) => {
          props.onChange(event.target.checked);
        }}
      />
    );
  };

  const DotInputTextWidget = (props: FieldProps) => {
    const inputTextProps = getSchemaProps(props);
    return <DotInputText id={props.id} name="input-text" {...inputTextProps} />;
  };

  const uiSchema = {
    firstName: {
      'ui:field': 'dot-input-text',
    },
    isMandatory: {
      'ui:field': 'dot-checkbox',
    },
  };

  const fields = {
    'dot-input-text': DotInputTextWidget,
    'dot-checkbox': DotCheckboxWidget,
  };

  return (
    <StyledDynamicForm className={rootClasses} data-testid={dataTestId}>
      <Form
        fields={fields}
        schema={schema}
        uiSchema={uiSchema}
        onChange={(e) => console.log(e.formData)}
      />
    </StyledDynamicForm>
  );
};
