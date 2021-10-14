import React, { render } from '@testing-library/react';
import { DotThemeProvider } from '../../theme-provider/ThemeProvider';

import { DotDynamicForm } from './DynamicForm';

describe('DotDynamicForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotThemeProvider>
        <DotDynamicForm schema={{}} />
      </DotThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
