import React, { render } from '@testing-library/react';
import { DotThemeProvider } from '../../theme-provider/ThemeProvider';

import { DotJsonSchemaForm } from './JsonSchemaForm';

describe('DotJsonSchemaForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotThemeProvider>
        <DotJsonSchemaForm schema={{}} />
      </DotThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
