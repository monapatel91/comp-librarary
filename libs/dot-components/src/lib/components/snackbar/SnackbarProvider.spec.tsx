import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotSnackbarProvider } from './SnackbarProvider';
describe('DotSnackbarProvider', () => {
  it('should render DotSnackbarProvider component', () => {
    render(<DotSnackbarProvider>Test</DotSnackbarProvider>);
    expect(screen.getByTestId('dot-snackbar-container')).toBeInTheDocument();
  });
});
