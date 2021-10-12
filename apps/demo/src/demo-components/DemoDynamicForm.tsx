import React from 'react';
import { DotDynamicForm } from '@digital-ai/dot-components';
import { JSONSchema7 } from 'json-schema';

export const DemoDynamicForm = () => {
  const schema: JSONSchema7 = {
    type: 'object',
    properties: {
      firstName: {
        type: 'object',
        properties: {
          label: {
            type: 'string',
            default: 'First Name',
          },
          autoFocus: {
            type: 'boolean',
            default: true,
          },
          required: {
            type: 'boolean',
            default: true,
          },
        },
      },
      isMandatory: {
        type: 'object',
      },
    },
  };

  return <DotDynamicForm schema={schema} />;
};
